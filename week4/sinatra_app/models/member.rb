require_relative( '../db/sql_runner' )

class Member

  attr_accessor( :first_name, :last_name, :membership, :id )

  def initialize( options )
    @id = options['id'].to_i() if options['id']
    @first_name = options['first_name']
    @last_name = options['last_name']
    @membership = options['membership']
  end

#CREATE
  def save()
    sql = "INSERT INTO members
    (
      first_name,
      last_name,
      membership
    )
    VALUES
    (
      $1, $2, $3
    )
    RETURNING id"
    values = [@first_name, @last_name, @membership]
    results = SqlRunner.run(sql, values)
    @id = results.first()['id'].to_i
  end

  def update()
    sql = "UPDATE members
    SET
    (
      first_name,
      last_name,
      membership

    ) =
    (
      $1, $2, $3
    )
    WHERE id = $4"
    values = [@first_name, @last_name, @membership, @id]
    SqlRunner.run(sql, values)
  end

#READ/FIND ALL
  def self.all()
    sql = "SELECT * FROM members"
    results = SqlRunner.run(sql)
    members = map_items(results)
    return members
  end

#FIND by id
  def self.find( id )
    sql = "SELECT * FROM members
    WHERE id = $1"
    values = [id]
    results = SqlRunner.run( sql, values )
    return Member.new( results.first )
  end

#find all upcoming classes a customer is booked for by id
def customer_bookings()
 sql = "SELECT activities.* , m.first_name, m.last_name FROM activities INNER JOIN bookings ON bookings.activities_id = activities.id INNER JOIN members m ON bookings.members_id = m.id WHERE m.id = $1 ORDER BY activities.id, m.last_name"
 values = [@id]
 result = SqlRunner.run(sql, values)
 return  result.map { |session| Activity.new( session) }
end

# def session_bookings(activities_id)
# sql = "SELECT bookings.*  FROM bookings  INNER JOIN members ON bookings.members_id = members.id WHERE members.id = $1 AND bookings.activities_id = $2 ORDER BY bookings.id ASC "
# values = [@id]
# result = SqlRunner.run(sql, values)
# return result.map { |bookings| Booking.new( result)}
# end

#Delete by ID
  def self.delete(id)
    sql = "DELETE FROM members where id = $1"
    values = [id]
    SqlRunner.run( sql, values )
  end

#Delete all
  def self.delete_all
    sql = "DELETE FROM members"
    SqlRunner.run( sql )
  end

  def self.map_items(results)
      return results.map { |member|  Member.new(member) }
  end

end
