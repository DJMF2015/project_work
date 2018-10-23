#bear.rb
class Bear


  attr_reader :name_grizzly

  def initialize(name_grizzly)
    @name_grizzly= name_grizzly#river's name i.e. Dee
    @tummy = [] #array for populating with fish

  end

  def tummy_full()
    return @tummy.length()
  end

  def grizzly_eats(fish)
    @tummy << fish

  end

  def bear_roars()
    return  "ROOAARRR..!"
  end
end
