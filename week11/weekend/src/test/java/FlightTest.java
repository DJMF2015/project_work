import junit.framework.TestCase;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FlightTest {


    private Flight flight;


      @Before
    public void before(){
          flight = new Flight(Airline.BRITISHAIRWAYS, Destination.CHENNAI, 555);
      }

      @Test
    public void flightHasDestination() {
          assertEquals(Destination.CHENNAI, flight.getFlightDestination());

      }
    @Test
    public void flightHasAirline() {
        assertEquals(Airline.BRITISHAIRWAYS, flight.getAirline());

    }
      @Test
    public void planeHasFightNo(){
          assertEquals(555, flight.getFlightNo());
      }
    //TO-DO
    @Test
    public void airportCanCreateFlights(){
        //should add a destination and a plane object
//add a destination
        flightHasDestination();
 //add a airline
        flightHasAirline();
        planeHasFightNo();

    }

}

