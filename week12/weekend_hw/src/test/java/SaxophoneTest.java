import music.InstrumentType;
import music.Saxophone;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class SaxophoneTest {

    Saxophone saxophone;

    @Before
    public void before(){
        saxophone = new Saxophone("golden", "clear", InstrumentType.WOODWIND,  660,520,
                15, "Yamaha");
    }

     @Test
    public void hasInstrumentType(){
        assertEquals(InstrumentType.WOODWIND, saxophone.getInstrumentType());
    }

    @Test
    public void hasMaterialType(){
        assertEquals("golden", saxophone.getMaterial());
    }

    @Test
    public void saxophoneHasColour(){
        assertEquals("clear", saxophone.getColour());
    }

    @Test
    public void saxophoneHasMake(){
        assertEquals("Yamaha", saxophone.getMake());
    }

    @Test
    public void saxophoneHasValves(){
        assertEquals(15,  saxophone.getNoOfvalves());
    }

    @Test
    public void hasSellPrice(){
        assertEquals(660, saxophone.getSellPrice());
    }

    @Test
    public void hasOriginalPrice(){
        assertEquals(520, saxophone.getOriginalPrice());
    }

    @Test
    public void play() {
        assertEquals("i like to play my saxophone....chuh..chuh", saxophone.play());
    }

    @Test
    public void hasMadeProfit(){
        assertEquals(140, saxophone.markup());
    }
}
