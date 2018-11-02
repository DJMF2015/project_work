DROP TABLE IF EXISTS tickets;
DROP TABLE IF EXISTS films;
DROP TABLE IF EXISTS customers;

CREATE TABLE films(
  id serial4 primary key,
  title varchar(255),
  price int4
);

CREATE TABLE customers(
  id serial4 primary key,
  name varchar(255),
  funds int4
);

CREATE TABLE tickets(
  id serial4 primary key,
  customer_id int4 REFERENCES customers(id) ON DELETE CASCADE,
  film_id int4 REFERENCES films(id) ON DELETE CASCADE
);
