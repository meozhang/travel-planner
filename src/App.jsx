import { useState } from 'react';
import './App.css';
import RealWorldMap from './RealWorldMap.jsx';
import FigmaButton from './FigmaButton.jsx';

const countries = [
  'Japan',
  'Italy',
  'Australia',
  'Canada',
  'Brazil',
];

const mockPlans = {
  Japan: [
    'Visit Tokyo Tower',
    'Explore Kyoto temples',
    'Relax in an onsen',
    'Eat sushi in Tsukiji',
  ],
  Italy: [
    'Tour the Colosseum in Rome',
    'See the canals of Venice',
    'Visit Florence museums',
    'Enjoy pizza in Naples',
  ],
  Australia: [
    'See the Sydney Opera House',
    'Snorkel the Great Barrier Reef',
    'Visit Uluru',
    'Explore Melbourne cafes',
  ],
  Canada: [
    'See Niagara Falls',
    'Visit Banff National Park',
    'Explore Old Quebec',
    'Ski in Whistler',
  ],
  Brazil: [
    'Visit Christ the Redeemer',
    'Relax on Copacabana Beach',
    'Explore the Amazon Rainforest',
    'Enjoy Carnival in Rio',
  ],
};

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  function handleSurprise() {
    const random = countries[Math.floor(Math.random() * countries.length)];
    setSelectedCountry(random);
  }

  return (
    <div className="main-layout">
      <div className="map-side">
        <RealWorldMap onCountrySelect={setSelectedCountry} />
      </div>
      <div className="content-side">
        <div className="app-container">
          <h1>Travel Planner</h1>

          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5em' }}>
            <label htmlFor="country-select" style={{ marginRight: '0.7em' }}>Select a country:</label>
            <select
              id="country-select"
              value={selectedCountry}
              onChange={e => setSelectedCountry(e.target.value)}
            >
              <option value="">-- Choose a country --</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
            <FigmaButton onClick={handleSurprise}>Surprise me</FigmaButton>
          </div>

          {selectedCountry && (
            <div className="travel-plan">
              <h2>Travel Plan for {selectedCountry}</h2>
              <ul>
                {mockPlans[selectedCountry].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
