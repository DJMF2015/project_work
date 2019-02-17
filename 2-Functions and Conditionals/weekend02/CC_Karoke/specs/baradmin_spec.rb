require('minitest/autorun')
require('minitest/rg')
require_relative('../baradmin.rb')
require_relative('../room.rb')
require_relative('../guest.rb')
require 'minitest/emoji'
require 'minitest/hyper'

class TestBarAdmin  < Minitest::Test

  def setup()
    @bar_admin = BarAdmin.new(150.0)#amount in till
    @guest = Guest.new(60.0, "Roger Rainer", "One Day Like This")#cash, name, fav.song
    @room1 = Room.new("The Magic JukeBox",50.0,10)#room_name,charge,capacity
  end


  def test_pub_has_money_in_till
    assert_equal(150.0, @bar_admin.till)
  end

  def test_charge_customer_room_fee
    @charge = @room1.room_cost
    @guest.entry_fee(@charge)
    @bar_admin.add_to_till(@charge)
    assert_equal(10.0, @guest.guest_wallet)#60-50=10.00
    assert_equal(200.0, @bar_admin.till)#150+50=200.00
  end

end
