require('minitest/autorun')
require('minitest/rg')
require_relative('../guest.rb')

class TestGuest < Minitest::Test

  def setup
    @guest1 = Guest.new(10.0,"John Doe", "Feel Good:Gorillaz ")
    @guest2 = Guest.new(60.0, "David Blain", "Pump-Up-The-Jam")
  end

def test_guest_has_a_name
   assert_equal("David Blain", @guest2.guest_name)
 end



end
