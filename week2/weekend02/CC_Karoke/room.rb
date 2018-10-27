#room.rb
class Room

  attr_reader :room_name, :room_cost, :max_capacity

  def initialize(room_name, room_cost, max_capacity)
    @room_name = room_name
    @room_cost = room_cost
    @till = 100
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

  # def charge_customer(guest,fee)
  #      guest.entry_fee(fee)
  #     @till += fee
  # end

  def add_songs(song)
    @songs_list << song
    return  song
  end

  #remove song
  def remove_song(song)
    @songs_list.delete(song)
  end

  def check_max_capacity(capacity)
    not_at_max = false
  if capacity >= @max_capacity
      return true
  end
    return not_at_max
  end


end
