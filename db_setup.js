
// const schemaSql = 'DROP DATABASE IF EXISTS vad_db;\
// CREATE DATABASE vad_db;\
// USE vad_db;\
// CREATE TABLE view_departments (\
//   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
//   names VARCHAR(100) NOT NULL\
// );';

const dropsql = 'DROP DATABASE IF EXISTS vad_db';
const createDbsql = 'CREATE DATABASE vad_db';
const usesql = 'USE vad_db'
const createTablesql = 'CREATE TABLE view_departments (\
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
  names VARCHAR(100) NOT NULL\
)'
const insertDepartments = 'INSERT INTO view_departments (id, names)\
VALUES (1, "Sales"),\
       (2, "Engineering"),\
       (3, "Finance"),\
       (4, "Legal")';