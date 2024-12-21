import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import DistrictsPage from './pages/DistrictsPage';
import DistrictDetailPage from './pages/DistrictDetailPage';
import BeachesPage from './pages/BeachesPage';
import BeachDetailPage from './pages/BeachDetailPage';
import LoginPage from './pages/Auth/LoginPage';
import RequireAuth from './pages/Auth/RequiredAuth';
import PublicRoute from './pages/Auth/PublicRoute';
import EntityDataPage from './pages/EntityDataPage';
import RegisterBeachPage from './pages/RegisterBeachPage';
import EntityBeachesPage from './pages/EntityBeachesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/balnearios" element={<DistrictsPage />} />
        <Route path="/balnearios/:id" element={<DistrictDetailPage />} />
        <Route path="/playas" element={<BeachesPage />} />
        <Route path="/playas/:id" element={<BeachDetailPage />} />
        <Route path="/mapa" element={<MapPage />} />
        <Route element={<RequireAuth />}>
          <Route path="/mi-cuenta/datos" element={<EntityDataPage />} />
          <Route
            path="/mi-cuenta/publicar-playa"
            element={<RegisterBeachPage />}
          />
          <Route path="/mi-cuenta/playas" element={<EntityBeachesPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
