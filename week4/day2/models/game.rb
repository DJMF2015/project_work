class Game

  def self.play_game(player1, player2)
    hand1 = player1[:hand].downcase
    computer = player2[:hand].downcase

    win = {
      "rock" => "scissors",
      "scissors" => "paper",
      "paper" => "rock"
    }


    while true

      winner = nil

    p computer = win.keys.sample

      if win[hand1] == computer
        winner = player1
      elsif win[computer] == hand1
        winner = player2
      end

      if winner != nil
        return " #{winner[:player_no]} won by playing " + winner[:hand]
      elsif hand1 == computer
        return "it was a draw!"
      else
        return "please choose rock, paper, scissors!"
      end
    end
  end
end
