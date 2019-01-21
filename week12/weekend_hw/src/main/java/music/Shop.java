package music;

import interface_behaviours.ISell;

import java.util.ArrayList;

public class Shop {
    Guitar guitar;
    private String description;
    private ArrayList <ISell> stock; //composition
    private int sellingPrice;
    private int total = 0;
    private int cash;


    public Shop(int cash, String description) {
        this.description = description;
        this.sellingPrice = sellingPrice;
        this.cash = cash;
        stock = new ArrayList <>();
    }

    public String getDescription() {
        return description;
    }

    public ArrayList <ISell> getStock() {
        return stock;
    }

    public int getStockItemsCount() {
        System.out.println("Stock count:" + stock.size());
        return stock.size();
    }

    public int getCash() {
        return cash;
    }


    public void addItemToStock(Instrument instrument) {
       if (instrument.getOriginalPrice()  <getCash()){
           stock.add(instrument);
            cash -= instrument.getSellPrice();
       }

    }

    public void removeItemFromStock(Instrument guitar){
          stock.remove(guitar);
    }


    //Needs refactored ...git
    //profit margin = gross / total revenue
    public int grossProfitMade(){
        total = 0;
       for (ISell items : stock) { // 2
           total += items.calculateMarkUp() ; //700
           System.out.println("total potential profit made: " );
       }
       return total; //140
    }
}
