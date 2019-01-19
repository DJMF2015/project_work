package music;

public class Saxophone extends Instrument {

    private int noofvalves;
    private String make;

    public Saxophone(String material, String colour, InstrumentType familyType, int sellPrice, int originalPrice,
                     int noofvalves, String make) {
        super(material, colour, familyType,  sellPrice, originalPrice);
        this.make = make;
        this.noofvalves = noofvalves;
    }

    public int getNoOfvalves() {
        return noofvalves;
    }


    public InstrumentType getInstrumentType(){
         return familyType;
    }

    public String getMake() {
        return make;
    }

    public int markup() {
        int markup = sellPrice - originalPrice;
        return markup;
    }

    public int calculateMarkUp() {
        return markup();

    }

    public String play() {
        return "i like to play my saxophone....chuh..chuh";
    }


}

