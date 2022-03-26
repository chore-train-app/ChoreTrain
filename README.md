# Task Train

## Description
Task Train is a nifty application that makes it easier for users to ask for help. Sometimes, friends and family are busy when you need help. Task Train will enable users to ask for help from neighbors within your zip code. 

Do you need help? Just sign into Task Train and create an online Task for others to view. Need someone to walk your dog? A user within the specified zipcode can apply to help you with your task. 

Do you want to help? Just sign in and search for tasks in your zip code. Available tasks will be easy to view, just click sign up!

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)

## Installation
To install, begin by `git cloning` this [repo](https://github.com/chore-train-app/ChoreTrain). After cloning, type `npm install` into the terminal in order to install the necessary technologies needed to run the application. 

Next, create an `.env` file to access the database. Add and edit the following to your `.env` file:

```
DB_NAME=lendAHand_db
DB_USER=root
DB_PASSWORD=
```

Use the password you use for your MySQL login as the `DB_PASSWORD`.

After creating the .env file, source the database by first running `mysql -u root -p`. Enter your password then input the following command: `source db/schema.sql;`

After adding the database, run the seeds for the database by running `npm run seed`. If the following command doesn't work, you can also use `node seeds/index.js`

Finally, run the server to being the application by using `npm start` (or `node server.js` if the following did not work).


## Usage
Once the server is running, the user can access the page by running `http://localhost:3001` on their web browser. 

The first page the user will see is the login page. The user may create a new account by clicking the `Create an Account` button. 

After signing in, the user will be on the dashboard. On the dashboard, the user will be able to view any tasks they have already signed up for, any tasks that the user created, and a "create a task" button. 

To view a more detailed view of a specific task, the user can click on the task name to open a modal with a detailed view. 

To create a task, the user can click the `Create a Task` button 

To find more tasks to do, the user can click on `Tasks` on the navbar to be led to a page showing available tasks in the zip code area. 

Once the user is done with the application, the user may logout of their profile by clicking the `logout` button at the top right of the page. The page will also log the user out after a delayed period of time. 

![gif of working app]()

## Technologies Used
* New technology - Foundation CSS Framework
* Express
* Handlebars
* bcrypt
* dotenv
* Sequelize
