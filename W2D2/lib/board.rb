class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new }
    place_stones

    # @cups = @cups.map {|a| a = stones}
    # @cups[6] = ""
    # @cups[13] = ""
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    @cups.each_with_index do |cup,i|
      next if i == 6 || i == 13
      4.times do
        cup << :stone
      end
    end
  end

  def valid_move?(start_pos)
    raise "Invalid starting cup" if @cups[start_pos] == [] || start_pos > @cups.length
  end

  def make_move(start_pos, current_player_name)
    stones = @cups[start_pos]
    @cups[start_pos] = []

    cups_i = start_pos

    until stones.empty?
      cups_i += 1
      cups_i = 0 if cups_i > 13
      if cups_i == 6
        @cups[6] << stones.pop if current_player_name == @name1
      elsif cups_i == 13
        @cups[13] << stones.pop if current_player_name == @name2
      else
        @cups[cups_i] << stones.pop
      end
    end
    render
    next_turn(cups_i)
  end


  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    if ending_cup_idx == 6|| ending_cup_idx == 13
      :prompt
    elsif @cups[ending_cup_idx].count == 1
      :switch
    else
    ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    @cups.take(6).all? {|cup| cup.empty? } ||
    @cups[7..12].all? {|cup| cup.empty? }
  end

  def winner
    p1_score = @cups[6].count
    p2_score = @cups[13].count

    if p1_score == p2_score
      :draw
    else
      p1_score > p2_score ? @name1 : @name2
    end
  end
end
