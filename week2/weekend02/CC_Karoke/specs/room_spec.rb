require('minitest/autorun')
require('minitest/rg')
require_relative('../room.rb')
require_relative('../song.rb')
require_relative('../guest.rb')
require_relative('../baradmin.rb')

class TestRoom < Minitest::Test

  def setup
    #name, cost, max._capacity
    @room1 = Room.new("The Magic JukeBox",50.0, 10)
    @room2 = Room.new("The Elvis Presley", 25.0, 2)
    @room3 = Room.new("The Impersonator", 75.0, 8 )
    @room4  = Room.new("Rave Room", 20.0, 4)

    #guest name, favourite song, money
    @guest1 = Guest.new(10.0,"John Doe", "Feel Good:Gorillaz " )
    @guest2 = Guest.new(50.0, "John McClane", "Let it Snow")
    @guest3 = Guest.new(25.0,"Roger Rainer", "One Day Like This")
    @guest4 = Guest.new(60.0, "David Blain", "Pump-Up-The-Jam")
    @check_in = [@guest1, @guest2, @guest3, @guest4]
    @check_out = [@guest1, @guest2]
    #song title/band
    @song1 = Song.new("Solo: Clean Bandit")
    @song2 = Song.new("Pump Up the Jam: Technotronic")
    @song3 = Song.new("One More Time: Daft Punk")
    @song4 = Song.new("Morph: TWenty One Pilots")
    @song5 = Song.new("Retreat2018 et al.., Chase & Status")
  end

  def test_room_has_a_name
    expected  = "The Magic JukeBox"
    actual = @room1.room_name
    assert_equal(expected, actual)
  end

  def test_room_has_a_price
    expected = 75.0
    actual = @room3.room_cost
    assert_equal(expected, actual)
  end

  def test_room_not_full
    max = @room1.guest_check_in(@check_in)
    assert_equal(false, @room1.check_max_capacity(max))
  end

  def test_room_can_check_in_guest
    assert_equal(4, @room4.guest_check_in(@check_in))
  end

  def test_room_can_check_out__guest
    @room2.guest_check_in(@check_in)
    actual = @room2.guest_check_out(@check_out)
    assert_equal(2, actual)
  end

  def test_room_has_a_fee_charge
    assert_equal(75.0, @room3.room_cost)
  end

  def test_room_can_add_song
    song_list = [@song1, @song2]
    assert_equal(2, @room1.add_songs(song_list.length()))
  end

  def test_room_can_remove_song
    @room1.add_songs(@song1)
    @room1.add_songs(@song2)
    @room1.add_songs(@song3)
    @room1.remove_song(@song1)
    assert_equal(2, @room1.song_count)
  end

  def test_room_has_a_max_capacity
    expected = 8
    actual = @room3.max_capacity
    assert_equal(expected, actual)
  end

  def test_check_if_room_is_full
    max = @room2.guest_check_in(@check_in)
    assert_equal("room full", @room2.check_max_capacity(max))
  end

  #validate guest can choose random song from playlist
  def test_guest_can_choose_random_song
    @room2.add_songs(@song1)
    @room2.add_songs(@song2)
    @room2.add_songs(@song3)
    @room2.add_songs(@song4)
    @room2.add_songs(@song5)
    songs = [@song1, @song2, @song3, @song4, @song5]
    change = @room2.surprise_song(songs)
    assert_equal(true, change)
  end



end
