import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;

import static junit.framework.TestCase.assertEquals;

public class AirportTest {

    private String name;
    Airport airport;
    Plane plane;
    private ArrayList <Flight> flight;
    Destination destination;

    @Before
    public void before() {
        airport = new Airport("Edinburgh", "EDI");
        flight = new ArrayList <>();
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
    public void addPlaneToHangar() {
        airport.addToHangar(plane);
        airport.addToHangar(plane);
        assertEquals(2, airport.getNoOfPlanes());
    }

    @Test
    public void removePlaneFromHangar() {
        airport.addToHangar(plane);
        airport.addToHangar(plane);
        assertEquals(2, airport.getNoOfPlanes());
        airport.leaveHangar();
        assertEquals(1, airport.getNoOfPlanes());
    }

    //TO-DO
    @Test
    public void airportCanAssignFlights() {//assign flight from hanagr to flight
        airport.addFlightToPlane();
    }

//
}
