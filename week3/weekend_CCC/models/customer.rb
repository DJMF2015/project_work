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

  def self.all()
    sql = "select * from customers"
    customer_data = SqlRunner.run(sql)
    return Customer.map_items(customer_data)
  end

# which films a customer has booked to see
  def film()
    sql = "SELECT films.*  FROM films
    INNER JOIN tickets
    ON (tickets.film_id = films.id) WHERE tickets.customer_id = $1";
    values [@id]
    film_hash = SqlRunner.run(sql, values)
    return film_hash.map{|film| Customer.new(film)}
  end

  #READ
  def self.find(id) # find a particular customer by id
    sql = "SELECT * FROM customers WHERE id = $1"
    values = [id]
    result = SqlRunner.run(sql, values)
    customer = self.new(result.first)
    return customer
  end

  def self.delete_all()
    sql = "DELETE FROM customers"
    SqlRunner.run(sql)
  end

  def self.map_items(hash_data)
    return hash_data.map{ |cust| Customer.new(cust)}
    #return result
  end

end