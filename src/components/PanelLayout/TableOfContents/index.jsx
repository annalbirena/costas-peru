import { Link, useLocation } from 'react-router-dom';
import { Box, Paper } from '@mantine/core';
import { IconBeach, IconEdit, IconLogout, IconPlus } from '@tabler/icons-react';
import classes from './content.module.css';
/* import useAuth from '../../../hooks/useAuth'; */

function TableOfContents() {
  const { pathname } = useLocation();
  /* const { handleLogout } = useAuth(); */
  const active = pathname.split('/').pop();

  return (
    <Paper miw={250} shadow="xs">
      <Link
        to="/mi-cuenta/datos"
        className={`${classes.link} ${active === 'datos-personales' ? classes.linkActive : ''}`}
        style={{
          paddingLeft: `calc(${1} * var(--mantine-spacing-md))`,
        }}
      >
        <IconEdit size={18} stroke={1.5} />
        Datos
      </Link>
      <Link
        to="/mi-cuenta/publicar-playa"
        className={`${classes.link} ${active === 'publicar-mascota' ? classes.linkActive : ''}`}
        style={{
          paddingLeft: `calc(${1} * var(--mantine-spacing-md))`,
        }}
      >
        <IconPlus size={18} stroke={1.5} />
        Publicar Playa
      </Link>
      <Link
        to="/mi-cuenta/playas"
        className={`${classes.link} ${active === 'mascotas-perdidas' ? classes.linkActive : ''}`}
        style={{
          paddingLeft: `calc(${1} * var(--mantine-spacing-md))`,
        }}
      >
        <IconBeach size={18} stroke={1.5} />
        Mis Playas
      </Link>

      <Box
        className={classes.link}
        c="red"
        style={{
          cursor: 'pointer',
          paddingLeft: `calc(${1} * var(--mantine-spacing-md))`,
        }}
        /*  onClick={handleLogout} */
      >
        <IconLogout size={18} stroke={1.5} color="red" />
        Cerrar Sesión
      </Box>
    </Paper>
  );
}

export default TableOfContents;
