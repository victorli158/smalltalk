class Player
  attr_reader :name
  attr_accessor :cards, :trump_suit

  def initialize(name)
    @trump_suit = nil
    @name = name
    @cards = []
  end

  def fill_hand(deck)
    until @cards.length == 6
      break if deck.count < 1
      @cards << deck.take_one
    end
  end

  def take(new_cards)
    @cards += new_cards
  end

  # To simplify game logic, assume that the attacker will always
  # choose to attack with their lowest value card not of the trump suit.
  # If the player only has cards matching the trump suit, then choose
  # from these the card with the lowest value.
  # In real-life gameplay, this is usually the best attaking strategy,
  # as you want to save your high-value cards for defense.
  def attack
    attack_card = non_trump_cards.empty? ? trump_cards.first : non_trump_cards.first
    @cards.delete(attack_card)
  end

  # See README (Each turn #2) for instructions on how to choose defending card.
  # Return nil if no winning move is possible.
  def defend(attacking_card)
    defend_card = if attacking_card.suit == trump_suit
      lowest_card(trump_cards, attacking_card.int_val).empty? ?
      nil : lowest_card(trump_cards, attacking_card.int_val).first
    elsif attacking_card.suit != trump_suit
      if lowest_card(non_trump_cards, attacking_card.int_val).empty?
        if trump_cards
          trump_cards.first
        else
          nil
        end
      else
        lowest_card(non_trump_cards, attacking_card.int_val).first
      end
    end
    @cards.delete(defend_card) unless defend_card.nil?
  end

  # Helper method which returns the lowest card in an array card_subset
  # which is higher than the min value (if given)
  def lowest_card(card_subset, min = nil)
    cards_higher = card_subset.select { |card| card.int_val > min}
    cards_higher_sorted = cards_higher.sort_by { |card| card.int_val }
  end

  # Helper method which returns a subset of the player's cards
  # that match the trump suit. Hint: use Array#select
  def trump_cards
    all_trump_cards = @cards.select { |card| card.suit == trump_suit }
    all_trump_cards_sorted = all_trump_cards.sort_by { |card| card.int_val }
  end

  # Helper method which returns a subset of the player's cards
  # that don't match the trump suit. Hint: use Array#reject
  def non_trump_cards
    all_non_trump = @cards.reject { |card| card.suit == trump_suit }
    non_trump_sorted = all_non_trump.sort_by { |card| card.int_val }
  end

  # Called during Game#take_turn to print player's cards
  # to the command line. No need to modify this method.
  def print_cards
    str_arr = @cards.map { |card| card.to_s }
    cards_str = str_arr.join(", ")
    "#{@name}'s cards: #{cards_str}"
  end
end
