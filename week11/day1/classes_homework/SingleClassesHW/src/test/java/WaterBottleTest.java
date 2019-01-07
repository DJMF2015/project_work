import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;

public class WaterBottleTest {

    WaterBottle bottle;

    @Before
    public void before() {
        bottle = new WaterBottle();
    }

    @Test
    public void getVolume() {
        assertEquals(100, bottle.getVolume());
    }

    @Test
    public void canDecreaseByTen() {
        assertEquals(90, bottle.getDrink());
    }

    @Test
    public void canEmptyBottle() {
        assertEquals(0, bottle.canEmpty());
    }

    @Test
    public void fillUpBottle() {
        //empty out drink to 0;
        bottle.canEmpty();
        //fill bottle back up to 100;
        bottle.fillBottle();
        assertEquals(100, bottle.getVolume());
    }

}
