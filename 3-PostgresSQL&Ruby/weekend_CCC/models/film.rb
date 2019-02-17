require_relative("../db/sql_runner")

class Film

  attr_reader :id
  attr_accessor :title, :price, :times

  #constructor
  def initialize(options)
    @id = options['id'].to_i() if options['id']
    @title = options['title']
    @price = options['price'].to_i
    @times = options['times']
  end

  #create
  def save()
    sql = "INSERT INTO films(title, price, times) values ($1, $2, $3) RETURNING id"
    values = [@title, @price, @times]
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
    sql = "UPDATE films set title = $1, price = $2, times =$3 where id = $4"
    values = [@title, @price, @times, @id]
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

#query below retrieves and sorts the total count of tickts sold for each film. Realise there is a betetr way to achieve this in ruby but never got as far as writing...
# tickets_sold |    title
# --------------+--------------
#            3 | Outlaw
#            2 | Star Wars VI
#            1 | Skyfall
#            1 | Ted
#            1 | Die Hard
# (5 rows)
  def most_tickets_sold()
    sql = "SELECT COUNT(title) AS TICKETS_SOLD, films.title from films inner join tickets on (tickets.film_id = films.id) group by title ORDER BY count(title) DESC"
    film_data = SqlRunner.run(sql)#values
    return  Film.map_items(film_data)
  end

  #most popular film by tickets sold
  def most_tickets()
    return  most_tickets_sold().first() #return first element from query (i.e.Outlaw)
  end

  def self.delete_all()
    sql = "DELETE FROM films"
    SqlRunner.run(sql)
  end

  def self.map_items(data)
    return data.map{|film| Film.new(film)}
    # return result
  end


end
