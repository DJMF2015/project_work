import interface_behaviours.ISell;
import music.*;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ShopTest {

    Shop shop,shop2;
    Guitar guitar;
    Trumpet trumpet;
    Saxophone saxophone;

    @Before
    public void before(){
        shop = new Shop("guitar, fully tested", 500, 800);
        shop2 = new Shop("trumpet, 1 year old", 1000, 1250);
        guitar = new Guitar("wood", "mahogany", InstrumentType.ACOUSTIC, 300 ,800 ,  8);
    }

    @Test
    public void hasDescription(){
        assertEquals("guitar, fully tested", shop.getDescription());
        assertEquals("trumpet, 1 year old", shop2.getDescription());
    }

    @Test
    public void hasOriginalPrice(){
        assertEquals(1000, shop2.getOriginalPrice());
    }

    @Test
    public void hasSellingPrice(){
        assertEquals(800, shop.getSellingPrice());
        assertEquals(1250, shop2.getSellingPrice());
    }

    @Test
    public void canAddItemToStock(){
        shop.addItemToStock(guitar);
        shop.addItemToStock(guitar);
        assertEquals(2, shop.getStockItemsCount());
    }

    @Test
    public void canRemoveItemFromStock(){
        shop.addItemToStock(guitar);
        shop.addItemToStock(guitar);
        shop.removeItemFromStock(guitar);
        assertEquals(1, shop.getStockItemsCount());
    }

    @Test
    public void hasMadeProfit(){
        shop.addItemToStock(guitar);
        shop.addItemToStock(guitar);
       assertEquals(1000, shop.grossProfitMade());
    }


}
