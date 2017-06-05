require_relative 'card'

# Represents a deck of playing cards.
class Deck
  # Returns an array of all 36 playing cards.
  def self.all_cards
    cards = []
    Card.suits.each do |suit|
      Card.values.each do |value|
        cards << Card.new(suit, value)
      end
    end
    cards
  end

  def initialize(cards = Deck.all_cards)
    @cards = cards
  end

  # Returns the number of cards in the deck.
  def count
    @cards.count
  end

  def reveal_trump_suit
    # Returns the suit of the last card in the deck
    @cards.last.suit
  end

  def take_one
    raise "not enough cards" if count < 1
    @cards.pop
  end
end
