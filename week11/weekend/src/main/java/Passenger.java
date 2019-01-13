import java.util.ArrayList;

public class Passenger {

    private ArrayList<Passenger> passenger;
    private Destination ticket;

    private String name;

    public Passenger(String name){
        this.passenger =  new ArrayList<>();
        this.name = name;
    }

    public String getName(){
        return this.name;
    }
    public Destination checkTicket(){
        return  ticket;
    }

    public void purchaseTicket(Destination ticket){
          this.ticket = ticket;
    }


}
