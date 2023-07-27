const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'vad_db'
  },
  console.log(`Connected to the vad_db database.`)
);

const testsql = 'create database test_db';


const dropsql = 'DROP DATABASE IF EXISTS vad_db';
const createDbsql = 'CREATE DATABASE vad_db';
const usesql = 'USE vad_db'
const createTablesql = 'CREATE TABLE view_departments (\
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
  names VARCHAR(100) NOT NULL\
)';

const TableRoles = 'CREATE TABLE roles (\
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
  title VARCHAR(30) NOT NULL,\
  salary DECIMAL NOT NULL,\
  department_id INT\
)';
const TableEmployees = 'CREATE TABLE employees (\
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
  first_name VARCHAR(30) NOT NULL,\
  last_name VARCHAR(30) NOT NULL,\
  role_id INT\
)';
const insertDepartments = 'INSERT INTO view_departments (id, names)\
VALUES (1, "Sales"),\
       (2, "Engineering"),\
       (3, "Finance"),\
       (4, "Legal")';

const insertRoles = 'INSERT INTO roles (id, title, salary, department_id)\
VALUES (1, "Sales Lead", "100000", 1),\
       (2, "Lead Engineer", "150000", 2),\
       (3, "Account Manager", "160000", 3),\
       (4, "Lawyer", "190000", 4)';

const insertEmployees = 'INSERT INTO employees (id, first_name, last_name, role_id)\
VALUES (1, "Jane", "Doe", 1),\
       (2, "Ashley", "Rodriguez", 2),\
       (3, "Malia", "Brown", 3),\
       (4, "Sarah", "Lourd", 4)';

function queryDb(sql, params) {
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err.message);
      //   res.status(400).json({ error: err.message });
      //   return;
    }
    else {
      console.log(result);
      return result;
      //console.log('Success');
      //   message: 'success',
      //   data: body
    };
  });
}

function handleUserInput(choice) {
  switch (choice) {
    case 'View all Employees':
      console.log('in employees:');
      console.log(queryDb('select * from employees'));
      break;
    case 'View All Roles':
      console.log('in roles:');
      console.log(queryDb('select * from roles'));
      break;
    case 'View All Departments':
      console.log('in view departments:');
      console.log(queryDb('select * from view_departments'));
      break;
    default:
      console.log('ERROR invalid choice: '+choice);
      break;
  }
};

queryDb(dropsql, '');
queryDb(createDbsql, '');
queryDb(usesql, '');
queryDb(createTablesql);
queryDb(TableRoles);
queryDb(insertRoles);
queryDb(TableEmployees);
queryDb(insertDepartments);
queryDb(insertEmployees);


inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'firstUserPrompt',
      choices: [
        'View all Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department'],
    },
  ])
  .then((answers) => {
    handleUserInput(answers.firstUserPrompt);
  })
  ;


