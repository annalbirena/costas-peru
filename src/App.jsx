import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import DistrictsPage from './pages/DistrictsPage';
import DistrictDetailPage from './pages/DistrictDetailPage';
import BeachesPage from './pages/BeachesPage';
import BeachDetailPage from './pages/BeacheDetailPage';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
