package music;

public class Guitar extends Instrument{

    private int noOfStrings;
    private String colour;

    public Guitar(String material, String colour, InstrumentType familyType, int sellPrice, int originalPrice,
                  int noOfStrings){
        super( material, colour, familyType, originalPrice, sellPrice);
        this.noOfStrings = noOfStrings;
        this.colour = colour;

    }


    public int getNoOfStrings() {
        return noOfStrings;
    }


    public String getColour() {
        return colour;
    }

    public int markup(){
        int markup = sellPrice - originalPrice;
        return markup;
    }

    public int calculateMarkUp() {
        return markup();

    }
    public String play(){
        return "Twang, Twang my guitar!";
    }



}
