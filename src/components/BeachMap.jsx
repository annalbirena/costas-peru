/* eslint-disable react/require-default-props */
import * as React from 'react';
import { useRef } from 'react';
import { Box } from '@mantine/core';
import { Map, Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import MapLibreGl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

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

function BeachMap({ location }) {
  const mapRef = useRef(null);

  return (
    <Box h={400} mt="xl">
      <Map
        ref={mapRef}
        initialViewState={viewPort}
        mapLib={MapLibreGl}
        style={containerStyle}
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=vRaFa8XivVdO0slo056m"
      >
        {location ? (
          <Marker
            latitude={location.latitude}
            longitude={location.longitude}
            color="red"
          />
        ) : null}
      </Map>
    </Box>
  );
}

BeachMap.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    PropTypes.oneOf([null]),
  ]).isRequired,
};

export default BeachMap;
