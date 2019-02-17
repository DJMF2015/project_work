
require('minitest/autorun')
require('minitest/rg')
require_relative('../fish.rb')
require_relative('../river.rb')

class FishTest < MiniTest::Test
  def setup()
    @fish_name= Fish.new("Trout")
  end

  def test_fish_has_name()
    assert_equal("Trout", @fish_name.fish_name())
  end



end
