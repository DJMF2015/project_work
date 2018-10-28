#baradmin.rb
class BarAdmin

attr_reader :till

  def initialize(till)
    @till = till
  end


  def add_to_till(fee)
   @till += fee
  end


end
