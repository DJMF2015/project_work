#library.rb

class Library

  attr_accessor :books

  def initialize(books)
    @books = books
  end

  # #loop over the instance books & if the paramater
  #  matches book title, return
  def lookup_book(title_book)
    found = nil
    for book in @books
      if book[:title] == title_book
        found = book
      end
    end
    return p found
  end






end
