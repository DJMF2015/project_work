require_relative('models/customer')
require_relative('models/film')
require_relative('models/ticket')
require('pry-byebug')

Ticket.delete_all()
Film.delete_all()
Customer.delete_all()

film1 = Film.new({
  'title' => 'Die Hard',
  'price' => 10,
  'times' => '17:00'
})

film1.save()

film2 = Film.new({
  'title' => 'Outlaw',
  'price' => 6,
  'times' => '18:00'
})

film2.save()

film3 = Film.new({
  'title' => 'Star Wars VI',
  'price' => 12,
  'times' => '18:00'
})

film3.save()

film4 = Film.new({
  'title' => 'Skyfall',
  'price' =>12,
  'times' => '11:00'
})

film4.save()

film5= Film.new({
  'title' => 'Ted',
  'price' =>7,
  'times' => '21:00'
})

film5.save()

customer1 = Customer.new({
  'name' => 'Leonardo Fibonacci',
  'funds' => 30
})

customer1.save()

customer2 = Customer.new({
  'name' => 'Thomas Hobbes',
  'funds' => 25
})

customer2.save()

customer3= Customer.new({
  'name' => 'Jeremy Bentham',
  'funds' => 9
})

customer3.save()

customer4 = Customer.new({
  'name' => 'Jean-Rousseau',
  'funds' => 8
})

customer4.save()

customer5 = Customer.new({
  'name' => 'John Locke',
  'funds' => 15
})

customer5.save()


ticket1 = Ticket.new({'film_id' => film2.id, 'customer_id' => customer1.id})
ticket2 = Ticket.new({'film_id' => film2.id, 'customer_id' => customer2.id})
ticket3 = Ticket.new({'film_id' => film3.id, 'customer_id' => customer3.id})
ticket4 = Ticket.new({'film_id' => film2.id, 'customer_id' => customer2.id})
ticket5 = Ticket.new({'film_id' => film1.id, 'customer_id' => customer1.id})
ticket6 = Ticket.new({'film_id' => film3.id, 'customer_id' => customer2.id})
ticket7 = Ticket.new({'film_id' => film4.id, 'customer_id' => customer4.id})
ticket8 = Ticket.new({'film_id' => film5.id, 'customer_id' => customer3.id})
ticket1.save()
ticket2.save()
ticket3.save()
ticket4.save()
ticket5.save()
ticket6.save()
ticket7.save()
ticket8.save()
# p film2.no_viewers_per_film()
# p customer2.sell_ticket(ticket1)
# p film1.most_tickets_sold

p film2.most_tickets()

binding.pry



#
# erd = ['
#              |         | 1..*      |       |  1..*     |     |
#              |CUSTOMERS|----------/|TICKETS|\----------|FILMS|
#              |         |          \|       |/          |     |']

nil
