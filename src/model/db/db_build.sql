BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(155) NOT NULL,
  password VARCHAR(155) NOT NULL
);

INSERT INTO users (email, password) values ('hannahstewart23@yahoo.co.uk', 'dog');


COMMIT;
