const list = document.querySelector('.todo-list');
const input = document.querySelector('.todo-input');
const addBtn = document.querySelector('.todo-btn');

function addTodo(todo) {
	const li = document.createElement('li');
	
  
	li.setAttribute('class', 'todo-item');
	li.innerHTML = `<input type="checkbox" class="todo-item__checkbox" >
					<span>${todo.text}</span>
					<i class="icon-delete fa-solid fa-trash" ></i>
					`
	

		
	list.appendChild(li)
	
	const span = document.querySelectorAll('.todo-item span')
	console.log(span)
	const checkbox = document.querySelectorAll('.todo-item__checkbox');
	Array.from(checkbox).forEach((checkBtn)=> {
		checkBtn.addEventListener('click', ()=> {
			span.classList.add('completed')
			// console.log(span.classList.add('completed'))
			
		})
	})
	const deleteBtn = document.querySelectorAll('.icon-delete')
	Array.from(deleteBtn).forEach((deleteButton) => {
		deleteButton.addEventListener('click', () => {
			deleteButton.parentNode.remove();
		});
	  });
			
	}



	addBtn.onclick = function() {
		const text = input.value.trim()
		if(	text != '')
		addTodo({text})
		input.value= ''
	}

	input.onkeydown = function(e) {
		const text = input.value.trim()
		if(e.keyCode == '13' && text != '') {
			addTodo({text})
		    input.value= ''

		}
		
	}



	
		// const listItem = document.querySelectorAll('li')
		
		// const todos = []
	
		// listItem.forEach((item) => {
		// 	todos.push({
		// 		text: item.querySelector('span').innerHTML,
		// 		completed: item.classList.contains('completed')
				
		// 	})
		// })
	


// const todoList = document.querySelector('.todo-list');
// const input = document.querySelector('.todo-input');
// const addBtn = document.querySelector('.todo-btn');
// const sort = document.querySelector('.todo-list__title span');
// const title = document.querySelector('.todo-item span')
// const checkbox = document.getElementById('#todo-item__checkbox');
// const deleteBtn = document.querySelector('i')
// // checkbox.checked = true;

// function addTodo(todo) {
// 	const todoItem = document.createElement('li');
// 	todoItem.setAttribute('class',todo.completed ? 'todo-item completed' : 'todo-item')
// 	todoItem.innerHTML = `  <input type="checkbox" id="todo-item__checkbox">
// 							<span>${todo.text}</span>
// 							<i class="icon-delete fa-solid fa-trash"></i>
// 						`
								
// 	todoList.appendChild(todoItem);
// 	updateTodo()
	   
// }


// function HandleEvent() {
// 	addBtn.addEventListener('click', (e) => {
	
// 		const text = input.value.trim();
// 		text != '' ? addTodo({ text, completed: false }) : undefined
// 		input.value = '';
	
// 	})
// 	input.addEventListener('keypress',function(e) {
// 		if(e.keyCode == '13') {
// 			const text = input.value.trim();
// 			text != '' ? addTodo({ text, completed: false }) : undefined
// 			input.value = '';
// 		}
// 	})
// 	deleteBtn.addEventListener('click', (e)=> {
// 		e.target.parentElement.remove();
// 		updateTodo()
// 	})	
// }

// HandleEvent()
// function updateTodo() {
//     const liItem= document.querySelectorAll('todo-item')
// 	const  todos = [];
// 	liItem.forEach((item) => {
// 		todos.push({
// 			text: item.querySelector('span').innerHTML,
// 			completed: item.classList.contains('completed'),
// 		})
// 	})
// }





//  checkbox.addEventListener('click', (e) => {
// 	console.log(checkbox);


//  })
// checkbox.addEventListener('change', ()=> {
//    if(this.checked) {
// 	 title.classList.add('completed')
// 	 console.log("OK");
//    }
// })