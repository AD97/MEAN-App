# MEAN-App

A basic M(ongoDb)E(xpress)A(ngular)N(ode) app with some CRUD operations.

## Basic Info

- M(ongoDb)E(xpress)A(ngular)N(ode) stack has been used to build this demo app.
- Foundation (CSS Framework) has been used for responsive design.
- This project is segregated into two folders client (front-end) and server side(back-end). 
- The two pages have been componentized into introduction and personal-information. 
- The APIs are written in the app.js file.
- MongoDb is connected using the mongoose driver for express.
- Angular hits these endpoints and sends the data by a POST request. 
- This request then stores the data into the database called DB and a collection called users in 
- MongoDb.

## Steps to run the app

1. First run "npm install" in both client and server directories
2. Then start the server by going to the server directory and run "node app"
3. Then go to the client directory and run "npm start"
4. Fill in the data and submit
5. Open a mongodb client and check if the data is present in the DB


