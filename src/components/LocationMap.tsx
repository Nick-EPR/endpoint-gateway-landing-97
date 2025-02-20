
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const locations = [
  {
    name: "East Coast Office",
    coordinates: [-78.7447, 42.9504], // Buffalo coordinates
    address: "1955 Wehrle Drive Suite C, Buffalo NY, 14221"
  },
  {
    name: "West Coast Office",
    coordinates: [-117.3755, 33.9806], // Riverside coordinates
    address: "3190 Chicago Avenue, Riverside, CA 92507"
  }
];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    const initializeMap = () => {
      if (!mapContainer.current || !mapboxToken) return;

      mapboxgl.accessToken = mapboxToken;
      
      const bounds = new mapboxgl.LngLatBounds();
      locations.forEach(location => {
        bounds.extend(location.coordinates as [number, number]);
      });

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        bounds: bounds,
        fitBoundsOptions: { padding: 50 }
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      locations.forEach(location => {
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <h3 class="font-bold">${location.name}</h3>
            <p>${location.address}</p>
          `);

        new mapboxgl.Marker({ color: '#93C851' })
          .setLngLat(location.coordinates as [number, number])
          .setPopup(popup)
          .addTo(map.current!);
      });
    };

    initializeMap();

    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken]);

  return (
    <div className="w-full">
      {!mapboxToken && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your Mapbox public token"
            className="w-full p-2 border rounded"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
          <p className="text-sm text-neutral mt-2">
            Get your public token from <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary">Mapbox</a>
          </p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-[400px] rounded-xl overflow-hidden" />
    </div>
  );
};

export default LocationMap;
