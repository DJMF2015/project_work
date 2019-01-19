import music.InstrumentType;
import music.Saxophone;
import music.Trumpet;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class TrumpetTest {

    Trumpet trumpet;

    @Before
    public void before(){
        trumpet = new Trumpet("silver", "bronze", InstrumentType.BRASS,  1100,800,
                 "Mendini");
    }

    @Test
    public void hasInstrumentType(){
        assertEquals(InstrumentType.BRASS, trumpet.getInstrumentType());
    }

    @Test
    public void hasMaterialType(){
        assertEquals("silver", trumpet.getMaterial());
    }

    @Test
    public void saxophoneHasColour(){
        assertEquals("bronze", trumpet.getColour());
    }

    @Test
    public void trumpetHasMake(){
        assertEquals("Mendini", trumpet.getMake());
    }


    @Test
    public void hasSellPrice(){
        assertEquals(1100, trumpet.getSellPrice());
    }

    @Test
    public void hasOriginalPrice(){
        assertEquals(800, trumpet.getOriginalPrice());
    }

    @Test
    public void play() {
        assertEquals("i like to play my trumpet...pum..pum", trumpet.play());
    }

    @Test
    public void hasMarkUp(){
        assertEquals(300, trumpet.markup());
    }
}
