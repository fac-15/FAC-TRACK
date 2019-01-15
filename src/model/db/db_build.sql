BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(155) NOT NULL,
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
  week_id INTEGER REFERENCES weeks(id)
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

INSERT INTO users (email, password, logged_in) values ('hannahstewart23@yahoo.co.uk', 'dog', 'FALSE');
INSERT INTO weeks (week_name) values ('toolkit');
INSERT INTO tasks (name) values ('workshop 1');
INSERT INTO logs (completion, confidence, notes) values ('TRUE', '1', 'test database notes');


COMMIT;
