import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class PassengerTest {


    Passenger passenger;
    Destination destination;

    @Before
    public void before() {
        passenger = new Passenger("Harry");
    }

    @Test
    public void passengerHasName() {
        assertEquals("Harry", passenger.getName());
    }

    @Test
    public void getTicket() {
        assertEquals(1, passenger.checkTicket());
    }


    @Test
    public void canSellTickets() {
        passenger.purchaseTicket(Destination.AUCKLAND);
       // assertEquals(Destination.AUCKLAND, passenger.checkTicket());

    }
}