#sports_team.rb

class SportsTeam

  attr_accessor :team_name, :team_players, :coach, :points

  def initialize(team_name, team_players, coach )
    @team_name = team_name
    @team_players = team_players
    @coach = coach
    @points = 0
  end

  #create a method that adds a new player to the players array.
  def add_player(add_new_player)
    @team_players << add_new_player
  end

  #checks to see if they are in the players array.
  def check_player_present(player_present)
    if team_players.include?(player_present)
    end
    return player_present
  end

  #Create a method that check team has won or lost and updates the points property
  def check_win_or_lose(won_or_lost)
    if  won_or_lost
      @points += 5
    end
  end

end
