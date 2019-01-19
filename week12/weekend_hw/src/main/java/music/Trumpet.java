package music;

public class Trumpet extends Instrument{


    private String make;
    public Trumpet(String material, String colour, InstrumentType familyType, int sellPrice, int originalPrice,
                     String make) {
        super(material, colour, familyType,  sellPrice, originalPrice);
        this.make = make;

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
        return "i like to play my trumpet...pum..pum";
    }
}
