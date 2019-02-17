require('minitest/autorun')
require('minitest/rg')
require_relative('../library')


class TestLibrary < MiniTest::Test

  def setup
    @book_list = [ {
      title: "lord_of_the_rings",
      year: 1955,
      rental_details: {
        student_name: "Jeff",
        date: "01/12/16"
      }
    },
    {
      title: "The Fear Index",
      year: 2011,
      rental_details: {
        student_name: "Daft Bob",
        date: "22/10/18"
      }
      } ]
      @library = Library.new(@book_list)
  end

    def test_library_all_book_title
      library_list =  @library.books()
      assert_equal(@book_list,library_list)
    end

   def test_library_has_rental_details
     search_book = @library.lookup_book("The Fear Index")
     assert_equal("The Fear Index", search_book[:title])
   end


   def test_book_is_not_found
   #TO-DO....
   end






  end
