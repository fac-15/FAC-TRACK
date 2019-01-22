[![codecov](https://codecov.io/gh/fac-15/FAC-TRACK/branch/staging/graph/badge.svg)](https://codecov.io/gh/fac-15/FAC-TRACK)
[![Build Status](https://travis-ci.org/fac-15/FAC-TRACK.svg?branch=staging)](https://travis-ci.org/fac-15/FAC-TRACK)

Daily log - [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1mT5qh-N_ikzUz1FzJpAItd6elA6nm9ASVz7hDJK2Zmc/edit?usp=sharing)

Travis link - [https://travis-ci.com/fac-15/FAC-TRACK](https://travis-ci.com/fac-15/FAC-TRACK)

Codecov link - [https://codecov.io/gh/fac-15/FAC-TRACK](https://codecov.io/gh/fac-15/FAC-TRACK)

Heroku link - [https://fac-track.herokuapp.com/](https://fac-track.herokuapp.com/)

All Weeks and Tasks in FAC Curriculum - [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1MwHAFfLx2M5QbLrmUAFfXMMXEtk70T4te4qtPe0aabo/edit#gid=0)

---

# FAC-TRACK
Application that allows FAC students past and present to track their learning.

## Secondary Research
[HACK MD](https://hackmd.io/8j2s6VgTR7ideCsk9rD7ng?both)


## Technology Stack 

Express + Handlebars + PostgreSQL

Both Express and Handlebars are great technologies, and will get you a long way. Further to that, rendering on the server can give very fast initial load time, which can result in better UX than a purely client-side rendered single-page app.
This will allow you both to consolidate what you have learned in the first 8 weeks and focus on your product.
On a similar note, if you want to learn one or more technologies like d3, Leaflet, PWAs, web-sockets, Tachyons or SASS, you may want choose backend technologies you are familiar with, so you enough time to investigate unfamiliar technologies.

+ sass and maybe more

## Database Design 

![fac track db schema](https://user-images.githubusercontent.com/39189687/51178718-65f4be00-18bb-11e9-9b51-058bb82786bc.jpeg)

![screen shot 2019-01-15 at 17 42 49](https://user-images.githubusercontent.com/25176118/51198806-2c3cab00-18ed-11e9-8e67-a8eb07bed716.png)

![screen shot 2019-01-15 at 18 39 28](https://user-images.githubusercontent.com/25176118/51201793-f26fa280-18f4-11e9-95dd-93ac5e8885c5.png)


#### Creating a local database for LOCAL_URL (factrack) And TEST_DB_URL (factracktest )
- Connect to postgres, by typing `psql` or `pgcli` in the terminal.
- Create the database by typing **CREATE DATABASE** `<database_name>`;.
- Create a superuser with a password by typing **CREATE USER** `<user_name>` **WITH SUPERUSER PASSWORD** '`<password>`'; (the password needs to be in quotes, otherwise you get an error).
- Change ownership of the database to the new user by typing **ALTER DATABASE** `<database_name>` **OWNER TO** `<user_name>`;


### Database build
- `node src/model/db/db_build.js`

### Run Sass locally to compile css
- `sass --watch scss/style.scss:css/style.css`


### Todo

Do some proper tests 
Finish pull data into dash that will display users overall confidence and completed
Use handlebars to display that data
Post data to logs table from logs view 
Create database data
Work on UI to make it look like the prototype
Route that work (made slug or regex)

Create real users
