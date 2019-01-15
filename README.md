Daily log - https://docs.google.com/spreadsheets/d/1mT5qh-N_ikzUz1FzJpAItd6elA6nm9ASVz7hDJK2Zmc/edit?usp=sharing

Travis link - https://travis-ci.com/fac-15/FAC-TRACK

Heroku link - https://fac-track.herokuapp.com/


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



## Setup

### JSON

{
  "name": "fac-track",
  "version": "1.0.0",
  "description": "Application to allow for FAC students to track their progress throught the learning weeks",
  "main": "index.js",
  "scripts": {
    "test": "jest --coverage",
    "dev": "nodemon ./src/index.js",
    "start": "node ./src/index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/fac-15/FAC-TRACK.git"
  },
  "author": "Jason, Hannah, Charmaine, Martin",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/fac-15/FAC-TRACK/issues"
  },
  "homepage": "https://github.com/fac-15/FAC-TRACK#readme",
  "dependencies": {
    "env2": "^2.2.2",
    "bcryptjs": "^2.4.3",
    "cookie": "^0.3.1",
    "jsonwebtoken": "^8.4.0",
    "body-parser": "^1.18.3",
    "serve-favicon": "^2.5.0",
    "express": "^4.15.3",
    "express-handlebars": "^3.0.0",
    "pg": "^7.7.1"
  },
  "devDependencies": {
    "codecov": "^3.1.0",
    "nodemon": "^1.18.8",
    "supertest": "^3.3.0",
    "eslint": "^5.12.0",
    "eslint-config-node": "^4.0.0",
    "eslint-config-prettier": "^3.4.0",
    "jest": "^23.6.0"
  }
}

