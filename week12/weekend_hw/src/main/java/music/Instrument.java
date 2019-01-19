package music;

import interface_behaviours.IPlay;

public abstract class Instrument extends ShopItems implements IPlay {

    private String material;
    private String colour;
    protected int sellPrice;
    protected int originalPrice;
    InstrumentType familyType;

    public Instrument(String material, String colour, InstrumentType familyType, int sellPrice, int originalPrice){
        this.material = material;
        this.colour = colour;
        this.familyType = familyType;
        this.sellPrice = sellPrice;
        this.originalPrice = originalPrice;
    }

    public String getMaterial() {
        return material;
    }

    public String getColour() {
        return colour;
    }

    public InstrumentType getFamilyType() {
         return familyType;
    }

    public int getSellPrice(){
        return sellPrice;
    }

    public int getOriginalPrice(){
        return originalPrice;
    }

    public abstract int calculateMarkUp();


}

