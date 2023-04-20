export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];
  for (const item of reportWithIterator) {
    employeeNames.push(item);
  }
  return employeeNames.join(' | ');
}
