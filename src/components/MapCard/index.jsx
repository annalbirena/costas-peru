/* eslint-disable react/require-default-props */
import * as React from 'react';
import { Box } from '@mantine/core';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapLibreGl from 'maplibre-gl';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Map, Marker } from 'react-map-gl';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 5,
};

function MapCard({ location = null, setLocation }) {
  const mapRef = useRef(null);

  function handleClick(e) {
    const { lat, lng } = e.lngLat;
    setLocation({
      latitude: lat,
      longitude: lng,
    });
  }

  return (
    <Box h={300}>
      <Map
        ref={mapRef}
        initialViewState={{
          latitude: location?.latitude ? location?.latitude : -12.04318,
          longitude: location?.longitude ? location?.longitude : -77.02824,
          zoom: location?.longitude ? 16 : 10,
        }}
        mapLib={MapLibreGl}
        style={containerStyle}
        onClick={(e) => handleClick(e)}
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

MapCard.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    PropTypes.oneOf([null]),
  ]),
  setLocation: PropTypes.func.isRequired,
};

export default MapCard;
