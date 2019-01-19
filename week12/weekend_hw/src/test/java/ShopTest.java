import interface_behaviours.ISell;
import music.Shop;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ShopTest {

    Shop shop,shop2;
    ISell stock;

    @Before
    public void before(){
        shop = new Shop("saxophone, fully tested", 500, 800);
        shop2 = new Shop("trumpet, 1 year old", 1000, 1250);
    }

    @Test
    public void hasDescription(){
        assertEquals("saxophone, fully tested", shop.getDescription());
        assertEquals("trumpet, 1 year old", shop2.getDescription());
    }

    @Test
    public void hasOriginalPrice(){
        assertEquals(500, shop.getOriginalPrice());
        assertEquals(1000, shop2.getOriginalPrice());
    }

    @Test
    public void hasSellingPrice(){
        assertEquals(800, shop.getSellingPrice());
        assertEquals(1250, shop2.getSellingPrice());
    }

    @Test
    public void canAddItemToStock(){

    }

    @Test
    public void canRemoveItemFromStock(){

    }

}
