require_relative( '../db/sql_runner' )

class Member

  attr_reader( :first_name, :last_name, :membership, :id )

  def initialize( options )
    @id = options['id'].to_i if options['id']
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

#READ/FIND all
  def self.all()
    sql = "SELECT * FROM members"
    results = SqlRunner.run( sql )
    return p results.map_items (members_data)
  end

#FIND by id
  def self.find( id )
    sql = "SELECT * FROM members
    WHERE id = $1"
    values = [id]
    results = SqlRunner.run( sql, values )
    return p Member.new( results.first )
  end

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

  def self.map_items(members_data)
      return p members_data.map { |member| Member.new(member) }
  end

end
