require('minitest/autorun')
require('minitest/rg')
require_relative('../library')


class TestLibrary < MiniTest::Test

  def setup
    players = ["David", "mack", "joel", "Fred", "Ivor"]
    @team = SportsTeam.new("Hunters", players, "Henry Bremmner")
  end













end
