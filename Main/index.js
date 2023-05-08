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

const schemaSql = `DROP DATABASE IF EXISTS vad_db
CREATE DATABASE vad_db

USE vad_db

CREATE TABLE view_departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  names VARCHAR(100) NOT NULL
)`

queryDb(schemaSql,'');

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'firstUserPrompt',
            choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        },
    ]);


function queryDb(sql, params) {
    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err.message);
        //   res.status(400).json({ error: err.message });
        //   return;
        }
        else {
            console.log('Success');
        //   message: 'success',
        //   data: body
        };
      });
}