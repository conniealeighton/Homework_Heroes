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


it('should be able to replenish heath', function(){
  actual = hero.eatsFood();
  assert.strictEqual(actual, 13);
})


})
