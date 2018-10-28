#baradmin.rb
class BarAdmin

attr_reader :till
  #constructor
  def initialize(till)
    @till = till
  end

#add guest fee to till total from guest's wallet
  def add_to_till(fee)
   @till += fee
  end


end
