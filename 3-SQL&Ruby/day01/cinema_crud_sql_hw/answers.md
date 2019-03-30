## Questions

1.  Return ALL the data in the 'movies' table.
- select * from movies;

2.  Return ONLY the name column from the 'people' table
- SELECT name from people;

3.  Oops! Someone at CodeClan spelled Rob's name wrong! Change it to reflect the proper spelling ('Robin Willson' should be 'Rob Wilson').
- UPDATE people SET name = 'Rob Wilson' WHERE name = 'Robin Willson';

4.  Return ONLY your name from the 'people' table.
- select name from people where name LIKE 'David Fulton';

5.  The cinema is showing 'Batman Begins', but Batman is DC, not Marvel! Delete the entry from the 'movies' table.
- DELETE from movies where title = 'Batman Begins';

6.  Create a new entry in the 'people' table with the name of one of the instructors.
- INSERT INTO people (name) VALUES ('Pawelo');

7.  Nick Fury has decided to hijack our movie evening, Remove him from the table of people.
- DELETE FROM people where name = 'Nick Fury';

8.  The cinema has just heard that they will be holding an exclusive midnight showing of 'Avengers: Infinity War'!! Create a new entry in the 'movies' table to reflect this.
- INSERT INTO movies (title, year, show_time) values ('Avengers: Infinity War', 2018, '00:00');

9.  The cinema would also like to make the Guardians movies a back to back feature. Find out the show time of "Guardians of the Galaxy" and set the show time of "Guardians of the Galaxy 2" to start two hours later.
- UPDATE MOVIES SET show_time = '22:15' WHERE title = 'Guardians of the Galaxy 2';

## Extension

1.  Research how to delete multiple entries from your table in a single command.

- DELETE * FROM table_name;
- DELETE * FROM table_name where id = 8; (e.g.)
- TRUNCATE TABLE table_name1, table_name2... (need to be careful with as will reset unique and primary keys back to initial default)!
