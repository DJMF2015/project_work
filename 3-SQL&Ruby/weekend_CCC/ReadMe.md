## CodeClan Cinema (CCC (again))

Create a system that handles bookings for our newly built cinema!
It's enough if you can call your methods in pry, don't worry about an interface.

### Your app should have:
  - Customers
    - name
    - funds

  - Films
    - title
    - price

  - Tickets
    - customer_id
    - film_id


             |         | 1..*      |       |  1..*     |     |
             |CUSTOMERS|----------/|TICKETS|\----------|FILMS|
             |         |          \|       |/          |     |

### Your app should be able to:
 - [x]  Create customers, films and tickets  - [x]  CRUD actions (create, read, update, delete) customers, films and tickets.
 - [x] Show which films a customer has booked to see and
 - [x]  Show which customers are coming to see One film.

### Basic extensions:
  - [x]  Buying tickets should decrease the funds of the customer by the price
  - [x]  Check how many tickets were bought by a customer
  - [x]  Check how many customers are going to watch a certain film

### Advanced extensions:
  - [x]  Create a screenings table that lets us know what time films are showing
  - [x] Write a method that finds out what is the most popular time (most tickets sold) for a given film
  - Limit the available tickets for screenings.

  - Add any other extensions you think would be great to have at a cinema!

### PDA Reminder:

Remember to gather evidence for your PDA this week. This should only take 5 minutes:

- Go to your [PDA Checklist](https://github.com/codeclan/pda/tree/master/Student%20Checklist)

- Submit your PDA evidence (screenshots, etc.) to your own PDA repo
