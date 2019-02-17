package music;

public enum InstrumentType {
    WOODWIND("woodwind"),
    BRASS("brass"),
    PERCUSSION("percussion"),
    DRUMS("drums"),
    ACOUSTIC("acoustic"),
    WIND("wind"),
    STRING("string");

    private final String familyType;

    InstrumentType(String familyType) {
        this.familyType = familyType;
    }

}
