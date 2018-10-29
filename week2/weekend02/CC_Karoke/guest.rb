#guest.rb
class Guest

  attr_reader :guest_name, :guest_wallet, :favourite_song
  #constructor
  def initialize(guest_wallet, guest_name, favourite_song)
    @guest_wallet = guest_wallet
    @guest_name = guest_name
    @favourite_song = favourite_song
  end

#charge fee to customer's wallet
  def entry_fee(fee)
    @guest_wallet -= fee
  end

# return "whoo!" if guest favoutite song in playlist
  def my_fav_song(my_song)
    # my_song.find { |song| p song == my_song}
    return "Whoo!" if my_song.include?(@favourite_song)
  end

#same as above using each iterator instead of enumerator
  # def my_fav_song(my_song)
  #   my_song.each do |song|
  #     if song == my_song
  #       p "Whoo!"
  #       return song
  #     end
  #   end
  # end




end
