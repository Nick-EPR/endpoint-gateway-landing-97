
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Skeleton } from "./ui/skeleton";

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
  const [isZooming, setIsZooming] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const rotationAnimationRef = useRef<number>();

  useEffect(() => {
    const initializeMap = () => {
      if (!mapContainer.current || !mapboxToken) return;

      mapboxgl.accessToken = mapboxToken;
      
      // Calculate bounds for all locations
      const bounds = new mapboxgl.LngLatBounds();
      locations.forEach(location => {
        bounds.extend(location.coordinates as [number, number]);
      });

      // Initialize map with global view - starting slightly east of center
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [0, 20], // Start at center
        zoom: 1,
        projection: 'globe'
      });

      // Add markers after map loads
      map.current.on('load', () => {
        // Remove loading state
        setIsLoading(false);

        // Add atmosphere and globe effects
        map.current?.setFog({
          color: 'rgb(186, 210, 235)', // sky color
          'high-color': 'rgb(36, 92, 223)', // atmosphere color
          'horizon-blend': 0.02,
          'space-color': 'rgb(11, 11, 25)', // dark space color
          'star-intensity': 0.6 // background star brightness
        });

        // Add markers
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

        // Gentle initial rotation
        let startTime: number | null = null;
        const rotationDuration = 2500; // 2.5 seconds
        const totalRotation = -20; // reduced rotation amount

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / rotationDuration, 1);
          
          // Ease-in-out function for smooth acceleration and deceleration
          const easeProgress = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;

          if (map.current) {
            const center = map.current.getCenter();
            center.lng = 0 + (totalRotation * easeProgress);
            map.current.setCenter(center);
          }

          if (progress < 1) {
            rotationAnimationRef.current = requestAnimationFrame(animate);
          } else {
            // Start zoom animation after rotation completes
            setTimeout(() => {
              setIsZooming(true);
              map.current?.fitBounds(bounds, {
                padding: 100,
                duration: 3000,
                essential: true
              });
            }, 500); // Small pause after rotation
          }
        };

        rotationAnimationRef.current = requestAnimationFrame(animate);
      });
    };

    initializeMap();

    return () => {
      if (rotationAnimationRef.current) {
        cancelAnimationFrame(rotationAnimationRef.current);
      }
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken]);

  return (
    <div className="w-full h-full">
      <div ref={mapContainer} className="w-full h-full" />
      <div className={`absolute inset-0 pointer-events-none transition-all duration-3000 ${
        isZooming 
          ? 'bg-black/20 backdrop-blur-none' 
          : 'bg-black/20 backdrop-blur-sm'
      }`} />
      {/* Loading overlay */}
      <div 
        className={`absolute inset-0 bg-background transition-opacity duration-1000 flex items-center justify-center ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Skeleton className="w-16 h-16 rounded-full" />
      </div>
    </div>
  );
};

export default LocationMap;
