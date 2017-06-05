require_relative './card'
require_relative './hand'

class Deck
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
    @deck = cards
  end

  def deal_hand
    Hand.new(take(5))
  end

  def count
    @deck.length
  end

  def take(n)
    raise "not enough cards" if n > count
    cards = []
    n.times { cards << @deck.shift }
    cards
  end

  def return(cards)
    @deck += cards
  end

  def shuffle
    @deck.shuffle!
  end
end
