console.log('app');

/* //Create
var toods =['운동'];
var todo = '게임';
toods.push(todo);
console.log(todos);

//Read

todos.forEach(function(todo){
    console.log(todo);
});

//Update
var arr = ['운동','게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

// Delete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos); */

/* var isMan = ture;
if(isMan){
    console.log('1');
}
else if (!isMan && isHero){

}
else {
    console.log('2');
} */

var count = [10,20,30,40,50,60,70,100];

const result = count.reduce(function add(sum, currValue) {
  return sum + currValue;
});

console.log(result); 