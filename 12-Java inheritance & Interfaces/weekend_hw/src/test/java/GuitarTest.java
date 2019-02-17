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
        guitar = new Guitar("wood", "mahogany", InstrumentType.STRING, 100 , 450 , 8);
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
        assertEquals(InstrumentType.STRING, guitar.getFamilyType());
    }

    @Test
    public void hasNoOfStrings(){
        assertEquals(8, guitar.getNoOfStrings());
    }

    @Test
    public void hasSellPrice(){
        assertEquals(100, guitar.getSellPrice());
    }

    @Test
    public void hasOriginalPrice(){
        assertEquals(450, guitar.getOriginalPrice());
    }

    @Test
    public void play() {
        assertEquals("Twang, Twang my guitar!", guitar.play());
    }

    @Test
    public void hasMadeProfit() {
        assertEquals(350, guitar.calculateMarkUp(),1.0);
    }
}
