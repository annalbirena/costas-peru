/* eslint-disable import/prefer-default-export */
export function getNonEmptyRestrictions(restrictions) {
  return restrictions.filter((restriction) => restriction.name.trim() !== '');
}
