import java.util.ArrayList;

public enum PlaneType {
    BOEING747("Boeing787", 5), //plane type, capacity
    ROLLSROYCE("RollsRoyce", 110),
    PRATT_WHITNEY("Pratt & Whitney", 100),
    AIRBUS("Airbus", 220);


    private final String name;
    private final int capacity;
    private ArrayList<Passenger> passenger;
   //constructor
    PlaneType(String name, int capacity){
        this.capacity = capacity;
        this.name = name;
        this.passenger = new ArrayList <>();
    }

//    public boolean checkPlaneCapacity(Passenger passenger){
//        Plane plane = new Plane(Airline.EASYJET, 5);
//        for (int i = 0 ;i <= 5; i++){
//            (passenger);
//
//            System.out.println(this.passengers.size());
//        }
//    }
}
