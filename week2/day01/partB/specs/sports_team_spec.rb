require('minitest/autorun')
require('minitest/rg')
require_relative('../sports_team')


class TestSportsTeam < MiniTest::Test


  def setup
    players = ["David", "mack", "joel", "Fred", "Ivor"]
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
   add = "Jack The Knife"
   @team.add_player(add)
   assert_equal(6, @team.team_players().length())
 end

def test_player_player_is_present
   assert_equal("mack" , @team.check_player_present("mack"))
end

def test_player_is_not_present()
  assert_equal("Gideon Smith", @team.check_player_present("Gideon Smith"))
end

  #test no of points if won (true)
def test_if_team_has_won
@team.check_win_or_lose(true)
assert_equal(5, @team.points())
end
  
#test no of points if lost(false)
def test_if_team_has_lost
@team.check_win_or_lose(false)
assert_equal(0, @team.points())
end

end
