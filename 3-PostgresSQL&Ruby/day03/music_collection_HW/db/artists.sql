DROP TABLE IF EXISTS Album;
-- #neccesary to avoid foreign key violation
DROP TABLE if exists artist;

create table artist(
  id serial4 primary key,
  name varchar(255)
);

create table album(
  id serial4 primary key,
  title varchar(255),
  genre varchar(255),
artist_id int4 references artist(id) on delete cascade

);

-- #artist_id in albums is fk in artist
