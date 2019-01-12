import java.util.ArrayList;

public enum Plane {
    BOEING747("Boeing787", 10),
    ROLLSROYCE("RollsRoyce", 20),
    PRATT_WHITNEY("Pratt & Whitney", 5),
    GE("General Electric", 10);


    private final String name;
    private final int capacity;
    private ArrayList<Passenger> passenger;

    Plane(String name, int capacity){
        this.name = name;
        this.capacity = capacity;
        this.passenger = new ArrayList <>();
    }

}
