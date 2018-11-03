require_relative("../db/sql_runner")

class Film

  attr_reader :id
  attr_accessor :title, :price

  #constructor
  def initialize(options)
    @id = options['id'].to_i() if options['id']
    @title = options['title']
    @price = options['price'].to_i
  end

  #create
  def save()
    sql = "INSERT INTO films(title, price) values ($1, $2) RETURNING id"
    values = [@title, @price]
    film = SqlRunner.run(sql, values).first
    @id = film['id'].to_i()
  end

  def self.find(id) #find a film
    sql = "SELECT * FROM films
    WHERE id = $1"
    values = [id]
    result = SqlRunner.run(sql, values)
    return Film.new(result[0])
  end

  #update
  def update()
    sql = "UPDATE films set title = $1, price = $2 where id = $3"
    values = [@title, @price, @id]
    SqlRunner.run(sql, values)
  end

  #show which films a customer has booked to see
  def customers()
    sql = "SELECT customers.* FROM customers
    INNER JOIN tickets
    ON (tickets.customer_id = customers.id) WHERE tickets.film_id = $1"
    values = [@id]
    cust_data = SqlRunner.run(sql, values)
    return Customer.map_items(cust_data)
  end

# Check how many customers are going to watch a certain film
  def no_viewers_per_film()
     return customers().count()
  end

  # DELETE
  def delete()
    sql = "DELETE FROM films where id = $1"
    values = [@id]
    SqlRunner.run(sql, values)
  end

  #READ
  def self.all()
    sql = "select * from films"
    film_data = SqlRunner.run(sql)
    return Film.map_items(film_data)
  end

  # def showings()
  #   sql = "select ARRAY_AGG(title) AS FILMS from films"
  #   values = [@id]
  #   result = SqlRunner.run(sql, values)
  #   return result.map{|showings| Film.new(showings)}
  # end

  def self.delete_all()
    sql = "DELETE FROM films"
    SqlRunner.run(sql)
  end

  def self.map_items(data)
    return data.map{|film| Film.new(film)}
    # return result
  end


end
