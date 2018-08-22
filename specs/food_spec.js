const assert = require('assert');
const Food = require('../food');


describe("Food", function()
{   beforeEach(function(){ food = new Food ("chocolate", 2)   });

  it('should have a name', function(){

    const actual = food.name;
    // assert
    assert.strictEqual(actual, 'chocolate');
  })

  it('should have a replenishment value', function(){

    const actual = food.replenishment_value;
    // assert
    assert.strictEqual(actual, 2);
  })

})
