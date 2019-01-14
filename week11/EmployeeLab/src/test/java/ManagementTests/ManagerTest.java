package ManagementTests;

import Management.Manager;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ManagerTest {

    private Manager manager;
    @Before
    public void before(){
        manager = new Manager("Pablo", "JH65629N", 25.000, "IT");
    }

    @Test
    public void hasName(){
        assertEquals("Pablo", manager.getName());
    }
    @Test
    public void hasNI(){
        assertEquals("JH65629N", manager.getNI());
    }
    @Test
    public void hasSalary(){
        assertEquals(25.000, manager.getSalary(),0.001);
    }
    @Test
    public void hasDeptName(){
        assertEquals("IT", manager.getDeptName());
    }
}
