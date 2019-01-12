public class Flight {

    private int flightNo;
    private Plane plane;
    private Destination destination;


    public Flight(Plane plane, Destination destination, int flightNo){
        this.plane = plane;
        this.destination = destination;
        this.flightNo = flightNo;
    }
}

