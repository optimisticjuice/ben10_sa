import { useEffect, useState } from 'react';

interface PrintfulProduct {
  id: string;
  name: string;
  thumbnail_url?: string;
  variants?: Array<{
    id: number;
    retail_price: string;
    sku?: string;
  }>;
  // Add more fields as you see in JSON
}

function ProductList() {
  const [products, setProducts] = useState<PrintfulProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/products')  // Your backend proxy
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setProducts(data.result || []);  // Printful wraps in "result"
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading products from Printful...</div>;
  if (error) return <div>Error: {error} (check backend token?)</div>;
  if (products.length === 0) return <div>No products yet – create one in Printful dashboard!</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', textAlign: 'center' }}>
            {product.thumbnail_url && (
              <img
                src={product.thumbnail_url}
                alt={product.name}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
              />
            )}
            <h3>{product.name}</h3>
            {product.variants && product.variants.length > 0 && (
              <p>From ${product.variants[0].retail_price}</p>
            )}
            <button 
              onClick={() => window.location.href = `/product/${product.id}`}
              style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#0066cc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              View Details / Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;