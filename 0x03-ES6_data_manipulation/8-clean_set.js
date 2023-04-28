export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const result = [];
  for (const string of set) {
    if (typeof string === 'string' && string.startsWith(startString)) {
      result.push(string.replace(startString, ''));
    }
  }
  return result.join('-');
}
