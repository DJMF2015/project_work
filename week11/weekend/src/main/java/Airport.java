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

//    The airport should have:
//    a collection of hangars (to store the planes)
//    an airport code (e.g. GLA)

//    The airport should be able to:
//
//    create flights
//    assign planes from the hangar to flights
//    sell tickets for flights


}


