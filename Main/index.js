const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'vad_db'
    },
    console.log(`Connected to the vad_db database.`)
  );

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'firstUserPrompt',
            choices: ['View all Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
        },
    ])
    