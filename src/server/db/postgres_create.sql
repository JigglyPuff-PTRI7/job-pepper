-- following removes tables from the db, cascade ensures the table is dropped even if its referenced by a foreign key
DROP TABLE IF EXISTS Users cascade;
DROP TABLE IF EXISTS Activities cascade;
DROP TABLE IF EXISTS Resources cascade;
DROP TABLE IF EXISTS User_activities cascade;

CREATE TABLE "public".Users (
  user_id serial PRIMARY KEY,
  email varchar(50) UNIQUE NOT NULL,
  user_name varchar(50) NULL,
  password varchar NOT NULL
);

INSERT INTO users (email, user_name, password)
VALUES ('imma@email.com','Imma', '0000');

INSERT INTO users (email, user_name, password)
VALUES ('regina@email.com','Regina', '1111');

INSERT INTO users (email, user_name, password)
VALUES ('dwayne@email.com','Dwayne', '2222');

INSERT INTO users (email, user_name, password)
VALUES ('sabre@email.com','Sabre', '3333');

INSERT INTO users (email, user_name, password)
VALUES ('test@email.com','Test', '1111');

-- SELECT * FROM  Users;  -- GOOD

CREATE TABLE "public".Activities (
  pk_activity_id SERIAL PRIMARY KEY,
  activity_name varchar NOT NULL,
  total_hours INTEGER NULL,
  -- example json obj for logged hours:
  -- const algos = {
  --   loggedHours: 3,
  --   date: new Date
  -- }
  --text data type
  logged_hours jsonb NULL,
  goal INTEGER NULL
);

INSERT INTO Activities (activity_name, total_hours, logged_hours, goal)
VALUES ('Practicing Algos', 50, '{"loggedHours": "2", "date": "01/11/11"}', 20);

INSERT INTO Activities (activity_name, total_hours, logged_hours, goal)
VALUES ('Resume Review', 50, '{"loggedHours": "4", "date": "02/22/22"}', 20);

INSERT INTO Activities (activity_name, total_hours, logged_hours, goal)
VALUES ('Reading Tech News', 12, '{"loggedHours": "1", "date": "03/30/13"}', 20);

SELECT * FROM  Activities; -- GOOD

CREATE TABLE "public".Resources (
  pk_resource_id serial PRIMARY KEY,
  resource_name varchar NOT NULL,
  url varchar NULL,
  date_added date NULL,
  fk_activity_id serial NOT NULL,
  CONSTRAINT fk_activity_id 
FOREIGN KEY (fk_activity_id) REFERENCES Activities(pk_activity_id) ON DELETE CASCADE 
);

INSERT INTO Resources (resource_name, url, date_added, fk_activity_id)
VALUES ('Sliding Pattern - DSA', 'wwww.medium.com', current_timestamp, 1);

INSERT INTO Resources (resource_name, url, date_added, fk_activity_id)
VALUES ('Strong Action Verbs', 'wwww.vocab.com', current_timestamp, 2);

INSERT INTO Resources (resource_name, url, date_added, fk_activity_id)
VALUES ('Shopify Engineering Blog', 'wwww.shopify.com', current_timestamp, 3);

-- SELECT * FROM Resources; -- GOOD
-- maybe need a junction table for the user activies
CREATE TABLE "public".User_activities (
  user_id INT REFERENCES Users(user_id) ON UPDATE CASCADE ON DELETE CASCADE,
  activity_id INT REFERENCES Activities(pk_activity_id) ON UPDATE CASCADE,
  -- pk_user_activity serial NOT NULL
  PRIMARY KEY (user_id, activity_id)
);

INSERT INTO User_activities (user_id, activity_id)
VALUES (1, 3);

select * from user_activities; 


-- SELECT a.pk_activity_id, a.activity_name, a.total_hours, a.logged_hours, a.goal, u.user_name AS user
-- FROM activities a
-- LEFT JOIN user_activities ua
-- ON a.pk_activity_id = ua.activity_id
-- LEFT JOIN users u
-- ON u.user_id = ua.user_id

