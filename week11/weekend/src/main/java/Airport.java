import java.util.ArrayList;

public class Airport {

    private String name;
    private String airportCode;
    private ArrayList <Plane> hangar;
    private ArrayList<Flight> flights;
    private ArrayList<Passenger> passengers;
    private ArrayList<Plane> plane; //this should be 'hangar' to assign plane to hangar;

    public Airport(String name, String airportCode){
        this.name = name;
        this.airportCode = airportCode;
        passengers = new ArrayList <>();
        flights = new ArrayList <>();
        plane = new ArrayList <>();
        hangar = new ArrayList <Plane>();
    }

    public String getAirportCode() {
        return this.airportCode;
    }

    public String getAirportName() {
        return this.name;
    }

    public int getNoOfPlanes(){
        return this.hangar.size();
    }

    public void addToHangar(Plane plane){
        this.hangar.add(plane);
        System.out.println("Planes inside Hangar :"+ getNoOfPlanes());
    }
    public void leaveHangar(){
        this.hangar.remove(0);
        System.out.println("Planes left inside Hangar :"+ getNoOfPlanes());
    }
    //TO-DO
    public void createFlight(Plane plane, Destination destination){

    }

    public void sellTicket(){

    }



}


