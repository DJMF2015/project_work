package music;

import interface_behaviours.IPlay;

public abstract class Instrument extends ShopItems implements IPlay {

    private String material;
    private String colour;
    private double sellPrice;
    private double originalPrice;
    InstrumentType familyType;

    public Instrument(String material, String colour, InstrumentType familyType, double sellPrice, double originalPrice){
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

    public double getSellPrice(){
        return sellPrice;
    }

    public double getOriginalPrice(){
        return originalPrice;
    }




}

