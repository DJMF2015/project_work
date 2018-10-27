
class BarAdmin

attr_reader :till

  def initialize(till)
    @till = till
  end


  def add_to_till(fee)
     p @till += fee
  end


end
