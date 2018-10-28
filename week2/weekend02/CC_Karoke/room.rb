#room.rb
class Room

  attr_reader :room_name, :room_cost, :max_capacity

  def initialize(room_name, room_cost, max_capacity)
    @room_name = room_name
    @room_cost = room_cost
    @max_capacity = max_capacity
    @guests_in_room = []
    @songs_list = []
  end

  #check song count
  def song_count()
    return  @songs_list.length()
  end

  def guest_check_in(party)
    @guests_in_room << party
    return party.count()
  end

  def guest_check_out(party)
     @guests_in_room.delete(party)
    return   party.count()
  end

  def add_songs(song)
    @songs_list << song
    return  song
  end

  #remove song
  def remove_song(song)
    @songs_list.delete(song)
  end

#check that capacity is not more than max. permitted e.g.2,room2
  def check_max_capacity(capacity)
    not_full = false
    room_full = "room full"
  if capacity >= @max_capacity
      return room_full
  end
    return not_full
  end


end
