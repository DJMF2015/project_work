public class Flight {

    private int flightNo;
    private Airline airline;
    private Destination destination;


    public Flight(Airline airline, Destination destination, int flightNo){
        this.airline = airline;
        this.destination = destination;
        this.flightNo = flightNo;
    }

    public Destination getFlightDestination(){
        return this.destination;
    }
    public int getFlightNo(){
        return this.flightNo;
    }
}

