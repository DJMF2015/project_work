public class WaterBottle {

    private int volume;

    public WaterBottle(){
        this.volume  = 100;
    }

    public int getVolume(){
        return this.volume;
    }

    public int getDrink(){
      return this.volume -= 10;
    }
    public int canEmpty() {
        return this.volume = 0;
    }

   public int fillBottle(){
        return this.volume = 100;
   }
}
