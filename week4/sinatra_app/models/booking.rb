require_relative( '../db/sql_runner' )

class Booking

  attr_accessor( :members_id, :activities_id, :id )

  def initialize( options )
    @id = options['id'].to_i if options['id']
    @members_id = options['members_id'].to_i
    @activities_id = options['activities_id'].to_i
  end

  #CREATE
  def save()
    sql = "INSERT INTO bookings
    (
      members_id,
      activities_id
    )
    VALUES
    (
      $1, $2
    )
    RETURNING id"
    values = [@members_id, @activities_id]
    results = SqlRunner.run(sql, values)
    @id = results.first()['id'].to_i
  end

  def self.all()
    sql = "SELECT * FROM bookings"
    results = SqlRunner.run( sql )
    return results.map_items (bookings_data)
  end

  #Delete by ID
  def self.delete(id)
    sql = "DELETE FROM bookings where id = $1"
    values = [id]
    SqlRunner.run( sql, values )
  end

  #FIND by id
  def self.find( id )
    sql = "SELECT * FROM bookings
    WHERE id = $1"
    values = [id]
    results = SqlRunner.run( sql, values )
    return p Member.new( results.first )
  end



  def self.delete_all()
    sql = "DELETE FROM bookings"
    SqlRunner.run( sql )
  end

  def self.map_items(bookings_data)
    return bookings_data.map { |bookings|  Booking.new(bookings) }
  end

end
