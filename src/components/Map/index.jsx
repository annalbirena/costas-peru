import * as React from 'react';
import { Box } from '@mantine/core';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapLibreGl from 'maplibre-gl';
import { useRef, useState, useEffect, useMemo } from 'react';
import {
  FullscreenControl,
  GeolocateControl,
  Map,
  NavigationControl,
} from 'react-map-gl';
import { getBeaches } from '../../services/beach';
import MyMarker from './MyMarker';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 5,
};

const viewPort = {
  latitude: -12.113887,
  longitude: -77.033996,
  zoom: 10,
};

function BeachesMap() {
  const mapRef = useRef(null);
  const [beaches, setBeaches] = useState([]);

  useEffect(() => {
    const fetchBeaches = async () => {
      try {
        const beachesData = await getBeaches();
        setBeaches(beachesData);
      } catch (error) {
        console.error('Error fetching beaches data', error);
      }
    };
    fetchBeaches();
  }, []);

  const beachesPin = useMemo(
    () =>
      beaches
        ? beaches.map((beach) => <MyMarker key={beach.id} data={beach} />)
        : [],
    [beaches],
  );

  return (
    <Box flex={1}>
      <Map
        ref={mapRef}
        initialViewState={viewPort}
        mapLib={MapLibreGl}
        style={containerStyle}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=vRaFa8XivVdO0slo056m"
      >
        {/* Controles del mapa */}
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />

        {/* Marcador de playas */}
        {beachesPin}
      </Map>
    </Box>
  );
}

export default BeachesMap;
