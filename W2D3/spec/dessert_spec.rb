require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", name: "Sam") }
  let(:pie) { Dessert.new("Pie", 2, chef)}

  describe "#initialize" do

    d = Dessert.new("Ice Cream", 1, "Bob")

    it "sets a type" do
      expect(d.type).to eq("Ice Cream")
    end

    it "sets a quantity" do
      expect(d.quantity).to eq(1)
    end

    it "starts ingredients as an empty array" do
      expect(d.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { initialize("Ice","One","Bob") }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do

    pie = Dessert.new("Pie", 2, "Sam")
    pie.ingredients << "flour"
    pie.ingredients << "sugar"

    it "adds an ingredient to the ingredients array" do
      expect(pie.add_ingredient("salt")).to eq(["flour", "sugar", "salt"])
    end

  end

  describe "#mix!" do
    pie = Dessert.new("Pie", 2, "Sam")
    pie.ingredients << "flour"
    pie.ingredients << "sugar"
    pie.ingredients << "apples"

    it "shuffles the ingredient array" do
      expect(pie.ingredients.shuffle).to_not eq(pie.ingredients.sort)
    end
  end

  describe "#eat" do
    pie = Dessert.new("Pie", 2, "Sam")


    it "subtracts an amount from the quantity" do
      expect(pie.eat(1)).to eq(1)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { pie.each(12) }.to raise_error(NoMethodError)
    end
  end

  describe "#serve" do

    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Sam the Great Baker")
      expect(pie.serve).to eq("Chef Sam the Great Baker has made 2 Pies!")
    end

  end

  describe "#make_more" do

    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(pie)
      pie.make_more
    end
  end 
end
