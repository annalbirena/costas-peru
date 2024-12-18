/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getMuniById } from '../services/municipality';

const MunicipalityContext = createContext();

export function MunicipalityProvider({ children }) {
  const [municipalityId, setMunicipalityId] = useState(null);
  const [municipality, setMunicipality] = useState(null);
  const [token, setToken] = useState(null);

  const getMunicipality = async (id) => {
    const userData = await getMuniById(id);
    setMunicipality(userData);
  };

  useEffect(() => {
    // Guardar token y municipalityId
    const id = localStorage.getItem('municipalityId');
    const tokenId = localStorage.getItem('token');
    setMunicipalityId(id);
    setToken(tokenId);
  }, []);

  useEffect(() => {
    if (municipalityId) {
      getMunicipality(municipalityId);
    }
  }, [municipalityId]);

  const contextValue = {
    municipalityId,
    setMunicipalityId,
    municipality,
    setMunicipality,
    token,
    setToken,
  };

  return (
    <MunicipalityContext.Provider value={contextValue}>
      {children}
    </MunicipalityContext.Provider>
  );
}

MunicipalityProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useMunicipalityContext = () => {
  const context = useContext(MunicipalityContext);

  return context;
};
