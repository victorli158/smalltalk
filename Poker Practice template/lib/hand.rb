require_relative './poker_hands'

class Hand
  include PokerHands

  attr_reader :cards

  def initialize(cards)
    raise "must have five cards" if cards.length != 5
    @cards = cards.sort
  end

  def self.winner(hands)
    hands.sort.last
  end

  def trade_cards(old_cards, new_cards)
    raise "must have five cards" if old_cards.length != new_cards.length
    raise "cannot discard unowned card" if old_cards.any? { |card| !@cards.include?(card) }

    old_cards.each do |card|
      @cards.delete(card)
    end

    new_cards.each do |card|
      @cards << card
    end
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
