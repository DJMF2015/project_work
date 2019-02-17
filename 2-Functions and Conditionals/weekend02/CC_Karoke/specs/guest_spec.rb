require('minitest/autorun')
require('minitest/rg')
require_relative('../guest.rb')
require_relative('../song.rb')
require 'minitest/emoji'
require 'minitest/hyper'
# require 'color_pound_spec_reporter'
class TestGuest < Minitest::Test

  def setup
    @song1 = Song.new("Solo: Clean Bandit")
    @song2 = Song.new("Pump Up the Jam: Technotronic")
    @song3 = Song.new("One More Time: Daft Punk")
    @guest1 = Guest.new(10.0,"John Doe", @song3)
    @guest2 = Guest.new(60.0, "David Blain", "Pump-Up-The-Jam")

  end

  def test_guest_has_a_name
    assert_equal("David Blain", @guest2.guest_name)
  end

  def test_guest_has_favourite_song
    @songs = [@song1, @song2, @song3]
    expected = "Whoo!"
    actual = @guest1.my_fav_song(@songs)
    assert_equal(expected,  actual)
  end

end
