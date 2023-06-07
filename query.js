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



}


class Shape {
    #color = 'black';
    constructor () {}
    getColor = () => {
       return this.#color;
    }
    setColor = (newColor) => {
       this.#color = newColor;
    } 
    render = () => {}
 }
 
 module.exports = Employee;
 