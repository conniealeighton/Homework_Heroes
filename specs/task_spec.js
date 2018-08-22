const assert = require('assert');
const Task = require('../task');


describe("Task", function()
{   beforeEach(function(){ task = new Task ("Easy", 0, "chocolate")   });

it('should have a difficulty', function(){

  const actual = task.difficulty;
  // assert
  assert.strictEqual(actual, 'Easy');
})

it('should have an urgency', function(){

  const actual = task.urgency;
  // assert
  assert.strictEqual(actual, 0);
})

it('should have a reward', function(){

  const actual = task.reward;
  // assert
  assert.strictEqual(actual, "chocolate");
})

it('should be able to be marked as completed', function(){

  actual = task.completeTask();
  // assert
  assert.strictEqual(actual, true);
})


// it('should be able to be marked as completed', function(){
//   tasks = [task1 = new Task ("Hard", 9, "riches")
//   task2 = new Task ("Hard", 5, "gold")
//   task3 = new Task ("Medium", 6, "silver")]
//   actual = task2.reward
//   // assert
//   assert.strictEqual(actual, "gold");
// })

})
