require("pry")
require_relative("../models/album")
require_relative("../models/artist")

Album.delete_all()
Artist.delete_all()


artist1 = Artist.new({'name' => "Blur"})
artist1.save()
artist1.albums()
p artist1
artist2 = Artist.new({'name' => "coldplay"})
artist2.save()
artist2.albums()
p artist2
list1 = Album.new({
  'title'=> 'Modern Anthems',
  'genre'=> 'britpop',
  'artist_id'=> artist1.id})
  list1.save()
  list1.artists()
p list1

  # ================================

  list2 = Album.new({
    'title'=> 'X & Y',
    'genre'=> 'indie',
    'artist_id'=> artist2.id})
    list2.save()
    list2.artists()
 p list2

    #
    # binding.pry
    nil
