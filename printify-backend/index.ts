const PRINTFUL_API = "https://api.printful.com";

const API_KEY = process.env.PRINTFUL_API_KEY;

if (!API_KEY) {
  console.error("ERROR: PRINTFUL_API_KEY is missing from .env file!");
  // You can throw here if you want the server to fail fast
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

    // Fallback
    return new Response("Not Found", { status: 404, headers: corsHeaders });
  },
});

console.log("Printful backend running on http://localhost:5000");