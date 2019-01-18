# Polymorphism & Composition Homework - Quiz

# Polymorphism

##### 1. What does the ___word___ 'polymorphism' mean?
It means 'many'. In CS an object can take on 'many forms';

##### 2. What does it mean when we apply polymorphism to OO design? Give a simple Java example.
In OOP this means that  objects  can represent different actions in a single way. To achieve this they must be of the same 'type'. This means having one interface with many implementations. An example would be an Arraylist in two or more subclasses that accept any action as long as the arraylist object is of the same type as its interface it is implementing. This enables multiple classes to treat their objects in a common manner but with different actions being performed in operations. This means the AL can accept any object.

#####  3. What can we use to implement polymorphism in Java?
Interfaces via 'implements'; inheritance through sublcasses of its superclass - abstract or otherwise. Overloading performed statically at compile time or overriding at runtime - objects with same methods.

##### 4. How many 'forms' can an object take when using polymorphism?
as many as it wants.

##### 5. Give an example of when you could use polymorphism.
When using an interface that is implented via multiple subclasses each with its own Arraylist objects. Another class through composition can then take in the same 'type' as the interface that will be implemented. to represent these objects as a 'single' arraylist that can perform different actions in an method appropriae to the particular object. eg) printer, speaker, desktop...


# Composition

##### 6. What do we mean by 'composition' in reference to object-oriented programming?
Compositon is a strong form of aggregation that indicates we the 'parts' have no seperate conceptual existence from the whole. If 'A' is destroyed so are the reference and parts to 'B'.

##### 7. When would you use composition? Provide a simple example in Java.
You would use it when you many subclasses inheriting from a parent class with a similiar object . If you are looking to reuse code and the relationship between two or more classes is a HAS-A relationship you should favour 'composition over inheritance'.

##### 8. What is/are the advantage(s) of using composition?
It enables us to use behaviours of  other classes that can change at runtime. It allows us to maintain visibility of the object to client classes and reuse only what it is we require.

e.g.) Board - square.It would be unusual if an public Board operation received or returned a Square object. The Board must create a Square in its constructor. So composition is used .

##### 9. What happens to the behaviours when the object composed of them is destroyed?
The behaviours are destroyed.
