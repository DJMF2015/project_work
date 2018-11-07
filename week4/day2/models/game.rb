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
        winner = player1
      elsif win[computer] == human
        winner = player2
      end

      if winner != nil
        return " #{winner[:choice]} wins against #{winner[:hand]}"
      elsif human == computer
        return "It's a draw!"
      else "please choose rock, paper, scissors"
      end
    end
  end
end
#   case player1
#   when 'rock'
#     if player2 == 'scissors'
#       return "Player 1 wins by playing #{player1}!"
#     elsif
#       player2 == 'paper'
#       return "Player2 wins by playing #{player2}!"
#     else return "Draw!"
#     end
#   when 'scissors'
#     if player2 == 'paper'
#       return "Player 1 wins by playing #{player1}!"
#     elsif
#       player2 == 'rock'
#       return "Player2 wins by playing #{player2}!"
#     else return "Draw!"
#     end
#   when 'paper'
#     if player2 == 'rock'
#       return "Player 1 wins by playing #{player1}!"
#     elsif
#       player2 == 'scissors'
#       return "Player2 wins by playing #{player2}!"
#     else return "Draw!"
#     end
#   end
# end
