import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;

public class PlaneTest {

    Plane plane;
    Passenger passenger;
    PlaneType type;
    @Before
    public void before(){

        plane = new Plane(PlaneType.BOEING747, Airline.EMIRATES);//PlaneType, Airline
        passenger = new Passenger("Ivor Smith");
    }

    @Test
    public void planeHasType(){
        assertEquals(PlaneType.BOEING747, plane.getType());
    }

    @Test
    public void planeHasAirline(){
        assertEquals(Airline.EMIRATES, plane.getAirline());
    }

    @Test
    public void planeIsEmpty(){
        assertEquals(0, plane.getNoOfPassenger());
    }


    @Test
    public void boardPassengerToPlane(){
        plane.boardPassenger(passenger);
        assertEquals(1, plane.getNoOfPassenger());
    }
    @Test
    public void deplanePassenger(){
        plane.boardPassenger(passenger);
        assertEquals(1, plane.getNoOfPassenger());
        plane.deplane(passenger);
        assertEquals(0, plane.getNoOfPassenger());
    }

    @Test
    public void canSellTickets(){
        plane.boardPassenger(passenger);
        plane.boardPassenger(passenger);
        assertEquals(3, plane.sellTicket());
    }


}

