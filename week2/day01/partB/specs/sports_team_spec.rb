require('minitest/autorun')
require('minitest/rg')
require_relative('../sports_team')


class TestSportsTeam < MiniTest::Test


  def setup
    players = ["David", "Mack the Hack", "joel", "Fred", "Ivor"]
    @team = SportsTeam.new("Hunters", players, "Henry Bremmner")
  end

  def test_team_has_name()
    assert_equal("Hunters",  @team.team_name())
  end

  def test_team_has_players
    assert_equal(5, @team.team_players().length())
  end

  def test_team_has_coach
    assert_equal("Henry Bremmner", @team.coach())
  end

 def test_team_can_add_player
   new_player =  "Jack The Knife"
   expected = 6

   @team.add_player(new_player) #testing 'side effects' (that no in array increasing-count)
   actual = @team.team_players().length()#count
  #cannot test return  as adding so therefor enot returning a vaalue
   assert_equal(expected, actual)
 end

def test_player_player_is_present
   expected = "Mack the Hack"
   actual = "Mack the Hack"
   assert_equal(true, @team.check_player_present(expected))
end

def test_player_not_found_in_team()
  name = "Gideon Smith"
  actual =  @team.check_player_present(name)
  assert_equal(false, actual)
end

  #test no of points if won (true)
def test_if_team_has_won
@team.check_win_or_lose(true)
assert_equal(2, @team.points())
end

#test no of points if lost(false)
def test_if_team_has_lost
@team.check_win_or_lose(false)
assert_equal(0, @team.points())
end

end
