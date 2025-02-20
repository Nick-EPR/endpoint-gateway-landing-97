
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
  },
  {
    name: "Jacksonville Office",
    coordinates: [-81.6557, 30.3322], // Jacksonville coordinates
    address: "Coming Soon",
    comingSoon: true
  }
];

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('pk.eyJ1IjoibmljazIyNTEyIiwiYSI6ImNtN2RoMDg3dDAzMmYybHB1eWpydDBpbDEifQ.Htsl1CZzmwbAdHooJgUKQA');

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
        style: 'mapbox://styles/mapbox/dark-v11',
        bounds: bounds,
        fitBoundsOptions: { padding: 100 }
      });

      locations.forEach(location => {
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <h3 class="font-bold">${location.name}</h3>
            <p>${location.comingSoon ? '<span class="text-primary">Coming Soon</span>' : location.address}</p>
          `);

        new mapboxgl.Marker({ 
          color: location.comingSoon ? '#666666' : '#93C851' // Grey for coming soon, green for active locations
        })
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
    <div className="w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default LocationMap;
