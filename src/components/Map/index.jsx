/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable operator-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable react/require-default-props */
import * as React from 'react';
import { Box } from '@mantine/core';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapLibreGl from 'maplibre-gl';
import { useRef } from 'react';
import {
  FullscreenControl,
  GeolocateControl,
  Map,
  NavigationControl,
} from 'react-map-gl';
import ControlPanel from './ControlPanel';
/* import MyMarker from './MyMarker'; */

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

        {/* Marcadores de mascotas perdidas y en adopción */}
        {/* {lostPins}
        {adoptedPins} */}

        {/* Panel de filtros */}
        <ControlPanel /* onFilterChange={handleFilterChange} */ />
      </Map>
    </Box>
  );
}

export default BeachesMap;
