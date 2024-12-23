import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import App from './App';
import theme from './theme';
import { MunicipalityProvider } from './context/MunicipalityContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MunicipalityProvider>
      <MantineProvider theme={theme}>
        <Notifications />
        <App />
      </MantineProvider>
    </MunicipalityProvider>
  </StrictMode>,
);
