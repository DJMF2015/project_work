#river.rb

class River


  attr_reader :river_name

  def initialize(river_name)
    @river_name= river_name #river's name i.e. Dee
    @fill_river= [] #array for populating with fish

  end


  def flood_river()
    return @fill_river.length()
    # return  @fill_river.count()
  end


  def add_fish(fish)
    return @fill_river << fish
  end

  def remove_fish()
    fish = @fill_river.pop()
    return fish
  end
end
