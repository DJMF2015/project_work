import interface_behaviours.ISell;
import music.*;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ShopTest {

    Shop shop;
    Guitar guitar;
    Trumpet trumpet;
    Saxophone saxophone;

    @Before
    public void before(){
        shop = new Shop(1500,"guitar, fully tested");
        guitar = new Guitar("wood", "mahogany", InstrumentType.ACOUSTIC, 300 ,800 ,  8);
        saxophone = new Saxophone("golden", "clear", InstrumentType.WOODWIND,  660,520,
                15, "Yamaha");
        trumpet = new Trumpet("silver", "bronze", InstrumentType.BRASS,  1100,800,
                "Mendini");
    }

    @Test
    public void hasDescription(){
        assertEquals("guitar, fully tested", shop.getDescription());
    }

//    @Test
//    public void hasOriginalPrice(){
//        assertEquals(500, shop.getOriginalPrice());
//    }
//
//    @Test
//    public void hasSellingPrice(){
//        assertEquals(800, shop.getSellingPrice());
//
//    }

     @Test
     public void shopHasCash(){
        assertEquals(1500, shop.getCash());
     }

    @Test
    public void canAddItemToStock(){
        shop.addItemToStock(guitar);
        shop.addItemToStock(guitar);
        shop.addItemToStock(guitar);
        assertEquals(3, shop.getStockItemsCount());
    }

    @Test
    public void canRemoveItemFromStock(){
        shop.addItemToStock(guitar);
        shop.addItemToStock(guitar);
        shop.addItemToStock(guitar);
        shop.removeItemFromStock(guitar);
        assertEquals(2, shop.getStockItemsCount());
    }

    @Test
    public void hasMadeProfit(){
        shop.addItemToStock(guitar);  shop.addItemToStock(guitar);
        assertEquals(1400, shop.grossProfitMade());
    }


}
