export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const departmentName in employeesList) {
    if (Object.prototype.hasOwnProperty.call(employeesList, departmentName)) {
      allEmployees[departmentName] = employeesList[departmentName];
    }
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}
