require('minitest/autorun')
require('minitest/rg')
require_relative('../song.rb')
require_relative('../guest.rb')
class TestSong < Minitest::Test

  def setup
    @song1 = Song.new("Morph: Twenty One Pilots")
    @song2 = Song.new("Retreat2018 et al.., Chase & Status")

  end

def test_songs_have_name
  expected = "Retreat2018 et al.., Chase & Status"
  assert_equal(expected, @song2.song_name)

end


end
