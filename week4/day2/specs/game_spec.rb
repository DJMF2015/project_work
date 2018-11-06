require 'minitest/autorun'
require_relative '../models/game'

class TestCalculator < Minitest::Test

  def setup
    @outcome = Game.new(player1, player2)
  end

#   def player1
#     assert_equal( "scissors", @outcome.play_game())
#   end
#
# end
