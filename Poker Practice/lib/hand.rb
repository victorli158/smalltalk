require_relative './poker_hands'

class Hand
  include PokerHands

  attr_reader :cards

  def initialize(cards)
    @cards = cards.sort
    raise "must have five cards"if @cards.length != 5
  end

  def self.winner(hands)
    hands.sort.last
  end

  def trade_cards(old_cards, new_cards)
    raise "must have five cards" unless old_cards.length == new_cards.length
    raise "cannot discard unowned card" unless (@cards | old_cards) == @cards
    @cards = @cards - old_cards + new_cards
  end

  def to_s
    cards.join(' ')
  end

  private
  def sort!
    @cards.sort!
  end

  def take_cards(cards)
    @cards.push(*cards)
  end

  def discard_cards(old_cards)
    old_cards.each { |card| cards.delete(card) }
  end

  def has_cards?(old_cards)
    old_cards.all? { |card| cards.include?(card) }
  end
end
