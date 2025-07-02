// Simple mock map with interactive dots for destinations
import React from 'react';

const countryLocations = {
  Japan: { x: 0.85, y: 0.45 },
  Italy: { x: 0.53, y: 0.41 },
  Australia: { x: 0.93, y: 0.85 },
  Canada: { x: 0.23, y: 0.22 },
  Brazil: { x: 0.38, y: 0.72 },
};

export default function InteractiveMap({ countries, onSelectCountry, selectedCountry }) {
  return (
    <div className="interactive-map">
      <svg viewBox="0 0 1000 600" width="100%" height="100%" style={{ borderRadius: '1.5em', background: 'rgba(255,255,255,0.2)' }}>
        {/* World map background (placeholder) */}
        <rect x="0" y="0" width="1000" height="600" fill="#e0e7ef" />
        {/* Dots for each country */}
        {countries.map(country => {
          const loc = countryLocations[country];
          if (!loc) return null;
          return (
            <circle
              key={country}
              cx={loc.x * 1000}
              cy={loc.y * 600}
              r={selectedCountry === country ? 18 : 12}
              fill={selectedCountry === country ? '#a084e8' : '#61dafb'}
              stroke="#444"
              strokeWidth={selectedCountry === country ? 4 : 2}
              style={{ cursor: 'pointer', transition: 'all 0.2s' }}
              onClick={() => onSelectCountry(country)}
            >
              <title>{country}</title>
            </circle>
          );
        })}
      </svg>
      <div className="map-label">World Map (mocked)</div>
    </div>
  );
}
