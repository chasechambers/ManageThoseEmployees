-- VIEW ALL DEPARTMENTS
const viewAllDepartments = 'SELECT * FROM department;'

-- VIEW ALL ROLES
SELECT role.id, title, salary, department_name FROM role
JOIN department ON role.department_id = department.id;

-- VIEW ALL EMPLOYEES
SELECT 
employee.id, 
first_name,
last_name,
role.title,
department.department_name,
role.salary,
(SELECT A.last_name
FROM employee A
JOIN employee B
WHERE A.id = B.manager_id)
AS manager_name
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id;

-- ADD DEPARTMENT
INSERT INTO department (department_name)
VALUES ("SALES");

-- ADD ROLE - GIVEN A DEPARTMENT NAME AND THEN RETURNS ID
INSERT INTO role (title, salary, department_id)
VALUES ('Lead Accountant', 100000.00, 1);

SELECT id 
FROM department
WHERE department.department_name = VAR NAME

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, 3)

SELECT id 
FROM role
WHERE role.role_name = VAR NAME

SELECT id 
FROM employee
WHERE employee.first_name = VAR FIRST NAME
AND employee.last_name =  VAR LAST NAME


UPDATE employee
SET role_id = VAR NEW ROLE
WHERE employee.id = VAR EMPLOYEE ID


