
// Import and require mysql2
const mysql = require('mysql2');
const viewAllDepartments = 'SELECT * FROM department;';
const Employee = require('./employee')

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'password1234',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// Query database
db.query(viewAllDepartments, function (err, results) {
  console.log(results);
});

const employee1 = new Employee();
console.log(employee1.getEmployeeInfoQuery());

// Returns employee ID
db.query(employee1.getEmployeeInfoQuery(), function (err, results) {
  console.log(results);
  employee1.updateEmployeeInfo(results[0]);
});

