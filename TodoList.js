// algorithm
//1.create array to store todos
//2.when we click the array 
//3.get text from textbox
//4. add it to array
//5.consolo.log() the array
const todolist = JSON.parse(localStorage
  .getItem('todolist')) || [{
  name:'make',
  dueDate:'2022-09-06'},{
    name:'wash',
    dueDate:'2022-07-05'
  }
];

renderTodolist();

function renderTodolist()
{
let tododlisthtml = '';

todolist.forEach((todoObject, index) =>
{
 
  const {name, dueDate} = todoObject;
  const html = ` 
  <div> ${name}</div>
  <div>${dueDate} </div>
  
  <button 
  // wheneve we updsate the todo save in localstrirage
  saveLocalStrorage();
  class="delete-btn js-delete-btn">Delete</button>
  `;
  tododlisthtml += html;
});

document.querySelector('.js-todo-list')
.innerHTML = tododlisthtml;
//we are using quearyselectot all for getting all the delete button
document.querySelectorAll('.js-delete-btn')
.forEach( (deleteButton, index) => 
{
  deleteButton.addEventListener('click', () =>
  {
    todolist.splice(index, 1);
  renderTodolist ();

  });

});

}

document.querySelector('.js-add-btn')
.addEventListener('click', () => 
{
  addtodo();
})

function addtodo()
{
  const inputElement = document.querySelector
  ('.js-name-input');
 const name = inputElement.value;
   const duedateElement = document.querySelector('.js-due-date-input');
   const dueDate = duedateElement.value;

   todolist.push(
  {
    //name:name,
  //dueDate:dueDate
 name,dueDate  
}

 );
 
   inputElement.value = '';
   renderTodolist();
   saveLocalStrorage();

   }

   function saveLocalStrorage()
   {
    localStorage.setItem('todolist', JSON.stringify(todolist));
   }