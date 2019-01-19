package music;

import interface_behaviours.IPlay;

public class Guitar extends Instrument{

    private int noOfStrings;
    private String colour;

    public Guitar(String material, String colour, InstrumentType familyType, double sellPrice, double originalPrice,
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


    public String play(){
            return "Twang, Twang my guitar!";
    }

}
