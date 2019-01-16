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
  week_id INTEGER REFERENCES weeks(id),
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


insert into tasks (name, week_id, repo_link) values ('Tin', 1, 'http://domain');
insert into tasks (name, week_id, repo_link) values ('Toughjoyfax', 1, 'http://irs.gov/ligula/suspend');
insert into tasks (name, week_id, repo_link) values ('Hatity', 1, 'http://youtube.com/eros/susp');
insert into tasks (name, week_id, repo_link) values ('Konklux', 1, 'http://vi');
insert into tasks (name, week_id, repo_link) values ('Matsoft', 1, 'https://digg.com/suspendisse/potenti.jsp?nascetur=vulputat');
insert into tasks (name, week_id, repo_link) values ('Span', 1, 'https://hatrbaddredfe.com');
insert into tasks (name, week_id, repo_link) values ('Tin', 1, 'http://cam.ac.uk/quam/nec/dui/luctus.png?erat=interdum&volutpat=venena');
insert into tasks (name, week_id, repo_link) values ('Cardify', 1, 'http://amazonaws.com/quis/augue/luctus.png?erat=nunc&nulla');


INSERT INTO logs (completion, confidence, notes) values ('TRUE', '1', 'test database notes');


COMMIT;
