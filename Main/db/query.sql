SELECT id, names
FROM view_departments
ORDER BY id;

SELECT * FROM roles;

SELECT * FROM employees;

select employees.first_name, employees.last_name, 
roles.title, view_departments.names
from employees 
inner join roles 
ON employees.role_id = roles.id
inner join view_departments 
ON roles.department_id=view_departments.id;
