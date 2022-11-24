-- following removes tables from the db, cascade ensures the table is dropped even if its referenced by a foreign key
DROP TABLE IF EXISTS Users cascade;
DROP TABLE IF EXISTS Activities cascade;
DROP TABLE IF EXISTS Resources cascade;

CREATE TABLE "public".Users (
  user_id serial PRIMARY KEY,
  email varchar(50) UNIQUE NOT NULL,
  name varchar(50) NULL,
  password varchar NOT NULL
);

-- SELECT * FROM  Users;  -- GOOD

CREATE TABLE "public".Activities (
  pk_activity_id SERIAL PRIMARY KEY,
  activity varchar NOT NULL,
  total_hours INTEGER NULL,
  -- example json obj for logged hours:
  -- const algos = {
  --   loggedHours: 3,
  --   date: new Date
  -- }
  logged_hours json NULL,
  goal INTEGER NULL
);

-- SELECT * FROM  Activities; -- GOOD

CREATE TABLE "public".Resources (
  pk_resources_id serial PRIMARY KEY,
  resource_name varchar NOT NULL,
  url varchar NULL,
  date_added date NULL,
  fk_activity_id serial NOT NULL,
  CONSTRAINT fk_activity_id 
FOREIGN KEY (fk_activity_id) REFERENCES Activities(pk_activity_id) ON DELETE CASCADE 
);

-- SELECT * FROM Resources; -- GOOD