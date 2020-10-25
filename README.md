This is a Cigo-tracker test application

Prerequisites: install nodejs https://nodejs.org/en/download

## Get started
Clone the repo https://github.com/hedgehog13/cigo

```shell
App folder includes 2 sub folders client & server
App contains mysql script to create db
```

DB

I put the db on google cloud mysql instance

The IP for DB configured in server/connection.js

If you decide to run locally, please update server/connection.js host and port properties and create db objects using db_script_mySQL.sql script located in root directory

## Local environment installation
open  cmd , go to the project root directory

```shell
cd server
npm install 
npm start
```
```shell
cd client
npm install
npm run build --aot   
```

## heroku link
https://cigo-dev.herokuapp.com/

