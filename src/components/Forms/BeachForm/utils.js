/* eslint-disable import/prefer-default-export */
export function getNonEmptyRestrictions(restrictions) {
  return restrictions.filter((restriction) => restriction.name.trim() !== '');
}

export function filterFields(array) {
  return array.map((item) => ({
    name: item.name,
    description: item.description,
  }));
}
