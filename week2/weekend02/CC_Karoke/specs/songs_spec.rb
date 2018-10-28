require('minitest/autorun')
require('minitest/rg')
require_relative('../song.rb')
require_relative('../guest.rb')
require_relative('../room.rb')
class TestSong < Minitest::Test

  def setup
    @song1 = Song.new("Solo: Clean Bandit")
    @song2 = Song.new("Pump Up the Jam: Technotronic")
    @song3 = Song.new("One More Time: Daft Punk")
    @song4 = Song.new("Morph: TWenty One Pilots")
    @song5 = Song.new("Retreat2018 et al.., Chase & Status")

  end

  def test_songs_have_name
    expected = "Retreat2018 et al.., Chase & Status"
    assert_equal(expected, @song5.song_name)
  end

end
