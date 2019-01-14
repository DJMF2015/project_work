import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.assertNotNull;

public class AirportTest {

    private String name;
    Airport airport;
    Plane plane;
    Flight flight;
    Destination destination;

    @Before
    public void before() {
        airport = new Airport("Edinburgh", "EDI", 10);
        flight = new Flight(Airline.EASYJET, Destination.EDINBURGH, 777);
        plane = new Plane(PlaneType.BOEING747, Airline.EMIRATES);
    }

    @Test
    public void airportHasCode() {
        assertEquals("EDI", airport.getAirportCode());
    }

    @Test
    public void airportHasName() {
        assertEquals("Edinburgh", airport.getAirportName());
    }

    @Test
    public void assignPlaneToHangar() {
        airport.addPlaneToHangar(plane);
        airport.addPlaneToHangar(plane);
        assertEquals(2, airport.getNoOfPlanes());
    }

    @Test
    public void deplaneFromHangar() {
        airport.addPlaneToHangar(plane);
        airport.addPlaneToHangar(plane);
        assertEquals(2, airport.getNoOfPlanes());
        airport.planeLeavesHangar(plane);
        assertEquals(1, airport.getNoOfPlanes());
    }

     @Test
     public void canCreateFlight(){
         airport.addPlaneToHangar(plane);
         Flight newFlight = airport.createFlight(plane, 777, destination);
         assertNotNull(newFlight);
     }

    @Test
    public void airportCanAssignFlights() {//assign flight from hanagr to flight
        airport.addFlightToPlane();
    }

}
