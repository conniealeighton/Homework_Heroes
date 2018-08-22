const Task = function(difficulty, urgency, reward){
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false
}

Task.prototype.completeTask = function()
{
  return this.completed = true
}

// Task.prototype.sortUrgency = function(tasks){
//   tasks.sort(function(a, b){
//       return a.age-b.age
// })
//


module.exports = Task;
