export default function* createIteratorObject(report) {
  for (const departmentName in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, departmentName)) {
      const employeesList = report.allEmployees[departmentName];
      for (const employeeName of employeesList) {
        yield employeeName;
      }
    }
  }
}
