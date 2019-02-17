require('minitest/autorun')
require('minitest/rg')
require_relative('../river.rb')
require_relative('../bear.rb')
require_relative('../fish.rb')

class RiverTest < MiniTest::Test

  def setup()
    @river = River.new("Dee")
    @fish1 = Fish.new("Trout")
    @fish2 = Fish.new("Sardine")
    @fish3 = Fish.new("Smokies")
  end

  def test_name_of_river
    assert_equal("Dee", @river.river_name)
  end


  def test_no_in_river
    assert_equal(0, @river.flood_river())
  end

  def test_add_to_river()
    @river.add_fish(@fish1)
    @river.add_fish(@fish2)
    @river.add_fish(@fish3)
    assert_equal(3, @river.flood_river())
  end


  def test_remove_fish_from_river
    @river.add_fish(@fish1)
    @river.add_fish(@fish2)
    @river.remove_fish()
    assert_equal(1, @river.flood_river)
  end



end
