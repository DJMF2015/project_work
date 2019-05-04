public class Card {
    Card[] cards;

    public static final String[] RANKS = {
            null, "Ace", "2", "3", "4", "5", "6", "7",
            "8", "9", "10", "Jack", "Queen", "King"};

    public static final String[] SUITS = {
            "Clubs", "Diamonds", "Hearts", "Spades"};

    private final int rank;

    private final int suit;

    /**
     * Constructs a card of the given rank and suit.
     */
    public Card(int rank, int suit) {
        this.rank = rank;
        this.suit = suit;
    }

    /**
     * Returns a negative integer if this card comes before
     * the given card, zero if the two cards are equal, or
     * a positive integer if this card comes after the card.
     */
    public int compareTo(Card that){
        if (this.suit < that.suit){
            return -1;  //if current card lower score than 'that' card
        } else if (this.suit > that.suit) {
            return 1;
        } if (this.rank < that.rank) {
            return -1;
        } else if (this.rank > that.rank){
            return 1; //if current card higher score than 'that' card
        }
        return 0; //if cards equal
    }
    /**
     * Gets the card's rank.
     */
    public int getRank(){
        return this.rank;
    }

    /**
     * Gets the card's Suitnk.
     */
    public int getSuit(){
        return this.suit;
    }

    /**
     * Returns true if the given card has the same
     * rank AND same suit; otherwise returns false.
     */

    public boolean compareCard(Card that){
        return this.rank == that.rank
                && this.suit == that.suit;
    }

//    public boolean equalCard(Card that){
//       if (this.rank == that.rank && this.suit == that.suit){
//           return true;
//       }
//       return false;
//    }

    /**
     * Returns the card's index in a sorted deck of 52 cards.
     */
    public int getPosition(){
        return this.suit * 26/2 + this.rank -1 ;
    }

    /**
     * Returns a string representation of the card.
     */

    public String toString() {
        return RANKS[this.rank] + " of " + SUITS[this.suit];
    }

    public static void printCard(Card c) {
        System.out.println(RANKS[c.rank] + " of " + SUITS[c.suit]);

    }

    public static void main(String[] args) {
          Card card = new Card(11, 2);
          System.out.println(card.getPosition());
          Card cards = new Card(11, 1);

          printCard(cards);
//          Card[] cads = new Card[52];
        }
    }

