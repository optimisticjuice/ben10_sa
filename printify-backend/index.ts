const PRINTFUL_API = "https://api.printful.com";
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY;

const API_KEY = process.env.PRINTFUL_API_KEY;

if (!API_KEY) {
  console.error("ERROR: PRINTFUL_API_KEY is missing from .env file!");
}

if (!STRIPE_SECRET_KEY) {
  console.error("ERROR: STRIPE_SECRET_KEY is missing from .env file!");
}

// Type definitions
interface PrintfulProduct {
  id: string;
  name: string;
  thumbnail_url?: string;
  variants?: Array<{
    id: number;
    retail_price: string;
    sku?: string;
  }>;
  description?: string;
  images?: Array<{
    url: string;
  }>;
}

interface StripeCheckoutRequest {
  productId: string;
  variantId: number;
  quantity: number;
}

interface StripeCheckoutResponse {
  id: string;
  object: string;
  stripePublicKey: string;
}

interface PrintfulErrorResponse {
  error: string;
}

interface StripeErrorResponse {
  error: string;
}

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

Bun.serve({
  port: 5000,

  async fetch(req) {
    const url = new URL(req.url);

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (req.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // Root path: shows status page in browser
    if (url.pathname === "/" && req.method === "GET") {
      return new Response(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Printful Backend API</title>
          <style>
            body { font-family: sans-serif; padding: 2rem; background: #f0f0f0; line-height: 1.6; }
            h1 { color: #333; }
            a { color: #0066cc; }
          </style>
        </head>
        <body>
          <h1>Printful Backend is Running! 🚀</h1>
          <p>Server is live on http://localhost:5000</p>
          <p>API endpoints (click to test):</p>
          <ul>
            <li><a href="/products">/products</a> → Your synced/custom products from Printful (JSON)</li>
            <li><a href="/catalog">/catalog</a> → Full Printful product catalog (JSON)</li>
          </ul>
          <p>From your React app, fetch like: fetch('/products')</p>
          <p>Current server time: ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}</p>
          <p>If /products shows "Not Found" or error → check terminal for logs (token issue?)</p>
        </body>
        </html>
        `,
        {
          headers: {
            ...corsHeaders,
            "Content-Type": "text/html",
          },
        }
      );
    }

    // 🔥 Get your synced/custom products from Printful
    if (url.pathname === "/products" && req.method === "GET") {
      try {
        const response = await fetch(
          `${PRINTFUL_API}/sync/products`,  // Correct endpoint for synced products
          { headers }
        );

        if (!response.ok) {
          let errorData;
          try {
            errorData = await response.json();
          } catch {
            errorData = { error: response.statusText };
          }
          return new Response(
            JSON.stringify({ error: (errorData as any).error || `Printful error: ${response.status}` }),
            {
              status: response.status,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } catch (err: any) {
        console.error("Fetch error:", err.message);
        return new Response(
          JSON.stringify({ error: "Server error fetching products: " + err.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Catalog (public product templates)
    if (url.pathname === "/catalog" && req.method === "GET") {
      try {
        const response = await fetch(`${PRINTFUL_API}/products`, { headers });
        const data = await response.json();
        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } catch (err: any) {
        return new Response(
          JSON.stringify({ error: "Error fetching catalog: " + err.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Get individual product by ID
    if (url.pathname.startsWith("/products/") && req.method === "GET") {
      const productId = url.pathname.split("/")[2];
      
      try {
        // First try to get from synced products
        const syncResponse = await fetch(`${PRINTFUL_API}/sync/products`, { headers });
        const syncData = await syncResponse.json() as { result: PrintfulProduct[] };
        
        // Find product in synced products
        const product = syncData.result?.find((p: PrintfulProduct) => p.id === productId);
        
        if (product) {
          return new Response(JSON.stringify({ result: [product] }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        
        // If not found in synced, try catalog
        const catalogResponse = await fetch(`${PRINTFUL_API}/products/${productId}`, { headers });
        if (catalogResponse.ok) {
          const catalogProduct = await catalogResponse.json();
          return new Response(JSON.stringify({ result: [catalogProduct] }), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
        
        return new Response(
          JSON.stringify({ error: "Product not found" }),
          { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      } catch (err: any) {
        return new Response(
          JSON.stringify({ error: "Error fetching product: " + err.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Create Stripe checkout session
    if (url.pathname === "/create-checkout-session" && req.method === "POST") {
      try {
        const body = await req.json() as unknown as StripeCheckoutRequest;
        const { productId, variantId, quantity } = body;
        
        // Get product details from Printful
        const productResponse = await fetch(`${PRINTFUL_API}/products/${productId}`, { headers });
        const product = await productResponse.json() as PrintfulProduct;
        
        // Create Stripe checkout session
        const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: [{
              price_data: {
                currency: "usd",
                product_data: {
                  name: product.name,
                  description: product.description || `Ben 10 Merch - ${product.name}`,
                  images: product.thumbnail_url ? [product.thumbnail_url] : undefined,
                },
                unit_amount: Math.round(parseFloat(product.variants?.[0]?.retail_price.replace('$', '') || '0') * 100),
              },
              quantity: quantity,
            }],
            success_url: `http://localhost:4173/success`,
            cancel_url: `http://localhost:4173/cancel`,
          }),
        });

        if (!stripeResponse.ok) {
          throw new Error("Failed to create Stripe session");
        }

        const stripeSession = await stripeResponse.json() as StripeCheckoutResponse;

        return new Response(JSON.stringify({ 
          sessionId: stripeSession.id,
          stripePublicKey: STRIPE_PUBLISHABLE_KEY
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } catch (err: any) {
        return new Response(
          JSON.stringify({ error: "Error creating checkout session: " + err.message }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
    }

    // Fallback
    return new Response("Not Found", { status: 404, headers: corsHeaders });
  },
});

console.log("Printful backend running on http://localhost:5000");