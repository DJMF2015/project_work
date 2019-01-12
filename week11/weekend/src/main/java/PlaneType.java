public enum PlaneType {
    BOEING747("Boeing787", 50), //plane type, capacity
    ROLLSROYCE("RollsRoyce", 110),
    PRATT_WHITNEY("Pratt & Whitney", 100),
    AIRBUS("Airbus", 220);



    private final String name;
    private final int capacity;

   //constructor
    PlaneType(String name, int capacity){
        this.capacity = capacity;
        this.name = name;
    }
}
