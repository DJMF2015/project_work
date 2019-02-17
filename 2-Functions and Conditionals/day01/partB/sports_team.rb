#sports_team.rb

class SportsTeam

  attr_accessor :team_name, :team_players, :coach, :points
  # attr_reader :team_team, :team_players
  # attr_writer  :coach

  def initialize(team_name, team_players, coach )
    @team_name = team_name
    @team_players = team_players
    @coach = coach
    @points = 0
  end

# < --- getters and setters --- >

  #<--  get team team_name -->
  # -----------------
  # def team_team
  #   @team_name
  # end
  # ----------------
  #<-- get players -->
  # def team_players
  #   @team_players
  # end
  # ----------------
  # <--get coach name -->
  # def coach
  #   @coach
  # end
  # -----------------
  # set coach name
  # def change_coach(set_new_coach)
  #   @coach = set_new_coach
  # end

  #create a method that adds a new player to the players array.
  def add_player(add_new_player) #needs param as otherwise no value to add a player
    # @team_players << add_new_player
   @team_players.push(add_new_player)
  end

  #checks to see if they are in the players array. Return if player available
  def check_player_present(player_present)
    # if team_players.include?(player_present)
    # end
    # return player_present
    return @team_players.include?(player_present)
  end

  #Create a method that check team has won or lost and updates the points accordingly
  def check_win_or_lose(won_or_lost)
    #if true (game won), add 5 points to winner-otherwise 0.
    if  won_or_lost
      @points += 2
    end
  end


end
