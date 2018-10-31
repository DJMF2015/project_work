require('pg')
require_relative('sql_runner')
require_relative('album')

class Artist
  attr_accessor :name
  attr_reader :id

  def initialize(options)
    @id = options['id'].to_i
    @name = options['name']
  end

  def save()
    #save artist name to db and serialized id for identification
    sql = "insert into artist
    (name)  VALUES  ($1)
    RETURNING id"
    values = [@name]
    @id = SqlRunner.run(sql, values)[0]['id'].to_i
  end


  def self.all()
    sql = "select * from artist"#retrieve all artist as hash object
    artist = SqlRunner.run(sql)
    return artist.map {|art| artist.new(art)}
  end

  def self.delete_all()
    sql = "delete from artist"
    SqlRunner.run(sql)
  end

  def albums()
    sql = "select * from album where artist_id = $1 "
    values = [@id]
    list = SqlRunner.run(sql, values)
    return list.map{|art| Artist.new(art)}#return array transformed to hash pg obj.

  end

end
