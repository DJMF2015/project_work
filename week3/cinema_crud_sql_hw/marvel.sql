DROP TABLE movies;
DROP TABLE people;

CREATE TABLE movies (
	id SERIAL8 PRIMARY KEY,
	title VARCHAR(255),
	year INT2,
	show_time VARCHAR(255)
);

CREATE TABLE people (
	id SERIAL8 PRIMARY KEY,
	name VARCHAR(255)
);


INSERT INTO people (name) VALUES ('Alexander Clements');
INSERT INTO people (name) VALUES ('Graeme Congreve');
INSERT INTO people (name) VALUES ('Christina Davies');
INSERT INTO people (name) VALUES ('Rebekah Dixon');
INSERT INTO people (name) VALUES ('Malcolm Finlayson');
INSERT INTO people (name) VALUES ('Catriona Ford');
INSERT INTO people (name) VALUES ('Ernest Fraiman');
INSERT INTO people (name) VALUES ('David Fulton');
INSERT INTO people (name) VALUES ('Ray Greenan');
INSERT INTO people (name) VALUES ('Ross Hancock');
INSERT INTO people (name) VALUES ('Chris Jennings');
INSERT INTO people (name) VALUES ('Steven Kay');
INSERT INTO people (name) VALUES ('Laura Manson');
INSERT INTO people (name) VALUES ('Nick Fury');
INSERT INTO people (name) VALUES ('Borna Maticic');
INSERT INTO people (name) VALUES ('Kevin McEwan');
INSERT INTO people (name) VALUES ('Thomas McPhee');
INSERT INTO people (name) VALUES ('Christopher Milligan');
INSERT INTO people (name) VALUES ('James Mundie');
INSERT INTO people (name) VALUES ('Jake Thwaites');
INSERT INTO people (name) VALUES ('Robin Willson');
INSERT INTO people (name) VALUES ('Paul Wishart');


INSERT INTO movies (title, year, show_time) VALUES ('Iron Man', 2008, '23:20');
INSERT INTO movies (title, year, show_time) VALUES ('The Incredible Hulk', 2008, '20:35');
INSERT INTO movies (title, year, show_time) VALUES ('Iron Man 2', 2010, '15:15');
INSERT INTO movies (title, year, show_time) VALUES ('Thor', 2011, '16:45');
INSERT INTO movies (title, year, show_time) VALUES ('Captain America: The First Avenger', 2011, '21:50');
INSERT INTO movies (title, year, show_time) VALUES ('Avengers Assemble', 2012, '13:50');
INSERT INTO movies (title, year, show_time) VALUES ('Iron Man 3', 2013, '14:55');
INSERT INTO movies (title, year, show_time) VALUES ('Thor: The Dark World', 2013, '21:25');
INSERT INTO movies (title, year, show_time) VALUES ('Batman Begins', 2005, '13:00');
INSERT INTO movies (title, year, show_time) VALUES ('Captain America: The Winter Soldier', 2014, '12:50');
INSERT INTO movies (title, year, show_time) VALUES ('Guardians of the Galaxy', 2014, '12:30');
INSERT INTO movies (title, year, show_time) VALUES ('Avengers: Age of Ultron', 2015, '23:05');
INSERT INTO movies (title, year, show_time) VALUES ('Ant-Man', 2015, '19:10');
INSERT INTO movies (title, year, show_time) VALUES ('Captain America: Civil War', 2016, '13:50');
INSERT INTO movies (title, year, show_time) VALUES ('Doctor Strange', 2016, '18:35');
INSERT INTO movies (title, year, show_time) VALUES ('Guardians of the Galaxy 2', 2017, '20:15');
INSERT INTO movies (title, year, show_time) VALUES ('Spider-Man: Homecoming', 2017, '17:05');
INSERT INTO movies (title, year, show_time) VALUES ('Thor: Ragnarok', 2017, '18:20');
INSERT INTO movies (title, year, show_time) VALUES ('Black Panther', 2018, '20:10');
