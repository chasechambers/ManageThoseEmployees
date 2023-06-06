INSERT INTO department (department_name)
VALUES ("Accounting"),
       ("Programming"),
       ('Management');

INSERT INTO role (title, salary, department_id)
VALUES ('Lead Accountant', 100000.00, 1),
       ('Lead Programmer', 200000.00, 2),
       ('Manager', 250000.00, 3);

       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Smith', 1, 3),
        ('John', 'Jacob', 2, 3),
        ('John', 'Jingleheimer', 3, 0);