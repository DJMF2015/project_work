import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PlaneTest {

    Plane plane;
    Passenger passenger;


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
    public void planeTakesPassengers(){
        assertEquals(0, plane.getNoOfPassenger());
    }


    @Test
    public void addPassengerToPlane(){
        plane.boardPassenger(passenger);
        assertEquals(1, plane.getNoOfPassenger());
    }
    @Test
    public void removePassengerToPlane(){
        plane.boardPassenger(passenger);
        assertEquals(1, plane.getNoOfPassenger());
        plane.deplane(passenger);
        assertEquals(0, plane.getNoOfPassenger());
    }

    }

