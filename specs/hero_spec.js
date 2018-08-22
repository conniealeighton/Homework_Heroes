const assert = require('assert');
const Hero = require('../hero');
const Food = require('../food');

describe("Hero", function()
{   beforeEach(function(){ hero = new Hero ("Connie", 10, "chocolate")   })
;

it('should have a name', function(){

    const actual = hero.name;
    // assert
    assert.strictEqual(actual, 'Connie');
  })

it('should have a health', function(){
  const actual = hero.health;
  assert.equal(actual, 10)
})

it('should have a favourite food', function(){
  const actual = hero.favourite_food;
  assert.strictEqual(actual, "chocolate")
})



// it('favourite food replenish heath', function(){
//
//   const food = new Food ("orange", 5)
//   hero.eatsFood();
//   actual = hero.health;
//   assert.strictEqual(actual, 15);
// })
//
//
// it('favourite food replenish heath 1.5*', function(){
//
//   const food = new Food ("chocolate", 4)
//   hero.eatsFood();
//   actual = hero.health;
//   assert.strictEqual(actual, 16);
// })



})
