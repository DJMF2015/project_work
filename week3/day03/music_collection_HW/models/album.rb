require('pg')
require_relative('sql_runner')
require_relative('artist')
class Album

  attr_accessor :title, :genre, :artist_id
  attr_reader :id

  def initialize(options)
    @title = options['title']
    @genre = options['genre']
    @id = options['id'].to_i if options['id']
    @artist_id = options['artist_id'].to_i

  end

  def save()
    sql = "INSERT INTO album
    (
      title,
      genre,
      artist_id
      ) VALUES
      (
        $1, $2, $3
      )
      RETURNING id"
      values = [@title, @genre, @artist_id]
      @id = SqlRunner.run(sql, values)[0]["id"].to_i
    end

    def update()
      sql = "
      UPDATE album SET (
        title,
        genre,
        artist_id
        ) =
        (
          $1,$2, $3
        )
        WHERE id = $4"
        values = [ @title, @genre, @artist_id, @id]
        SqlRunner.run(sql,values)
      end


      def delete()
        sql = "DELETE FROM album where id = $1"
        values = [@id]
        SqlRunner.run(sql,values)
      end

      def self.find(id)
        sql = "SELECT * FROM album WHERE id = $1"
        SqlRunner.run(sql)
        values = [id]
        results = SqlRunner.run(sql, values)
        # list_hash = results.first
        album = Self.new(results.first)
        return album
      end

      def self.delete_all()
        sql = "DELETE from album"
        SqlRunner.run(sql)
      end

      def self.all()
        sql = "SELECT * FROM album"
        art_list = SqlRunner.run(sql)
        return art_list.map { |order| Album.new(art_list) }
      end

      def artists()
        sql = "select * from artist where id = $1"
        values = [@artist_id]
        artist = SqlRunner.run(sql, values).first
        result = Artist.new(artist)
        return result
      end


    end
