export default function cleanSet(set, startString) {
  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      result += `${value.substring(startString.length)}-`;
    }
  }

  if (result.length > 0) {
    result = result.substring(0, result.length - 1);
  }

  return result;
}
