public class Printer {
    private int sheets;
    private int toner;

    public Printer(int sheets, int toner) {
        this.sheets = sheets;
        this.toner = toner;
    }

    public int getSheets() {
        return this.sheets;
    }

    public void checkPrint(int pages, int copies) {
        int noOfPagesLeft = pages * copies;
        if (noOfPagesLeft < sheets) {
            this.sheets -= noOfPagesLeft;
            this.toner -= pages;
        }

    }

    public int refillPrinter() {
        return this.sheets = 100;
    }

    public int getToner() {
        return toner;
    }
}