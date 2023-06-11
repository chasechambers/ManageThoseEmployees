class Employee {
    #id;
    #first_name;
    #last_name;
    #role_id;
    #manager_id;
    #manager_first_name;
    #manager_last_name;
    #salary;
    #department;
    #title;
    constructor () {}

    getEmployeeIdQuery = (firstName, lastName) => {
        return `SELECT id FROM employee WHERE employee.first_name = \'${firstName}\' AND employee.last_name= \'${lastName}\';`;
    };

    getEmployeeInfoQuery = () => {
        return `SELECT 
        e.id, 
        e.first_name,
        e.last_name,
        role.title,
        department.department_name,
        role.salary,
        m.first_name AS manager_first_name,
        m.last_name AS manager_last_name
        FROM employee e
        LEFT JOIN employee m ON e.manager_id = m.id
        JOIN role ON e.role_id = role.id
        JOIN department ON role.department_id = department.id;`
    };

    updateEmployeeInfo = ({first_name, last_name}) => {
        this.#first_name = first_name;
        this.#last_name = last_name;
        console.log(this.#first_name, this.#last_name);
        //ETC
    };

};

 module.exports = Employee;
 