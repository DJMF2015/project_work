import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;

public class Airport {

    private String name;
    private String airportCode;
    Flight flight;
    private ArrayList <Plane> hangar;

    LocalDateTime currentTime = LocalDateTime.now();

    public Airport(String name, String airportCode) {
        this.name = name;
        this.airportCode = airportCode;
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

    public void addToHangar(Plane plane) {
        this.hangar.add(plane);
        planeLeavesHangar();
    }

    public void leaveHangar() {
        this.hangar.remove(0);
        planeLeavesHangar();
    }

    public void planeLeavesHangar() {
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
    //TO-DO
    public void sellTicket() {

    }


}


