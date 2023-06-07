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
        employee.id, 
        first_name,
        last_name,
        role.title,
        department.department_name,
        role.salary
        FROM employee
        JOIN role ON employee.role_id = role.id
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
 