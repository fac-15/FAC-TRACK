BEGIN;

DROP TABLE IF EXISTS users, weeks, tasks, logs CASCADE;

-- create tables
CREATE TABLE weeks (
  id SERIAL PRIMARY KEY,
  week_name VARCHAR(100) NOT NULL,
  url_slug VARCHAR(100) NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(155) NOT NULL,
  week_id INTEGER REFERENCES weeks(id),
  url_slug VARCHAR(100) NOT NULL,
  repo_link VARCHAR(200) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  logged_in BOOLEAN DEFAULT false
);

CREATE TABLE logs (
  id SERIAL PRIMARY KEY NOT NULL,
  completion BOOLEAN NOT NULL,
  confidence INTEGER,
  notes VARCHAR(1000),
  task_id INTEGER REFERENCES tasks(id),
  user_id INTEGER REFERENCES users(id)
);


-- Weeks table
-- error: insert or update on table "tasks" violates foreign key constraint "tasks_week_id_fkey"
INSERT INTO weeks (week_name, url_slug) values ('Toolkit', 'tooklit');
INSERT INTO weeks (week_name, url_slug) values ('Testing', 'testing');
INSERT INTO weeks (week_name, url_slug) values ('API', 'api');
INSERT INTO weeks (week_name, url_slug) values ('Node Core', 'node-core');
INSERT INTO weeks (week_name, url_slug) values ('Node Week 2', 'node-2');
INSERT INTO weeks (week_name, url_slug) values ('PostgreSQL', 'postgresql');
INSERT INTO weeks (week_name, url_slug) values ('Authentication', 'authentication');
INSERT INTO weeks (week_name, url_slug) values ('Express Handlebars', 'express-handlebars');




