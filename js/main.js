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
var addTask = function() {

  // Store the value from the 'amount' input in a variable (let)
  let _task = document.getElementById('task').value;
  // 1. Update the balance using the transaction value

  // 2. Add a record to the history showing the amount deposited
  document.getElementById('allTask').innerHTML += '<li>' + _task + '</li>';

  // 3. If the balance is less than 0, make the balance red, else make it black
    // A) change the style.color of the balance
    //IF STATEMENT :
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

    // B) create a css class and .add() a class to the balance
};

document.getElementById('add').addEventListener('click', addTask);
