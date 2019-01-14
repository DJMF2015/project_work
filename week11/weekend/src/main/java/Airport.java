import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

public class Airport {

    private String name;
    private String airportCode;
    Passenger passenger;
    private ArrayList <Flight> flight;
    private ArrayList <Plane> hangar;
    private int tickets;
    LocalDateTime currentTime = LocalDateTime.now();

    public Airport(String name, String airportCode, int tickets) {
        this.name = name;
        this.airportCode = airportCode;
        this.tickets = tickets;
        this.passenger = passenger;
        this.hangar = new ArrayList <Plane>();
    }

    public String getAirportCode() {
        return this.airportCode;
    }

    public String getAirportName() {
        return this.name;
    }

    //return no of planes inside hangar
    public int getNoOfPlanes() {
        return this.hangar.size();
    }

    //add a plane object to a hangar
    public void addPlaneToHangar(Plane plane) {
        this.hangar.add(plane);
        planeTakeOff();
    }


    //remove a pane from hangar before takes off
    public void planeLeavesHangar(Plane plane) {
        this.hangar.remove(plane);

    }

    //time and no of planes left
    public void planeTakeOff() {
        System.out.println("Planes left Hangar at :" + currentTime.format(
                DateTimeFormatter.ofPattern("HH:mm:ss"))
                + getNoOfPlanes());
    }
        //assign a new Flight object to a plane
    public void addFlightToPlane() {
        Flight addFlight = new Flight(Airline.EASYJET, Destination.EDINBURGH, 745);
        addFlight.getAirline();
        addFlight.getFlightDestination();
        addFlight.getFlightNo();
    }


    public Flight createFlight(Plane plane, int flightNo, Destination destination) {
        planeLeavesHangar(plane);
        Flight newFlight = new Flight(plane.getAirline(), destination,  flightNo);
        return newFlight;
    }
}


