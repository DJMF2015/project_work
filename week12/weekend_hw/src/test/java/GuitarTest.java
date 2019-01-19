import music.Guitar;
import music.InstrumentType;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class GuitarTest {
    Guitar guitar;
    InstrumentType familyType;

    @Before
    public void before(){
        guitar = new Guitar("wood", "mahogany", familyType.STRING, 100.00, 150.00, 8);
    }


    @Test
    public void hasMaterialType(){
        assertEquals("wood", guitar.getMaterial());
    }
    @Test
    public void hasColour(){
        assertEquals("mahogany", guitar.getColour());
    }

    @Test
    public void hasFamilyType(){
        assertEquals(familyType.STRING, guitar.getFamilyType());
    }
    @Test
    public void hasNoOfStrings(){
        assertEquals(8, guitar.getNoOfStrings());
    }

    @Test
    public void hasSellPrice(){
        assertEquals(150.00, guitar.getSellPrice(), 00.001);
    }

    @Test
    public void hasOriginalPrice(){
        assertEquals(100.00, guitar.getOriginalPrice(), 00.001);
    }

    @Test
    public void play() {
        assertEquals("Twang, Twang my guitar!", guitar.play());
    }
}
