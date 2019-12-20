//load chrome html before js so you can see the site
var todos = [];
window.setTimeout(function() {
    // put all of your JS code from the lecture here
    // var todos = [];
    var input = prompt('What would you like to do?');

    while(input!=='quit') {
      if(input==='list') {
        listTodos();
      }else if(input==='new') {
        addTodo();
      }else if(input==='delete') {
        deleteTodo();
      }
      input = prompt('What would you like to do?');
    }

    function listTodos() {
      console.log('**********');
      todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
      });
      console.log('**********');
    }

    function addTodo() {
      var newTodo = prompt('Enter a new todo');
      todos.push(newTodo);
      console.log('Added todo');
    }

    function deleteTodo() {
      var index = prompt('Enter index of todo to delete');
      todos.splice(index, 1);
    }
    
  }, 500);

// var todos = [];
// var input = prompt('What would you like to do?');

// while(input!=='quit') {
//   if(input=='list') {
//     console.log(todos);
//   }
//   else if(input=='new') {
//     var newTodo = prompt('Enter a new todo');
//     todos.push(newTodo);
//   }
//   input = prompt('What would you like to do?');
// }