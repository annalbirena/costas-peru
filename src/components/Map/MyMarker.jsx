import { Button, Image, Stack, Text } from '@mantine/core';
import { IconPennant } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { Link } from 'react-router-dom';

function MyMarker({ data }) {
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <Marker
      longitude={data.longitude}
      latitude={data.latitude}
      anchor="bottom"
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        setPopupInfo(data);
      }}
    >
      <IconPennant size={32} color={data.tideStatus} />
      {popupInfo && (
        <Popup
          anchor="top"
          closeButton={false}
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          onClose={() => setPopupInfo(null)}
        >
          <Stack>
            <Text>{popupInfo.name}</Text>

            <Image
              src={popupInfo.image}
              alt="Foto de playa"
              radius="sm"
              h={200}
            />
            <Link to={`/playas/${popupInfo.id}`} target="_blank">
              <Button w="100%" variant="filled" color="dark">
                Más información
              </Button>
            </Link>
          </Stack>
        </Popup>
      )}
    </Marker>
  );
}

MyMarker.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    hasLifeguards: PropTypes.bool.isRequired,
    hasRestrooms: PropTypes.bool.isRequired,
    hasShowers: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    isHealthy: PropTypes.bool.isRequired,
    latitude: PropTypes.number.isRequired,
    lifeguardSchedule: PropTypes.string.isRequired,
    longitude: PropTypes.number.isRequired,
    municipalityId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    restrictions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ),
    restroomSchedule: PropTypes.string.isRequired,
    showerSchedule: PropTypes.string.isRequired,
    tideStatus: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyMarker;
