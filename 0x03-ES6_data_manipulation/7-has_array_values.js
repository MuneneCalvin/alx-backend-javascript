export default function hasValuesFromArray(set, array) {
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