-- Tasks table
-- week 1
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Accessibility Workshop', 1, 'a11y-workshop', 'https://github.com/foundersandcoders/web-accessibility/blob/master/putting-yourself-in-someone-elses-shoes.md');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Github Scavenger Hunt', 1, 'scavenger-hunt', 'https://github.com/foundersandcoders/master-reference/blob/master/coursebook/general/github-scavenger-hunt.md');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Accessibility Challenge', 1, 'a11y-challenge', 'https://github.com/foundersandcoders/accessibility-challenge');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Git Workshop for Two', 1, 'git-for-two', 'https://github.com/foundersandcoders/git-workflow-workshop-for-two');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('CSS Gallery Challenge', 1, 'css-gallery', 'https://github.com/foundersandcoders/css-gallery-challenge');
-- week 2
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Test Driven Development workshop: Fizzbuzz', 2, 'tdd-fizzbuzz', 'https://github.com/foundersandcoders/fizzbuzz');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('DOM Manipulation Challenge', 2, 'dom-manipulation', 'https://github.com/foundersandcoders/DOM-manipulation-Challenge');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Pure Functions Workshop', 2, 'pure-functions', 'https://github.com/foundersandcoders/ws-pure-functions-easy-testing');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Traffic Light Callback Challenge', 2, 'traffic-light', 'https://github.com/foundersandcoders/morning-challenge-traffic-lights');
-- week 3
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Introducing APIs', 3, 'api-introduction', 'https://github.com/foundersandcoders/api-workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('XHR Workshop', 3, 'xhr-workshop', 'https://github.com/foundersandcoders/xhr-workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Afternoon Workshop: Github API', 3, 'github-api', 'https://github.com/foundersandcoders/ws-github-api');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Flexbox Workshop', 3, 'flexbox-workshop', 'https://github.com/smarthutza/flexbox-workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Software Architecture Workshop', 3, 'software-architecture', 'https://github.com/foundersandcoders/Workshop-Software-Architecture-Design');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Software Design Workshop', 3, 'software-design', 'https://github.com/foundersandcoders/ws-software-design-js');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Waterfall Morning Challenge', 3, 'waterfall-challenge', 'https://github.com/foundersandcoders/mc-waterfall-chaser');
-- week 4
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Node Intro Workshop', 4, 'node-intro', 'https://github.com/foundersandcoders/Node-Intro-Workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Node Girls Workshop', 4, 'node-girls', 'https://github.com/node-girls/node-workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('ES6 Morning Challenge', 4, 'es6-challenge', 'https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-4/morning-challenge-day-2.md');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Modularisation Morning Challenge', 4, 'modularisation-challenge', 'https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-4/morning-challenge-day-3.md');
-- week 5
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('TDD Server Workshop', 5, 'tdd-server', 'https://github.com/foundersandcoders/ws-tdd-node-server');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Error Handling Workshop', 5, 'error-handling', 'https://github.com/foundersandcoders/error-handling-workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Node Shell Workshop', 5, 'node-shell', 'https://github.com/foundersandcoders/Node-Shell-Workshop/');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Build Request Module', 5, 'request-module', 'https://github.com/foundersandcoders/mc-request-module-workshop');
-- week 6
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('SQL Commands Introduction', 6, 'sql-intro', 'https://github.com/foundersandcoders/sql-commands-intro/');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('PostgreSQL Workshop', 6, 'postgresql-workshop', 'https://github.com/foundersandcoders/postgres-workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('PG Workshop', 6, 'pg-workshop', 'https://github.com/foundersandcoders/pg-workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Databases Morning Challenge', 6, 'database-challenge', 'https://github.com/foundersandcoders/db-morning-challenge');
-- week 7
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Password Management Workshop', 7, 'password-workshop', 'https://github.com/foundersandcoders/ws-password-management');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Cookies Workshop', 7, 'cookie-workshop', 'https://github.com/foundersandcoders/ws-cookies');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Client Side Validation', 7, 'client-validation', 'https://github.com/foundersandcoders/mc-client-side-validation');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Promise Me This', 7, 'promises', 'https://github.com/foundersandcoders/mc-promise-me-this');
-- week 8
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Express Workshop', 8, 'express-workshop', 'https://github.com/foundersandcoders/express-workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Express Testing Workshop', 8, 'express-testing', 'https://github.com/foundersandcoders/express-and-testing-workshop');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Animated App Drawer', 8, 'animated-drawer', 'https://github.com/foundersandcoders/morning-challenge-animated-app-drawer');
INSERT INTO tasks (name, week_id, url_slug, repo_link) values ('Express Handlebars', 8, 'express-handlebars', 'https://github.com/foundersandcoders/express-handlebars-workshop');



-- Users table
INSERT INTO users (username, email, password) values ('sheila', 'bgeri0@illinois.edu', '2kb3PLnlE3');
INSERT INTO users (username, email, password) values ('dave', 'kgeddes1@mysql.com', 'C7Zbx09');
INSERT INTO users (username, email, password) values ('francis', 'drickeard2@issuu.com', 'NlOb9zFWz');
INSERT INTO users (username, email, password) values ('charlotte', 'kpoundesford3@i2i.jp', '2EXhiV');
INSERT INTO users (username, email, password) values ('audrey', 'tsebborn4@mapquest.com', 'm4amCd3zewy4');
INSERT INTO users (username, email, password) values ('craig', 'bsehorsch5@woothemes.com', 'qPstcGmT');
INSERT INTO users (username, email, password) values ('erica', 'dfilipputti6@xrea.com', 'FMoeaA7T');
INSERT INTO users (username, email, password) values ('bill', 'vbruckman7@dyndns.org', 'KarkdKo6p');



-- Logs table
-- task_id, user_id

-- sheila id = 1
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('TRUE', '1', 'test database notes', 1, 1);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('TRUE', '1', 'test database notes', 2, 1);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('TRUE', '2', 'test database notes', 3, 1);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('TRUE', '3', 'test database notes', 4, 1);

-- dave id = 2
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('TRUE', '1', 'test database notes', 1, 2);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('TRUE', '1', 'test database notes', 2, 2);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('TRUE', '2', 'test database notes', 3, 2);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('TRUE', '3', 'test database notes', 4, 2);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('FALSE', '1', 'test database notes', 5, 2);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('FALSE', '1', 'test database notes', 6, 2);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('FALSE', '2', 'test database notes', 7, 2);
INSERT INTO logs (completion, confidence, notes, task_id, user_id) values ('FALSE', '3', 'test database notes', 8, 2);


-- expecting for dave:
-- 4 completions in week 1 (tasks 1-5)
-- 0 completions in week 2 (tasks 6-9)
-- 0 completions in week 3 (tasks 10-16)

COMMIT;
