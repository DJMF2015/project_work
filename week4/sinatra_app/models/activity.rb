require_relative( '../db/sql_runner' )


class Activity

  attr_reader( :session, :spaces, :description, :duration, :id )

  def initialize( options )
    @id = options['id'].to_i if options['id']
    @session = options['session']
    @spaces = options['spaces']
    @description = options['description']
    @duration = options['duration']
  end

#€CREATE
  def save()
    sql = "INSERT INTO ACTIVITIES
    (
      session,
      spaces,
      description,
      duration
    )
    VALUES
    (
      $1, $2, $3, $4
    )
    RETURNING id"
    values = [@session, @spaces, @description, @duration]
    results = SqlRunner.run(sql, values)
    @id = results.first()['id'].to_i
  end


    def update()
      sql = "UPDATE members
      SET
      (
        session,
        spaces,
        description,
        duration
      ) =
      (
        $1, $2, $3, $4
      )
      WHERE id = $5"
      values = [@session, @spaces, @description, @duration, @id]
      SqlRunner.run(sql, values)
    end

  #READ/FIND all
    def self.all()
      sql = "SELECT * FROM activities"
      results = SqlRunner.run( sql )
      return results.map_items (members_data)
    end

  #FIND by id
    def self.find( id )
      sql = "SELECT * FROM activities
      WHERE id = $1"
      values = [id]
      results = SqlRunner.run( sql, values )
      return Activity.new( results.first )
    end


    #Delete by ID
      def self.delete(id)
        sql = "DELETE FROM activites where id = $1"
        values = [id]
        SqlRunner.run( sql, values )
      end

    #Delete all
      def self.delete_all
        sql = "DELETE FROM activities"
        SqlRunner.run( sql )
      end

    def self.map_items(members_data)
        return members_data.map { |member| Activity.new(member) }
    end
end
