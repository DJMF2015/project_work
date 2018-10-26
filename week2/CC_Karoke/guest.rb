#guest.rb
class Guest

  attr_reader :name, :guest_wallet, :favourite_song
  
  def initialize(guest_name, guest_wallet, favourite_song)
    @guest_name = guest_name
    @guest_wallet = guest_wallet
    @favourite_song = favourite_song
  end


end
