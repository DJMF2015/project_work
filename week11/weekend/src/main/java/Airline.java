
public enum Airline {
    EASYJET("EasyJet"),
    NORWEGIAN("Norwegian"),
    LOGANAIR("RyanAir"),
    EMIRATES("Emirates"),
    BRITISHAIRWAYS("BA");


    private String name;

    Airline(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
