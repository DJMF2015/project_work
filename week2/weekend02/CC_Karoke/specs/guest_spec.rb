require('minitest/autorun')
require('minitest/rg')
require_relative('../guest.rb')

class TestGuest < Minitest::Test

  def setup
    @guest1 = Guest.new("John Doe", "Feel Good:Gorillaz ", 10.0)
    @guest2 = Guest.new("John McClane", "Let it Snow",50.0)
  end





end
