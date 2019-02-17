package music;

import interface_behaviours.ISell;


public abstract class ShopItems implements ISell {

    Shop shop;
    private String type;
    private int sellPrice;
    private int originalPrice;

    public ShopItems(String type, int sellPrice, int originalPrice){
        this.type = type;
        this.originalPrice = originalPrice;
        this.sellPrice = sellPrice;
    }

    public String getType() {
        return type;
    }

    public int getSellPrice() {
        return sellPrice;
    }

    public int getOriginalPrice() {
        return originalPrice;
    }


}
