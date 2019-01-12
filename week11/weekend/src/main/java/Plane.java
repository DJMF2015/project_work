import java.util.ArrayList;

public class Plane {

    private Airline airline;
    private PlaneType type;
    private ArrayList <Passenger> passengers;

    Plane(PlaneType type, Airline airline) {

        this.type = type;
        this.airline = airline;
        this.passengers = new ArrayList <>();

    }

    public PlaneType getType(){
        return this.type;
    }

    public Airline getAirline(){
        return this.airline;
    }
    public int getNoOfPassenger(){
        System.out.println(this.passengers.size());
      return this.passengers.size();

    }
    public void boardPassenger(Passenger passenger){
        this.passengers.add(passenger);

    }
    public void deplane(Passenger passenger){
        this.passengers.remove(passenger);
    }
}
