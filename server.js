
// Import and require mysql2
const mysql = require('mysql2');
const viewAllDepartments = 'SELECT * FROM department;';
const Employee = require('./employee')
const inquirer = require('inquirer');

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
 
});

const employee1 = new Employee();



// VIEW FUNCTIONS

// Returns employee ID
const employeeViewAll = () => { db.query(employee1.getEmployeeInfoQuery(), function (err, results) {
  console.table(results);
});
};

const databaseViewAll = () => {
  db.query('SELECT * FROM department;', function (err, results) {
    console.table(results);
  });
};

const roleViewAll = () => {
  db.query(`SELECT
  role.title,
  role.salary,
  role.id,
  department_name
  FROM role
  JOIN department ON role.department_id = department.id;`, function (err, results) {
    console.table(results);
  });
};


const showTables = () => {
inquirer
  .prompt([
    {
      name: "database_election",
      type: "list",
      message: "What do you want to do?",
      choices: ["View All Departments", "View All Roles", "View All Employees", "Nothing"],
    },
  ])
  .then((answer) => {
    if (answer.database_election === 'View All Departments') {
        databaseViewAll();
        showTables();
    } else if (answer.database_election === 'View All Roles') {
        roleViewAll();
        showTables();
    } else if (answer.database_election === 'View All Employees') {
        employeeViewAll();
        showTables();
    } else { console.log('Bye'); }
    });
  };
    

showTables();