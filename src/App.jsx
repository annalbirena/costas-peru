import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/balnearios" element={<DistrictsPage />} />
        <Route path="/playas" element={<BeachesPage />} />
        <Route path="/mapa" element={<MapPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
