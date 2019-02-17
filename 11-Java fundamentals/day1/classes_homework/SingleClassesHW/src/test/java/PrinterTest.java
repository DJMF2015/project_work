
import org.junit.Before;
import org.junit.Test;

import static junit.framework.TestCase.assertEquals;



public class PrinterTest {
    Printer printer;

    @Before
    public void before(){
        printer = new Printer(100, 150);
    }

    @Test
    public void getSheets() {
        assertEquals(100, printer.getSheets());
    }

    @Test
    public void canRefillPaper() {
        assertEquals(100, printer.refillPrinter());
    }

    @Test
    public void printOutCopies() {

        //check sufficient paper left to print;
        printer.checkPrint(10, 3);
        printer.refillPrinter();
        assertEquals(100, printer.getSheets());
    }
    @Test
    public void tonerGoesDown(){
        printer.checkPrint(10, 3);
        assertEquals(140, printer.getToner());
    }
}
