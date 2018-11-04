require_relative("../db/sql_runner")

class Ticket

  attr_reader :id
  attr_accessor :film_id, :customer_id

  #constructor
  def initialize(options)
    @id = options['id'].to_i() if options['id']
    @film_id = options['film_id'].to_i()
    @customer_id = options['customer_id'].to_i()
  end

  #save
  def save()
    sql = "INSERT INTO tickets (film_id, customer_id) VALUES ($1, $2) RETURNING id"
    values = [@film_id, @customer_id]
    ticket = SqlRunner.run(sql, values).first
    @id = ticket['id'].to_i
  end

  # UPDATE: this really necessary???
  # def update()
  #   sql = "UPDATE films SET (film_id, customer_id) = ($1, $2 ) WHERE id = $3"
  #   values = [@film_id, @customer_id, @id]
  #   SqlRunner.run(sql, values)
  # end

  #DELETE a record
  def delete()
    sql = "DELETE * FROM tickets where id = $1"
    values = [@id]
    SqlRunner.run(sql, values)
  end

  def most_popular_films()
    sql = " SELECT f.id, f.title, f.times, t.customer_id, c.name, SUM(f.id) AS MOST_POPULAR FROM films f join tickets t ON (f.id = t.film_id)
    INNER JOIN customers c ON t.id = c.id
    GROUP BY t.id, f.id, t.customer_id, c.name ORDER BY t.id ASC"
    values = [@id]
    hash_data = SqlRunner.run(sql, values)
    return p hash_data{|time| Ticket.new(time)}
  end

  def customer()
    sql = "SELECT * FROM customers WHERE customer_id = $1"
    values = [@id]
    hash_data = SqlRunner.run(sql, values)
    return hash_data{|cust| Customer.new(cust)}
  end

  #find all film by id
  def film
    sql = "SELECT *
    FROM films
    WHERE films.id = $1"
    values = [@film_id]
    film_data = SqlRunner.run(sql, values)
    film = Film.map_items(film_data).first
    return film
  end

  #READ/FIND All
  def self.all()
    sql = "SELECT * FROM tickets"
    data = SqlRunner.run(sql)
    return data.map{|booking| Ticket.new(booking)}
  end

  #DELETE all records
  def self.delete_all()
    sql = "DELETE FROM tickets"
    SqlRunner.run(sql)
  end

end
