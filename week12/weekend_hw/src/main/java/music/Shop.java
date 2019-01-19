package music;

import interface_behaviours.ISell;

import java.util.ArrayList;

public class Shop {


    //NOTE: SHOPITEMS NEEDS COMPLETED FIRST AND TESTED..!

    private String description;
    private ArrayList<ISell> stock; //composition
    private int originalPrice ;
    private int sellingPrice;

    public Shop(String description, int originalPrice, int sellingPrice){
        this.description = description;
        this.originalPrice = originalPrice;
        this.sellingPrice = sellingPrice;
        stock = new ArrayList <>();
    }

    public String getDescription() {
        return description;
    }

    public int getOriginalPrice() {
        return originalPrice;
    }
    public int getSellingPrice() {
        return sellingPrice;
    }

    public ArrayList <ISell> getStock() {
        return stock;
    }


}
