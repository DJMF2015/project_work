import java.util.ArrayList;

public class Flight {

    private int flightNo;
    private Airline airline;
    private Destination destination;
    private ArrayList <Flight> flights;

    public Flight(Airline airline, Destination destination, int flightNo) {
        this.airline = airline;
        this.destination = destination;
        this.flightNo = flightNo;
//        flights = new ArrayList <>();
    }

    public Destination getFlightDestination() {
        return this.destination;
    }

    public int getFlightNo() {
        return this.flightNo;
    }

    public Airline getAirline() {
        return this.airline;
    }

    public void addDestination(Flight destination) {
        flights.add(destination);
    }

    public void addAirline(Flight airline) {
        flights.add(airline);
    }


}

