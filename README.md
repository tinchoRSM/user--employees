# User Emplyoees 

A basic REST CRUD App

- Create a database
- Login form User email password
- Visulize employees
- Adding employees
- Editing employees
- Deleting employees

## Install

Open the console and install the node packages for client and server.

Server
```
cd server
npm install
```

Client
```
cd server
npm install
```

## Eddit the .env file

Edit **DB_HOST** **DB_USER** and ****DB_PASSWORD** for your MySQL connection
```
PORT = 5000
DB_HOST = localhost
DB_USER = localhost
DB_PASSWORD = localhost
DB_DB = useremployees
```

## Start

Run the command in both the client and the server.
```
npm start
```

# Server functionalities

## Api routes


### User
<hr/>

 - Attempt a login with user email and passowrd
```js
POST 
http://localhost:5000/users/login

body JSON
{
    "email": "tinchoRSM@gmail.com",
    "password": "123456"
}
```

- Get all employees from user with given id.
```js
POST 
http://localhost:5000/users/employees

body JSON
{
    "userId": "1"
}
```
 - Creating **Unique** user with email and password.
```js
POST 
http://localhost:5000/users/create

body JSON
{
    "email": "radostin.minchev@hotmail.com",
    "password": "123456"
}
```
### Employee
<hr/>

 - Create an employee by given data
```js
POST 
http://localhost:5000/users/employees/createEmployee

body JSON
{
    "name": "Stoiko Iivanov",
    "adress": "st Ivan ivanov petrova",
    "phone": "0982349578",
    "department": "Support",
    "position": "Support",
    "salary": "2304",
    "userId": "1"
}
```
- Get an employee by id
```js
POST 
http://localhost:5000/users/employees/getEmployee

body JSON
{
    "employeeId": "1"
}
```
 - Update any field of an employee buy giveen id and field
```js
PUT 
http://localhost:5000/users/employees/editEmployee
{
    "id": 1,
    "data": {
        "name": "Kosta Pravec Pravec"
    }
}
```
 - Deleting an employee with send url params
```js
DELETE 
http://localhost:5000/users/employees/:id

params id as number
```

# Client functionalities

Login With default user

- login
- displaying employees
- editing on click
- creating 
- deleting



