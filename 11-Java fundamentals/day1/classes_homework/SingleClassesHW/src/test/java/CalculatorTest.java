import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {

     Calculator calculator;
    @Before
    public void before(){
        calculator = new Calculator(8,2);
    }

    @Test
    public void canAdd() {
      assertEquals(10, calculator.add());
    }
    @Test
    public void canSubtract(){
        assertEquals(6, calculator.subtract());
    }
    @Test
    public void canDivide(){
        assertEquals(4, calculator.divide());
    }
    @Test
    public void canMultiply(){
        assertEquals(16, calculator.multiply());
    }
}
