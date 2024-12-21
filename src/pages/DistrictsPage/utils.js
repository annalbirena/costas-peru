function buildFilterURL(filters) {
  const params = new URLSearchParams();

  if (filters.department) {
    params.append('department', filters.department);
  }
  if (filters.province) {
    params.append('province', filters.province);
  }

  return params.toString();
}

export default buildFilterURL;
