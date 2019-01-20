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

    public int calculateMarkUp(){
        int markup = sellPrice - originalPrice/originalPrice * 100;
        System.out.println("markup" + markup);
        return markup;
    }


    public String play(){
        return "Twang, Twang my guitar!";
    }



}
