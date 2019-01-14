### Task (Optional)
Create your own inheritance chain for modelling various types of farm animals. Use Class diagrams and TDD to test all classes apart of the abstract ones.

#### Task: You will create 3 classes: FarmAnimal, Sheep and Horse. Animals will make noises and be able to introduce themselves.

your base class should be abstract and called FarmAnimal.

##### FarmAnimal should have the following:

a species,
a getter for the species
a introduceYourself() method which returns the same String like 'Hi, I am a cow'.
an abstract method called makeANoise which returns a String. This method is abstract, because there is no 'default' sound that an animal makes.
create a subclass of FarmAnimal: Sheep.

##### Sheep should also have

in constructor, make species 'sheep'
an implementation of the makeANoise which returns an appropriate String (eg. baa)
override of introduceYourself returning 'Hi, I am a sheep, baa baa'. Note that species and noise should come from variable.
create another subclass of FarmAnimal called Horse.

##### Horse should have the following:

in constructor, make species 'horse'
a breed e.g. pony
a getter for the breed
an implementation of the makeANoise which returns an appropriate String (eg. neigh)
override of introduceYourself returning 'Hi, I am a horse from pony family, neigh neigh'. Note that species, noise and breed should come from variable.
