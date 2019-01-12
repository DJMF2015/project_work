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
}
