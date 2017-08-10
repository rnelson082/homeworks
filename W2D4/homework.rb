

def longest_fish(fish)
  longest = fish.first
    fish.each do |el|
      if longest.length < el.length
        longest = el
      end
    end
    longest
  end
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new { |x, y| x <=> y }

    return self if count <= 1

    midpoint = count / 2
    sorted_left = self.take(midpoint).merge_sort(&prc)
    sorted_right = self.drop(midpoint).merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)
  end

  private
  def self.merge(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end

    merged.concat(left)
    merged.concat(right)

    merged
  end
end

def longest_fish_Onlogn(fishes)
  prc = Proc.new { |a, b| a.length <=> b.length }
  fishes.merge_sort(&prc).first
end


def longest_fish_On2(fish)
longest = fish.first
  fish.each do |el|
    if longest.length < el.length
      longest = el
    end
  end
  longest
end

fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']


def slow_dance(dir, tiles)
  (0..tiles.length-1).each do |i|
    return i if tiles[i] == dir
  end
end

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
}

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end


end
