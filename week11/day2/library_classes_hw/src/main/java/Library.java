import java.util.ArrayList;

public class Library {

    private ArrayList<Book> books;
    private int capacity;

    public Library(int capacity) {
        this.capacity = capacity;
        this.books = new ArrayList<>();
    }


    //check the count of books in library
     public int checkStockLevel(){
        return this.books.size();
     }

     //add a book to library if there is capacity available
     public void addBook(Book book){
        if(checkStockLevel() < this.capacity ){
            this.books.add(book);
        }

     }

     public Book removeBook(){
      return this.books.remove(0);
     }





}
