import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class HorseTest {
    Horse horse;

    @Before
    public void before() {
        horse = new Horse();
    }

    @Test
    public void canMakeNoise() {
        assertEquals( "neighhh!", horse.makeANoise());
    }

    @Test
    public void canSingTheSong() {
        assertEquals("Hi, I am a horse, neighhh!", horse.introduceYourself());
    }

}