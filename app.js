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
	checkbox.forEach((checkBtn, index) => {
		checkBtn.onclick = function () {
			span[index].classList.toggle('completed')
		}
	})
	//Delete item when click
	const deleteBtn = document.querySelectorAll('.icon-delete')
	deleteBtn.forEach((deleteButton) => {
		deleteButton.onclick = function () {
			deleteButton.parentNode.remove();
		}
	});

}
//Add new item when click Add Btn
addBtn.onclick = function () {
	const text = input.value.trim()
	if (text != '')
		addTodo({ text })
	input.value = ''
}
//Add new item when press 'Enter'
input.onkeydown = function (e) {
	const text = input.value.trim()
	if (e.keyCode == '13' && text != '') {
		addTodo({ text })
		input.value = ''

	}
}
//filter todo all/active/complete
const filterBtns = document.querySelectorAll('.todo-list__title span');

for (let i = 0; i < filterBtns.length; i++) {
	filterBtns[i].onclick = (e) => {
		const listItem = document.querySelectorAll('.todo-item');
		const filter = e.target.dataset.filter;
		console.log(filter)
		listItem.forEach((todo) => {
			if (filter === 'All') {
				todo.style.display = 'flex';
				// filterBtns.classList.add('active')
			} else {
				console.log(todo.classList.contains(filter));
				if (todo.childNodes[2].classList.contains(filter)) {

					todo.style.display = 'flex';

				}
				else {
					todo.style.display = 'none';

				}
			}
		})
	}

}
