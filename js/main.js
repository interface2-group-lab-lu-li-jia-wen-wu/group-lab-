//let id = 000;
//let sport = 'Swimming';
//let number = 00;
//let unit = 'minutes';
//let duration = number, unit;
//let completion = 30%;
//
//
//let task_list = [
//  {  //task, index 0
//    id: 001,
//    sport: 'Swimming',
//    duration: {
//      number: 30,
//      unit: 'minutes'
//    }
//    completion: 30%,
//  },
//  {  //task, index 2
//    id: 002,
//    sport: 'Jogging',
//    duration: {
//      number: 50,
//      unit: 'minutes'
//    }
//    completion: 60%,
//  },
//  {  //task, index 3
//    id: 003,
//    sport: 'Playing basketball',
//    duration: {
//      number: 40,
//      unit: 'minutes'
//    }
//    completion: 70%,
//  },
//  {  //task, index 4
//    id: 004,
//    sport: 'Push-ups',
//    duration: {
//      number: 20,
//      unit: 'minutes'
//    }
//    completion: 110%,
//  }
//];
//
//console.log(task_list[1].id);

function newElement() {
  var ol = document.getElementById("task_list");
  var checkbox = document.createElement('input'); 
              
            // Assigning the attributes 
            // to created checkbox 
            checkbox.type = "checkbox"; 
            checkbox.name = "name"; 
            checkbox.value = "value"; 
            checkbox.id = "id"; 
  
  var li = document.createElement("li");
  var inputValue = document.getElementById("newTask").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(checkbox);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("task_list").appendChild(li);
  }
  document.getElementById("newTask").value = "";

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



