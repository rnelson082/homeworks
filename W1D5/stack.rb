class Stack
    def initialize
      @ivar = []
      # create ivar to store stack here!
    end

    def add(el)
      @ivar << el
      # adds an element to the stack
    end

    def remove
      @ivar.pop
      # removes one element from the stack
    end

    def show
      return @ivar
      # return a copy of the stack
    end
  end

class Queue
    def initialize
      @ivar = []
    end

    def enqueue(el)
      @ivar.unshift(el)
    end

    def dequeue
      @ivar.pop
    end

    def show
      return @ivar
    end
end


class Map
  def initialize
    @ivar = []
  end

  def assign(key,value)
    if @ivar.none? {|a| a[0] == key}
       @ivar.unshift([key,value])
    else
      res = @ivar.to_h
      res[key] = value
      @ivar = res.to_a
    end
    @ivar
  end

  def lookup(key)
    @ivar.select do |a|
      a if a[0] == key
    end
  end

  def remove(key)
    @ivar.reject! {|a| a[0] == key }
  end

  def show
    return @ivar
  end
end
