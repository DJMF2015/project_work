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
        System.out.println("Stock count:" + stock.size());
        return stock.size();
    }

//    public boolean checkIsSufficientCash(Guitar guitar){
//        if (ISell.shopCash >= guitar.originalPrice){
//
//        }
//        return true;
//    }


    public void addItemToStock(ISell guitar) {
       // checkIsSufficientCash(guitar);
        stock.add(guitar);
    }

    public void removeItemFromStock(ISell guitar){
          stock.remove(guitar);
    }


    //Needs refactored ...git
    //profit margin = gross / total revenue
    public int grossProfitMade(){
       for (ISell items : stock) { // 2
           total += items.calculateMarkUp(); //700
           System.out.println("total potential profit made: " );
       }
       return total; //140
    }
}
