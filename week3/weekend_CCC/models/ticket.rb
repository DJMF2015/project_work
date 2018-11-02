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

  def delete()
      sql = "DELETE * FROM tickets where id = $1"
      values = [@id]
      SqlRunner.run(sql, values)
  end

  def self.all()
    sql = "SELECT * FROM tickets"
    data = SqlRunner.run(sql)
    return data.map{|booking| Ticket.new(booking)}
  end

  def self.delete_all()
      sql = "DELETE FROM tickets"
      SqlRunner.run(sql)
  end

end
