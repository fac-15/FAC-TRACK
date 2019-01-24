[![codecov](https://codecov.io/gh/fac-15/FAC-TRACK/branch/staging/graph/badge.svg)](https://codecov.io/gh/fac-15/FAC-TRACK)
[![Build Status](https://travis-ci.org/fac-15/FAC-TRACK.svg?branch=staging)](https://travis-ci.org/fac-15/FAC-TRACK)

# FAC TRACK

#### Jason, Charmaine, Martin, Hannah

### About 📝
Founders and Coders is a 16 week coding BootCamp. Every week (for eight the first eight weeks) students are asked to complete numberous workshops/challenges around a specific web-development subject.
These workshop/challenges are created to stretch and challenge students knowledge which means they are often started but not completed. 

The purpose of our app is to monitor a students progress and confidence around every workshop/challenge. The hope is that this information will support a students learning. It helps to identify any gaps in knowledge and enables a student to easily revisit workshops/challenges they may want to revisit or complete at a later date.

[View or app on Heroku >](https://fac-track.herokuapp.com/)
> Please note, as there is no authetication implemented as of yet, so any logs you make here will be visible for everyone

---

### User Journey 🚦

- Goal - to support learning by showing progress and confidence data
- Stakeholder - FAC student
- Journey - I can observe my progress in relation to the fac curriculum and fill in the gaps in my knowledge
- Tweet - FAC TRACK your workshops to max your learning experience.

---

### Our Tech Stack 📚

| **Category**           | **Technology**                                                      |
| ---------------------- | ------------------------------------------------------------------- |
| Languages              | JavaScript, node, HTML, SCSS, SQL                                   |
| Frameworks & Libraries | Express, handlebars,bodyparser, env2, pg, serve-favicon             |
| Databases              | PostgreSQL                                                          |
| Testing                | Jest                                                                |
| Dev Tools / Other      | Nodemon, Travis CI, Heroku, Codecov, Github                         |
| Quality Assurance      | es-lint, prettier                                                   |

What env variables you need and what they should be called and where they should be stored
The scripts you need to run to do things (eg: git clone, npm install npm start npm run dev npm test npm run db_build)

---

### Setup Instructions 🔑

> How to get our project up and running locally...

#### Creating a local database for LOCAL_URL (called factrack) And a test database for TEST_DB_URL (called factracktest)

- Connect to postgres, by typing `psql` or `pgcli` in the terminal.
- Create the database by typing **CREATE DATABASE** `<database_name>`;.
- Create a superuser with a password by typing **CREATE USER** `<user_name>` **WITH SUPERUSER PASSWORD** '`<password>`'; (the password needs to be in quotes, otherwise you get an error).
- Change ownership of the database to the new user by typing **ALTER DATABASE** `<database_name>` **OWNER TO** `<user_name>`;


### Commands you will need to use:

**Install node modules / dependencies** (in project **root**):
- `npm install`

**To build the database** (in project **root**):
- `node src/model/db/db_build.js`

**To pre-compile css** (in **public** folder):
- `sass --watch scss/style.scss:css/style.css`

**Run the project** (in project **root**):
- `npm run dev`
- [then view in your browser on port 5002](http://localhost:5002/)

**Run jest the testing suite** :trollface:
- `npm run test`


### Should you want to deploy your own version on Heroku...
> A loose account of what we did, should you want to have a personal copy of our app

1. Create a local working copy (see above)
2. Push your copy to Github
3. Create a Heroku account and a new app in Heroku (other services may work too)
4. Tell Heroku to watch, and automatically update from your Github repository
3. Add the Postgres addon, and create a database on Heroku
4. Download and install Heroku CLI, and log in to it with your details
5. Run the following commands to get your Heroku to 1) get your Heroku database name, and 2) export a copy of your local database to Heroku
   1. `heroku addons`
   2. `heroku pg:push <local database name> <heroku database> --app <your app name on heroku>`


---

### Database Schema and Structure 💥

> A large part of the complexity of our project came from the structure of our database.
> Separating out the Weeks, Tasks, Users, and Logs into separate tables helped to minimise entries in our database, but required complex queries
> Queries typically involved mulitple **INNER JOIN** statements in sql, which we may or may not have been able to write more efficiently, with more experience / research.

#### Our Schema
![fac track db schema not up to date 24/01](https://user-images.githubusercontent.com/39189687/51178718-65f4be00-18bb-11e9-9b51-058bb82786bc.jpeg)


---

### Application Architecture 🏠
> How our files enable the flow of data through our app

Our **router/index.js** file is our router and main controller. This queries the database via a **model/db_queries/index.js** file, which exports our database queries for use in our app.

Database queries reside in the **model/db_queries** folder. The database build script and database schema (or sql build file) reside in the sibling folder, **model/db** folder.

Eslint & Prettier are used to _help_ standardise our code formatting.

Our app is rendered server side with **handlebars.js**. A main layout (**main.hbs**) loads other view templates for the dashboard, week, and task views. Data is passed from **router/index.js** to the handlebars template files (in the top level of the **views** folder), and modified for front-end output with functions in the **views/helpers** folder. These perform functions such as converting _true/false_ boolean values into _checked_ attributes, for example.

On the front-end, the doughnut charts are styled with a combination of css (pre-compiled from scss), and javascript (in **public/js/dashboard.js**). The script detects a css class for the percentage to display on each svg dashboard icon.

---

### Links of other things to do with the project 🔗


Daily log - [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1mT5qh-N_ikzUz1FzJpAItd6elA6nm9ASVz7hDJK2Zmc/edit?usp=sharing)

Travis link - [https://travis-ci.com/fac-15/FAC-TRACK](https://travis-ci.com/fac-15/FAC-TRACK)

Codecov link - [https://codecov.io/gh/fac-15/FAC-TRACK](https://codecov.io/gh/fac-15/FAC-TRACK)

Heroku link - [https://factrack.herokuapp.com/](https://fac-track.herokuapp.com/)

All Weeks and Tasks in FAC Curriculum - [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1MwHAFfLx2M5QbLrmUAFfXMMXEtk70T4te4qtPe0aabo/edit#gid=0)


[HACK MD with more on Heroku](https://hackmd.io/8j2s6VgTR7ideCsk9rD7ng?both)