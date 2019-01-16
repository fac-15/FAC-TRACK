BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(11155) NOT NULL,
  password VARCHAR(155) NOT NULL,
  logged_in BOOLEAN NOT NULL
);

DROP TABLE IF EXISTS weeks CASCADE;

CREATE TABLE weeks(
  id SERIAL PRIMARY KEY NOT NULL,
  week_name VARCHAR(200) NOT NULL
);

DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(155) NOT NULL,
  week_id INTEGER,
  repo_link VARCHAR(200) NOT NULL
);

DROP TABLE IF EXISTS logs CASCADE;

CREATE TABLE logs(
  id SERIAL PRIMARY KEY NOT NULL,
  completion BOOLEAN NOT NULL,
  confidence INTEGER,
  notes VARCHAR(1000),
  task_id INTEGER REFERENCES tasks(id),
  user_id INTEGER REFERENCES users(id)
);

insert into users (email, password, logged_in) values ('bgeri0@illinois.edu', '2kb3PLnlE3', true);
insert into users (email, password, logged_in) values ('kgeddes1@mysql.com', 'C7Zbx09', false);
insert into users (email, password, logged_in) values ('drickeard2@issuu.com', 'NlOb9zFWz', false);
insert into users (email, password, logged_in) values ('kpoundesford3@i2i.jp', '2EXhiV', true);
insert into users (email, password, logged_in) values ('tsebborn4@mapquest.com', 'm4amCd3zewy4', false);
insert into users (email, password, logged_in) values ('bsehorsch5@woothemes.com', 'qPstcGmT', false);
insert into users (email, password, logged_in) values ('dfilipputti6@xrea.com', 'FMoeaA7T', false);
insert into users (email, password, logged_in) values ('vbruckman7@dyndns.org', 'KarkdKo6p', false);
insert into users (email, password, logged_in) values ('jweatherburn8@prweb.com', 'Dhtv9LTA4C', true);
insert into users (email, password, logged_in) values ('cdrinkall9@japanpost.jp', 'WzIyMaSUl', false);
insert into users (email, password, logged_in) values ('jandryseka@sbwire.com', 'NEbDHN5Y6Mo', true);
insert into users (email, password, logged_in) values ('gclashb@pcworld.com', 'hNyxTIs', true);
insert into users (email, password, logged_in) values ('jsconesc@skyrock.com', 'Bcj70R', true);
insert into users (email, password, logged_in) values ('acoggingsd@go.com', '6eZ6Is', true);
insert into users (email, password, logged_in) values ('aandresene@wsj.com', 'oC0pgMCL6yaR', true);
insert into users (email, password, logged_in) values ('lfrankomf@webs.com', 'yOE408', true);
INSERT INTO weeks (week_name) values ('toolkit');


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


INSERT INTO logs (completion, confidence, notes) values ('TRUE', '1', 'test database notes');


COMMIT;
