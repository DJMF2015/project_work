#library.rb

class Library

  attr_accessor :books

  def initialize(books)
    @book_list = books
  end

  # #loop over the instance books & if the paramater
  #  matches book title, return book details

  def lookup_book(title_book)
    found = nil
    for book in @book_list #loop over instance variable for book objects
      if book[:title] == title_book
        found = book
      end
    end
    return p found
  end






end
