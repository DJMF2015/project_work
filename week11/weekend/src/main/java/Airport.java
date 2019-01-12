import java.util.ArrayList;

public class Airport {

    private String name;
    private String airportCode;
    private ArrayList<Flight> flights;
    private ArrayList<Passenger> passengers;
    private ArrayList<Plane> hangar; //this should be 'hangar' to assign plane to hangar;

    public Airport(String name, String airportCode){
        this.name = name;
        this.airportCode = airportCode;
         passengers = new ArrayList <>();
         flights = new ArrayList <>();
         hangar = new ArrayList <>();
    }

//    TO-DO...
//    The airport should be able to:

//    create flights [method should create a flight with destination & plane]
//    assign planes from the hangar to flights [should assign a plane with flightno &
//    sell tickets for flights


}


