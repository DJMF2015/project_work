require_relative("../db/sql_runner")

class Customer

  attr_reader :id
  attr_accessor :name, :funds


  def initialize(options)
    @id = options['id'].to_i() if options['id']
    @name = options['name']
    @funds = options['funds'] #like budget
  end

  #Create
  def save()
    sql = "INSERT INTO customers (name, funds) VALUES ($1, $2) RETURNING id"
    values = [@name, @funds]
    customer = SqlRunner.run(sql, values).first
    @id = customer['id'].to_i()
  end

  #UPDATE
  def update()
    sql = "UPDATE customers SET name = $1, funds = $2 WHERE id = $3"
    values = [@name, @funds, @id]
    SqlRunner.run(sql, values)
  end
  # DELETE
  def delete()
    sql = "DELETE * FROM customers where id = $1"
    values = [@id]
    SqlRunner.run(sql, values)
  end

  #READ/FIND
  def self.all()
    sql = "sELECT * FROM customers"
    customer_data = SqlRunner.run(sql)
    return Customer.map_items(customer_data)
  end

  # which films a customer has booked to see ONE film only
  def film()
    sql = " SELECT COUNT(title) AS FILM_TITLE,
    cust.name AS CUSTOMER FROM customers cust INNER JOIN films ON cust.id = films.id where cust.id = $1 GROUP BY title, cust.id;";
    values = [@id]
    film_hash = SqlRunner.run(sql, values)
    return film_hash.map{|film| Customer.new(film)}
  end

  #READ/FIND
  def self.find(id) # find a particular customer by id
    sql = "SELECT * FROM customers INNER JOIN films ON c.id = films.id WHERE id = $1"
    values = [id]
    result = SqlRunner.run(sql, values)
    customer = self.new(result.first)
    return customer
  end


  def customer()
    sql = "SELECT * FROM customers WHERE customers.id = $1"
    values =[@id]
    result = SqlRunner.run(sql, values)
    return result.map{|cust| Customer.new(cust)}
  end

  def films()
    sql = "SELECT films.*
    FROM films
    INNER JOIN tickets
    ON tickets.film_id = films.id
    WHERE tickets.customer_id = $1"
    values = [@id]
    film_data = SqlRunner.run(sql, values)
    return Film.map_items(film_data)
  end

  #no of tickets bought by customer
  def count_tickets_sold()
    return films().count() #count method retrning no of films from sql query above
  end

  #decrease cost of customers' funds by ticket price
  def sell_ticket(ticket)
    p @funds -= ticket.film.price #subtract price of ticket by calling film query
    update() #necessary to update db wih changes
    return ticket
  end
  
  #DELETE
  def self.delete_all()
    sql = "DELETE FROM customers"
    SqlRunner.run(sql)
  end

  def self.map_items(hash_data)
    return hash_data.map{ |cust| Customer.new(cust)}
  end

end
