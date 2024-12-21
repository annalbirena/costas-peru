/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable object-curly-newline */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Breadcrumbs,
  Container,
  Group,
  Overlay,
  Text,
  Title,
} from '@mantine/core';
import { useParams } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import classes from './detail.module.css';
import BeachCard from '../../components/BeachCard';
import { getMuniById } from '../../services/municipality';

function DistrictDetailPage() {
  const { id } = useParams();
  const [muniData, setMuniData] = useState(null);

  const getMuniData = async () => {
    const data = await getMuniById(id);
    setMuniData(data);
  };

  useEffect(() => {
    if (id) {
      getMuniData();
    }
  }, [id]);

  return (
    <AppLayout>
      <Box>
        <div
          className={classes.hero}
          style={{
            backgroundImage: `url(${muniData?.image})`,
          }}
        >
          <Overlay
            gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
            opacity={1}
            zIndex={0}
          />
          <Container className={classes.container} size="md">
            <Title className={classes.title}>{muniData?.name}</Title>
            <Text className={classes.description} mt="xl" ta="center">
              {muniData?.phrase}
            </Text>
          </Container>
        </div>
        <Container size="md" pt={48} pb={100}>
          <Breadcrumbs separator="→" separatorMargin="md" mb="xl">
            <Text c="brand">{muniData?.department}</Text>
            <Text c="brand">{muniData?.province}</Text>
          </Breadcrumbs>
          <Text>{muniData?.description}</Text>
          <Title order={2} mt="xl">
            Playas
          </Title>
          <Group mt="xl">
            {muniData?.beaches?.length > 0 ? (
              muniData?.beaches.map((beach) => {
                return <BeachCard key={beach.id} data={beach} />;
              })
            ) : (
              <h1>No hay playas</h1>
            )}
          </Group>
        </Container>
      </Box>
    </AppLayout>
  );
}

export default DistrictDetailPage;
