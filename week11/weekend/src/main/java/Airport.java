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
        hangar = new ArrayList <>();
    }

    public String getAirportCode() {
        return this.airportCode;
    }

    public String getAirportName() {
        return this.name;
    }

    public int getNoOfPlanes() {
        return this.hangar.size();
    }

    public void addPlaneToHangar(Plane plane) {
        this.hangar.add(plane);
        planeTakeOff();
    }

    public void planeLeavesHangar() {
        this.hangar.remove(0);
        planeTakeOff();
    }

    public void planeTakeOff() {
        System.out.println("Planes left Hangar at :" + currentTime.format(
                DateTimeFormatter.ofPattern("HH:mm:ss"))
                + getNoOfPlanes());
    }

    public void addFlightToPlane() {
        Flight addFlight = new Flight(Airline.EASYJET, Destination.EDINBURGH, 745);
        addFlight.getAirline();
        addFlight.getFlightDestination();
        addFlight.getFlightNo();
    }



}


