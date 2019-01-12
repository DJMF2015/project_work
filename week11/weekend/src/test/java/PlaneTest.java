import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class PlaneTest {

    Plane plane;
    private Passenger passenger;
    PlaneType planeType;

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

}
