const Hero = function(name, health, favourite_food){
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;

}

Hero.prototype.greet = function()
{
  return `Hello, my name is ${this.name}`
}

Hero.prototype.eatsFood = function()
{
  if (food.name === this.favourite_food) {
    return this.health += (food.replenishment_value * 1.5)
  }
  else {
  return this.health += food.replenishment_value}
}


module.exports = Hero;
