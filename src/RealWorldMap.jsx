import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';

// Minimal world countries GeoJSON (for demo, use a full one in production)
import worldGeoJson from './world-countries-sample.json';

function FitToWorld() {
  const map = useMap();
  useEffect(() => {
    map.fitWorld();
  }, [map]);
  return null;
}

export default function RealWorldMap({ onCountrySelect }) {
  const geoJsonRef = useRef();

  const onEachCountry = (feature, layer) => {
    layer.on({
      click: () => onCountrySelect(feature.properties.ADMIN),
    });
    layer.bindTooltip(feature.properties.ADMIN, { permanent: false, direction: 'auto' });
    layer.setStyle({
      color: '#888',
      weight: 1,
      fillColor: '#b6e0fe',
      fillOpacity: 0.3,
    });
    layer.on('mouseover', function () {
      this.setStyle({ fillColor: '#ffe066', fillOpacity: 0.6 });
    });
    layer.on('mouseout', function () {
      this.setStyle({ fillColor: '#b6e0fe', fillOpacity: 0.3 });
    });
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MapContainer
        style={{ width: '100%', height: '100%', borderRadius: '1.5em' }}
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={true}
        zoomControl={false}
        dragging={true}
        doubleClickZoom={true}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <GeoJSON data={worldGeoJson} onEachFeature={onEachCountry} ref={geoJsonRef} />
        <FitToWorld />
      </MapContainer>
    </div>
  );
}
