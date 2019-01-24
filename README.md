# FAC TRACK

#### Jason, Charmaine, Martin, Hannah

### About
Founders and Coders is a 16 week coding BootCamp. Every week (for eight the first eight weeks) students are asked to complete numberous workshops/challenges around a specific web-development subject.
These workshop/challenges are created to stretch and challenge students knowledge which means they are often started but not completed.
The purpose of our app is to monitor a students progress and confidence around every workshop/challenge. The hope is that this information will support a students learning. It helps to identify any gaps in knowledge and enables a student to easily revisit workshops/challenges they may want to revisit or complete at a later date.

### Secondary Research

[HACK MD](https://hackmd.io/8j2s6VgTR7ideCsk9rD7ng?both)

### User Journey

Goal - to support learning by showing progress and confidence data
Stakeholder - FAC student
Journey - I can observe my progress in relation to the fac curriculum and fill in the gaps in my knowledge
Tweet - FAC TRACK your workshops to max your learning experience.


### Stuff for developers

| **Category**           | **Technology**                                                      |
| ---------------------- | ------------------------------------------------------------------- |
| Languages              | JavaScript, node, HTML, SCSS, SQL                                   |
| Frameworks & Libraries | Express, handlebars,bodyparser, env2, pg, serve-favicon |
| Databases              | PostgreSQL                                                          |
| Testing                | Jest                                                                |
| Dev Tools / Other      | Nodemon, Travis CI, Heroku, Codecov, Github                         |
| Quality Assurance      | es-lint, prettier                                          |
What env variables you need and what they should be called and where they should be stored
The scripts you need to run to do things (eg: git clone, npm install npm start npm run dev npm test npm run db_build)

[![codecov](https://codecov.io/gh/fac-15/FAC-TRACK/branch/staging/graph/badge.svg)](https://codecov.io/gh/fac-15/FAC-TRACK)
[![Build Status](https://travis-ci.org/fac-15/FAC-TRACK.svg?branch=staging)](https://travis-ci.org/fac-15/FAC-TRACK)

Daily log - [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1mT5qh-N_ikzUz1FzJpAItd6elA6nm9ASVz7hDJK2Zmc/edit?usp=sharing)

Travis link - [https://travis-ci.com/fac-15/FAC-TRACK](https://travis-ci.com/fac-15/FAC-TRACK)

Codecov link - [https://codecov.io/gh/fac-15/FAC-TRACK](https://codecov.io/gh/fac-15/FAC-TRACK)

Heroku link - [https://factrack.herokuapp.com/](https://fac-track.herokuapp.com/)

All Weeks and Tasks in FAC Curriculum - [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1MwHAFfLx2M5QbLrmUAFfXMMXEtk70T4te4qtPe0aabo/edit#gid=0)

#### Creating a local database for LOCAL_URL (factrack) And TEST_DB_URL (factracktest )

- Connect to postgres, by typing `psql` or `pgcli` in the terminal.
- Create the database by typing **CREATE DATABASE** `<database_name>`;.
- Create a superuser with a password by typing **CREATE USER** `<user_name>` **WITH SUPERUSER PASSWORD** '`<password>`'; (the password needs to be in quotes, otherwise you get an error).
- Change ownership of the database to the new user by typing **ALTER DATABASE** `<database_name>` **OWNER TO** `<user_name>`;

#### Database build

- `node src/model/db/db_build.js`

#### Run Sass locally to compile css

- `sass --watch scss/style.scss:css/style.css`

#### Run the projects

-    `npm run dev`


#### Run jest the testing suite 

-    `npm run test`


### Joining the project

![fac track db schema not up to date 24/01](https://user-images.githubusercontent.com/39189687/51178718-65f4be00-18bb-11e9-9b51-058bb82786bc.jpeg)

![screen shot 2019-01-15 at 17 42 49](https://user-images.githubusercontent.com/25176118/51198806-2c3cab00-18ed-11e9-8e67-a8eb07bed716.png)

![screen shot 2019-01-15 at 18 39 28](https://user-images.githubusercontent.com/25176118/51201793-f26fa280-18f4-11e9-95dd-93ac5e8885c5.png)

Our router.index file is our router and main controller. this queries the database via a db index.js file and then executes the specific query you are calling. database mathimatical logic is sperated within the router folder, such as Taskcount, Userlogs & weekviews.

Database queries reside in the model folder, this also includes the database build script and the up to date database schemea

Eslint & Prettier is used bolting onto the standard node rules, exlusing console logs equal off

There is one main layout page named main.hbs and the other pages are served via the dashboard,home,tasks and week.hbs. These link into the helpers files. 

The dashboard visuals and comuptation is done within the public js folder, named dashboard.js.


### Explaing the database schemea & some of the queries and posts with the joining on tables
