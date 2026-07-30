import { useState } from 'react';
import './App.css';

interface Flower {
  id: number;
  name: string;
  price: string;
  color: string;
  meaning: string;
  emoji: string;
}

const FLOWERS_DATA: Flower[] = [
  { id: 1, name: "Red Rose", price: "$15.00", color: "#e63946", meaning: "Love & Passion", emoji: "🌹" },
  { id: 2, name: "Sunflower", price: "$12.50", color: "#ffb703", meaning: "Adoration & Loyalty", emoji: "🌻" },
  { id: 3, name: "White Lily", price: "$18.00", color: "#f1faee", meaning: "Purity & Rebirth", emoji: "🪻" },
  { id: 4, name: "Pink Tulip", price: "$10.00", color: "#ffb5a7", meaning: "Confidence & Happiness", emoji: "🌷" },
  { id: 5, name: "Cherry Blossom", price: "$22.00", color: "#fcd5ce", meaning: "Spiritual Rebirth", emoji: "🌸" },
  { id: 6, name: "Lotus", price: "$25.00", color: "#ffccd5", meaning: "Enlightenment & Purity", emoji: "🪷" }
];

function App() {
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);

  return (
    <div className="flower-app">
      <header className="flower-header">
        <h1>🌸 The Blossom Boutique 🌸</h1>
        <p>Discover beautiful flowers and their hidden meanings</p>
      </header>

      <main className="flower-container">
        <section className="flower-grid">
          {FLOWERS_DATA.map((flower) => (
            <div 
              key={flower.id} 
              className={`flower-card ${selectedFlower?.id === flower.id ? 'active' : ''}`}
              onClick={() => setSelectedFlower(flower)}
            >
              <span className="flower-emoji" role="img" aria-label={flower.name}>
                {flower.emoji}
              </span>
              <h3>{flower.name}</h3>
              <p className="price">{flower.price}</p>
            </div>
          ))}
        </section>

        {selectedFlower && (
          <section className="flower-details-modal">
            <div className="modal-content" style={{ borderTop: `8px solid ${selectedFlower.color}` }}>
              <h2>{selectedFlower.emoji} {selectedFlower.name}</h2>
              <p><strong>Price:</strong> {selectedFlower.price}</p>
              <p><strong>Symbolism:</strong> {selectedFlower.meaning}</p>
              <button onClick={() => setSelectedFlower(null)}>Close Details</button>
            </div>
          </section>
        )}
      </main>

      <footer className="flower-footer">
        <p>Designed with lwya for Day 46 Matrix Build Test</p>
      </footer>
    </div>
  );
}

export default App;
