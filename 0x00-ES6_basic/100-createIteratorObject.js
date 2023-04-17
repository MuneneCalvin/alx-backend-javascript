export default function createIteratorObject(report) {
  function* employeeIterator() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  }
  return employeeIterator();
}

