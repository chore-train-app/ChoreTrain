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
In order for the user to use the application on their own , begin by `git cloning` this [repo](https://github.com/chore-train-app/ChoreTrain). After cloning, type `npm install` into the terminal in order to install the necessary technologies needed to run the application. 

Next, create an `.env` file to access the database. Add and edit the following to your `.env` file:

```
DB_NAME=lendAHand_db
DB_USER=root
DB_PASSWORD=
```

Use the password you use for your MySQL login as the `DB_PASSWORD`.

After creating the .env file, source the database by first running `mysql -u root -p`. Enter your password then input the following command: `source db/schema.sql;`

After adding the database, run the seeds for the database by running `npm run seed` (or `node seeds/index.js` if the command did not work).

Finally, run the server by using `npm start` (or `node server.js` if the command did not work).


## Usage
Once the server is running, the user can access the page by running `http://localhost:3001` on their web browser. 

The first page the user will see is the login page. The user may create a new account by clicking the `Create an Account` button. 

After signing in, the user will be on the dashboard. On the dashboard, the user will be able to view upcoming tasks they have signed up for, a list of tasks that the user needs help with, and a "Create New Task" button. 

To look at a more detailed view of a specific task, the user can click on the View button to open a modal with a detailed view. The detailed view will show the task name, name of the task creator, start and end date, and description. The option to add the task to the user's calendar and a chat box is also visible on the modal. If the user is the creator of the tasks, they will be able to edit or delete the task they created. If the user is viewing a detailed task from the "Task" page, they will be given the option to `Volunteer` for the task (and will also be able to undo their `Volunteer`)

To find available tasks in the user's zip code, the user can go to the `Tasks` link in the navigation bar. The user will be able to see All Available Tasks and their name, due date, and details modal link.

Once the user is done with the application, the user may logout of their profile by clicking the `logout` button at the top right of the page. The page will also log the user out after a delayed period of time. 

## Screenshot of Login Page and Dashboard
![screenshot of login page](/public/images/loginScreenshot.png)

![screenshot of dashboard](/public/images/dashboardScreenshot.png)

## Link to deployed application
* Before installing the application, the user can test Task Train by going to the deployed version on [Heroku](https://task-train.herokuapp.com/).

## Technologies Used
* Foundation CSS Framework
* flatpickr
* Express
* Handlebars
* bcrypt
* dotenv
* Sequelize
