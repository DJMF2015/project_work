import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BorrowerTest {

    private Borrower collection;
    private Book book;
    private Library library;


    @Before
    public void before(){
        book = new Book("Sherlock In London", "Conan Doyle", "Fiction");
        collection = new Borrower("David Fulton", 6);
        library = new Library(10);
         for (int i = 0; i < 10; i++){
             library.addBook(book);
             library.addBook(book);
         }

    }

    @Test
    public void borrowerCanAddTakeBook(){
        library.addBook(book);
        library.addBook(book);
        library.removeBook();
        collection.checkOutBook(book);
        assertEquals(1, collection.checkBookCount());
    }
}
