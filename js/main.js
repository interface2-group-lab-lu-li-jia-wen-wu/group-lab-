/*let id = 000;
let sport = 'Swimming';
let number = 00;
let unit = 'minutes';
let duration = number, unit;
let completion = 30%;

let task_list = [
  {  //task, index 0
    id: 001,
    sport: 'Swimming',
    duration: {
      number: 30,
      unit: 'minutes'
    }
    completion: 30%,
  }
  {  //task, index 2
    id: 002,
    sport: 'Jogging',
    duration: {
      number: 50,
      unit: 'minutes'
    }
    completion: 60%,
  }
  {  //task, index 3
    id: 003,
    sport: 'Playing basketball',
    duration: {
      number: 40,
      unit: 'minutes'
    }
    completion: 70%,
  }
  {  //task, index 4
    id: 004,
    sport: 'Push-ups',
    duration: {
      number: 20,
      unit: 'minutes'
    }
    completion: 110%,
  }
];

console.log(task_list[1].id)
*/

//DATA SET
let tasks = [
  { id: 0, name: "Swimming 30 mins", complete: false },
  { id: 1, name: "Jogging 30 mins", complete: true },
  { id: 2, name: "Play basketball 30 mins", complete: false },
  { id: 3, name: "Push up 10 mins", complete: false }
];

// SELECTING DOCUMENT ELEMENTS TO CHANGE
const allTasks = document.getElementById('alltasks');  // our list of tasks (ol)


// OUTPUT THE RESULTS
allTasks.innerHTML = tasks.map(t => `<li class="task">${t.name}</li>` ).join('');

var addTask = function() {
  //Store the value from the 'submit' input in a variable (let)
  let _task = document.getElementById('task').value;
  tasks.push({ id: tasks.length, name: _task, complete: false});
  allTasks.innerHTML = tasks.map(t => `<li class="task">${t.name}</li>` ).join('');
};

document.getElementById('add').addEventListener('click', addTask);