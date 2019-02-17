import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertNotNull;
import static org.junit.Assert.assertEquals;

public class LibraryTest {

  Library library;
  Book book;

  @Before
  public void before(){
    library =  new Library(50);
    book = new Book("Sherlock In London", "Conan Doyle", "Fiction");

  }

  @Test
  public void checkCapacityStartsEmpty(){
    assertEquals(0, library.checkStockLevel()); //expected:0
  }

  @Test
  public void addBookToLibrary(){
     library.addBook(book);
     library.addBook(book);
     assertEquals(2, library.checkStockLevel()); //expected:2
  }

  @Test
    public void removeBook() {
      library.addBook(book);
      Book remove = library.removeBook();
      assertNotNull(remove);
      assertEquals(0, library.checkStockLevel());


  }
}
