class Game

  def self.play_game(player1, player2)
    human = player1[:hand].downcase
    computer = player2[:hand].downcase


    win = {
      "rock" => "scissors",
      "paper" => "rock",
      "scissors" => "paper"
    }

    while true

      winner = nil

      p computer = win.keys.sample

      if win[human]==computer
      p  winner = player1
      elsif win[computer] == human
      p  winner = player2
      end

      if winner != nil
        return " #{winner[:choice]} win against #{winner[:hand]}"
      elsif human == computer
        return "It's a draw!"
      else "please choose rock, paper, scissors"
      end
    end
  end
end
