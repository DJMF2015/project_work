public class Calculator {

    private int numb1;
    private int numb2;


    public Calculator(int numb1, int numb2) {
        this.numb1 = numb1;
        this.numb2 = numb2;
    }

    public int add() {
        return this.numb1 + this.numb2;
    }

    public int subtract() {
        return this.numb1 - this.numb2;
    }

    public int divide() {
        return this.numb1 / this.numb2;
    }

    public int multiply() {
        return this.numb1 * this.numb2;
    }

}
