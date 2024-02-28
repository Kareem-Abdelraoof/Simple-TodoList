let todosList = document.querySelector('.todos-list');
let input = document.querySelector('.todos-list input');
input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value !== '') {
        let value = input.value;
        let todoDiv = document.createElement('div');
        todoDiv.setAttribute('class', 'show')
        todoDiv.textContent = value;
        todoDiv.addEventListener('click', function (e) {
            this.classList.toggle('line-through');
        })
        todoDiv.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            this.remove();
        })
        todosList.appendChild(todoDiv);
        input.value = '';
    }
})