import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class PassengerTest {


    Passenger passenger;


    @Before
    public void before() {
        passenger = new Passenger("Harry");
    }

    @Test
    public void passengerHasName() {
        assertEquals("Harry", passenger.getName());
    }
}