public class Sheep extends FarmAnimal {

    public Sheep(){

        this.species = "sheep";

    }

    @Override
    public String makeANoise(){
        return "baa";
    }

    //    NOTE: methods must be in correct order - the same order as abstract parent class!
    @Override
    public String introduceYourself(){
        return  super.introduceYourself() + ", " + makeANoise();
    }


}
