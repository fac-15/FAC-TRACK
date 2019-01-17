BEGIN;

DROP TABLE IF EXISTS users, weeks, tasks, logs CASCADE;

-- create tables
CREATE TABLE weeks (
  id SERIAL PRIMARY KEY,
  week_name VARCHAR(100) NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(155) NOT NULL,
  week_id INTEGER REFERENCES weeks(id),
  repo_link VARCHAR(200) NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  logged_in BOOLEAN NOT NULL
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
INSERT INTO weeks (week_name) values ('Toolkit');
INSERT INTO weeks (week_name) values ('Testing');
INSERT INTO weeks (week_name) values ('API');
INSERT INTO weeks (week_name) values ('Node Core');




-- Tasks table
-- week 1
insert into tasks (name, week_id, repo_link) values ('Accessibility Workshop', 1, 'https://github.com/foundersandcoders/web-accessibility/blob/master/putting-yourself-in-someone-elses-shoes.md');
insert into tasks (name, week_id, repo_link) values ('Github Scavenger Hunt', 1, 'https://github.com/foundersandcoders/master-reference/blob/master/coursebook/general/github-scavenger-hunt.md');
insert into tasks (name, week_id, repo_link) values ('Accessibility Challenge', 1, 'https://github.com/foundersandcoders/accessibility-challenge');
-- week 2
insert into tasks (name, week_id, repo_link) values ('Test Driven Development workshop: Fizzbuzz', 2, 'https://github.com/foundersandcoders/fizzbuzz');
insert into tasks (name, week_id, repo_link) values ('DOM manipulation challenge', 2, 'https://github.com/foundersandcoders/DOM-manipulation-Challenge');
insert into tasks (name, week_id, repo_link) values ('Pure functions workshop', 2, 'https://github.com/foundersandcoders/ws-pure-functions-easy-testing');
-- week 3
insert into tasks (name, week_id, repo_link) values ('Introducing APIs', 3, 'https://github.com/foundersandcoders/api-workshop');
insert into tasks (name, week_id, repo_link) values ('XHR workshop', 3, 'https://github.com/foundersandcoders/xhr-workshop');
-- week 4
insert into tasks (name, week_id, repo_link) values ('Node Intro Workshop', 3, 'https://github.com/foundersandcoders/Node-Intro-Workshop');




-- Users table
insert into users (username, email, password, logged_in) values ('sheila', 'bgeri0@illinois.edu', '2kb3PLnlE3', true);
insert into users (username, email, password, logged_in) values ('dave', 'kgeddes1@mysql.com', 'C7Zbx09', false);
insert into users (username, email, password, logged_in) values ('francis', 'drickeard2@issuu.com', 'NlOb9zFWz', false);
insert into users (username, email, password, logged_in) values ('charlotte', 'kpoundesford3@i2i.jp', '2EXhiV', true);
insert into users (username, email, password, logged_in) values ('audrey', 'tsebborn4@mapquest.com', 'm4amCd3zewy4', false);
insert into users (username, email, password, logged_in) values ('craig', 'bsehorsch5@woothemes.com', 'qPstcGmT', false);
insert into users (username, email, password, logged_in) values ('erica', 'dfilipputti6@xrea.com', 'FMoeaA7T', false);
insert into users (username, email, password, logged_in) values ('bill', 'vbruckman7@dyndns.org', 'KarkdKo6p', false);



-- Logs table
INSERT INTO logs (completion, confidence, notes) values ('TRUE', '1', 'test database notes');


COMMIT;
