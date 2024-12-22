function buildFilterURL(filters) {
  const params = new URLSearchParams();

  if (filters.isHealthy) {
    params.append('isHealthy', filters.isHealthy);
  }
  if (filters.hasLifeguards) {
    params.append('hasLifeguards', filters.hasLifeguards);
  }
  if (filters.tideStatus) {
    params.append('tideStatus', filters.tideStatus);
  }

  return params.toString();
}

export default buildFilterURL;
