#guest.rb
class Guest

  attr_reader :name, :guest_wallet, :favourite_song

  def initialize(guest_wallet, guest_name, favourite_song)
    @guest_wallet = guest_wallet
    @guest_name = guest_name
    @favourite_song = favourite_song
  end


  def entry_fee(fee)
     @guest_wallet -= fee
  end







end
