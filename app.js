const list = document.querySelector('.todo-list');
const input = document.querySelector('.todo-input');
const addBtn = document.querySelector('.todo-btn');

function addTodo(todo) {
	const li = document.createElement('li');
	li.setAttribute('class', 'todo-item');
	li.innerHTML = `<input type="checkbox" class="todo-item__checkbox" >
					<span>${todo.text}</span>
					<i class="icon-edit fa-solid fa-pen-to-square"></i>
					<i class="icon-delete fa-solid fa-trash" ></i>
					`	
	list.appendChild(li)
	//When click checkbox toggle class 'completed' 
	const span = document.querySelectorAll('.todo-item span')
	const checkbox = document.querySelectorAll('.todo-item__checkbox');
	checkbox.forEach((checkBtn,index) => {
		checkBtn.onclick = function() {
			span[index].classList.toggle('completed')
		}
	})
    //Delete item when click
	const deleteBtn = document.querySelectorAll('.icon-delete')
	 deleteBtn.forEach((deleteButton) => {
		deleteButton.onclick = function() {
			deleteButton.parentNode.remove();
		}
	  });
	//Edit item when click icon 
	const editBtn = document.querySelectorAll('.icon-edit');
	  editBtn.forEach((editbtn,index) =>{
		editbtn.onclick = function() {
			
		}
	  })
			
	}
	//Add new item when click Add Btn
	addBtn.onclick = function() {
		const text = input.value.trim()
		if(	text != '')
		addTodo({text})
		input.value= ''
	}
	//Add new item when press 'Enter'
	input.onkeydown = function(e) {
		const text = input.value.trim()
		if(e.keyCode == '13' && text != '') {
			addTodo({text})
		    input.value= ''

		}
	}
//filter todo all/active/complete
const filterBtns = document.querySelectorAll('.todo-list__title span');
const listItem = document.querySelectorAll('.todo-list');

for(i = 0; i<filterBtns.length; i++) {
	filterBtns[i].onclick = (e) => {
		const filter = e.target.dataset.filter;
		console.log(filter)
		listItem.forEach((todo)=>{
			if(filter === 'All'){
				todo.style.display = 'block';
				// filterBtns.classList.add('active')
			}
			else {
				if(todo.classList.contains(filter)){
	
					todo.style.display = 'block';
					
				}
				else {
					todo.style.display = 'none';
	
				}
			}
		})
	}
	
}
