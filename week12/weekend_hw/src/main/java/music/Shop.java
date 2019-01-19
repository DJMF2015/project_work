package music;

import interface_behaviours.ISell;

import java.util.ArrayList;

public class Shop {

    private String description;
    private ArrayList<ISell> stock; //composition
    private int originalPrice ;
    private int sellingPrice;
    static int total = 0;

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

    public int getStockItemsCount() {
        System.out.println(stock.size());
        return stock.size();
    }

    public void addItemToStock(ISell guitar) {
        stock.add(guitar);
    }

    public void removeItemFromStock(ISell guitar){
          stock.remove(guitar);
    }

    //profit margin = gross / total revenue
    public int grossProfitMade(){
       for (ISell items : stock) {
           total += items.calculateMarkUp();
       }
       return total;
    }
}
