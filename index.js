const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dy=[]
    for(var i=0;i<todos.all.length;i++){
      if(todos.all[i].dueDate==yesterday){
        dy.push(todos.all[i])
      }
    }
    return dy;
  }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dt=[]
    for(var i=0;i<todos.all.length;i++){
      if(todos.all[i].dueDate==today){
        dt.push(todos.all[i])
      }
    }
    return dt;
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    var dt=[]
    for(var i=0;i<todos.all.length;i++){
      if(todos.all[i].dueDate==tomorrow){
        dt.push(todos.all[i])
      }
    }
    return dt;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    // ..
    // ..
    // ..
    // return OUTPUT_STRING
    var curr=""
    for(var j=0;j<list.length;j++){
      if(list[j].dueDate==today){
        if(list[j].completed){
          curr= curr+'[x] '+list[j].title+"\n";
        }
        else{
          curr=curr+'[ ] '+list[j].title+"\n";
        }
      }
      else if(list[j].dueDate==yesterday){
        curr=curr+'[ ] '+list[j].title+" "+yesterday+"\n";
      }
      else{
        curr=curr+'[ ] '+list[j].title+" "+tomorrow+"\n";
      }
    }
    return curr;
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")