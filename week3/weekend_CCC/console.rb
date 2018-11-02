require_relative('models/customer')
require_relative('models/film')
require_relative('models/ticket')
require('pry-byebug')

Ticket.delete_all()
Film.delete_all()
Customer.delete_all()

film1 = Film.new({
  'title' => 'Die Hard',
  'price' => 10
})

film1.save()

film2 = Film.new({
  'title' => 'Outlaw',
  'price' => 6
})

film2.save()

film3 = Film.new({
  'title' => 'Star Wars VI',
  'price' => 9
})

film3.save()

customer1 = Customer.new({
  'name' => 'David Fulton',
  'funds' => 20
})

customer1.save()

customer2 = Customer.new({
  'name' => 'Simon Harrison',
  'funds' => 15
})

customer2.save()

customer3= Customer.new({
  'name' => 'Jeremy Bentham',
  'funds' => 9
})

customer3.save()

customer4 = Customer.new({
  'name' => 'John Doe',
  'funds' => 8
})

customer4.save()


ticket1 = Ticket.new({'film_id' => film1.id, 'customer_id' => customer1.id})
ticket2 = Ticket.new({'film_id' => film2.id, 'customer_id' => customer2.id})
ticket3 = Ticket.new({'film_id' => film3.id, 'customer_id' => customer3.id})
ticket4 = Ticket.new({'film_id' => film2.id, 'customer_id' => customer2.id})
ticket5 = Ticket.new({'film_id' => film1.id, 'customer_id' => customer1.id})
ticket6 = Ticket.new({'film_id' => film3.id, 'customer_id' => customer2.id})
ticket7 = Ticket.new({'film_id' => film2.id, 'customer_id' => customer4.id})
ticket1.save()
ticket2.save()
ticket3.save()
ticket4.save()
ticket5.save()
ticket6.save()
ticket7.save()

binding.pry
nil
