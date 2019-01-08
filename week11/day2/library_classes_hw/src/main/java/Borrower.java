import java.util.ArrayList;

public class Borrower {

    private String borrowerName;
    private int borrowerLimit;
    private ArrayList<Book> books;

    public Borrower(String borrowerName, int borrowerLimit){
        this.borrowerName = borrowerName;
        this.borrowerLimit = borrowerLimit;
        books = new ArrayList <>();
    }
    public String borrowerName(String name){
        return name = "David";
    }

    public int checkBookCount(){
        System.out.println(this.books.size());
        return this.books.size();
    }

    public void checkOutBook(Book book){
       // System.out.println(this.books.size());
        books.add(book);

    }
}
