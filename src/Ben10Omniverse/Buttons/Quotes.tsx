import React, { useState, useEffect } from "react";
import quotesData from "../../API/quotes.json";
import "./Quotes.css";

interface Quote {
  quote: string;
  speaker: string;
  series: string;
}

const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load quotes from JSON and filter for Ben 10: Omniverse series
  useEffect(() => {
    const filteredQuotes = (quotesData as Quote[]).filter(
      (quote) => quote.series === "Ben 10: Omniverse"
    );
    setQuotes(filteredQuotes);
  }, []);

  const nextQuote = () =>
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  const prevQuote = () =>
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);

  if (quotes.length === 0) {
    return (
      <div className="quotes-container">
        <p className="no-quotes-text">Loading quotes...</p>
      </div>
    );
  }

  const currentQuote = quotes[currentIndex];

  return (
    <div className="quotes-container">
      <div className="quote-card">
        <div className="quote-text">
          <p>"{currentQuote.quote}"</p>
          <div className="quote-speaker">
            <p>— {currentQuote.speaker}</p>
          </div>
        </div>
        
        <div className="nav-buttons">
          <button onClick={prevQuote} className="quote-nav-btn">
            ← Previous
          </button>
          <span className="quote-counter">
            {currentIndex + 1} / {quotes.length}
          </span>
          <button onClick={nextQuote} className="quote-nav-btn">
            Next →
          </button>
        </div>
      </div>

      <div className="quote-grid">
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className={`quote-thumbnail ${
              idx === currentIndex ? "active-quote" : ""
            }`}
            onClick={() => setCurrentIndex(idx)}
          >
            <p className="thumbnail-quote">"{quote.quote.substring(0, 50)}..."</p>
            <span className="thumbnail-speaker">{quote.speaker}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;