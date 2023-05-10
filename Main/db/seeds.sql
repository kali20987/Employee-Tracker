INSERT INTO view_departments (id, names)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", "100000", 1),
       (2, "Lead Engineer", "150000", 2),
       (3, "Account Manager", "160000", 3),
       (4, "Lawyer", "190000", 4);

INSERT INTO employees (id, first_name, last_name, role_id)
VALUES (1, "Jane", "Doe", 1),
       (2, "Ashley", "Rodriguez", 2),
       (3, "Malia", "Brown", 3),
       (4, "Sarah", "Lourd", 4);