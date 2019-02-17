require('minitest/autorun')
require('minitest/rg')
require_relative('../bear.rb')
require_relative('../river.rb')
require_relative('../fish.rb')

class BearTest < MiniTest::Test


  def setup()
    @grizzly = Bear.new("Yogi Bear")
    @river = River.new("Almond")
    @fish1 = Fish.new("Trout")
    @fish2 = Fish.new("Salmon")
    @fish3 = Fish.new("herring")
  end

  def test_bear_has_name()
    assert_equal("Yogi Bear", @grizzly.name_grizzly())
  end

  def test_bear_has_empty_tum()
    assert_equal(0, @grizzly.tummy_full())
  end


  def test_river_has_fish_eaten
    @river.add_fish(@fish1)
    @river.add_fish(@fish2)
    @river.add_fish(@fish3)

    fish = @river.remove_fish()

    @grizzly.grizzly_eats(fish)
    # @grizzly.grizzly_eats(@river)

    assert_equal(1, @grizzly.tummy_full())
  end

end
