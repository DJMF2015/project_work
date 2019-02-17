public class Horse extends FarmAnimal {

    String breed;
    public Horse(){
        this.breed = "pony";
        this.species = "horse";
    }

    public String getBreed(){
        return breed;
    }

    public String makeANoise(){
        return  "neighhh!";
    }

    @Override
    public String introduceYourself(){
        return super.introduceYourself() + ", " + makeANoise();//
    }
}
