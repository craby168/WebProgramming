document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');
    const descriptionInput = document.getElementById('description');
    const addBtn = document.getElementById('add-btn');

    // Default todos
    const defaultTodos = [
        { title: 'todo1', description: 'This is the description for todo1.' },
        { title: 'todo2', description: 'This is the description for todo2.' }
    ];

    // Load default todos
    defaultTodos.forEach(todo => addTodoItem(todo.title, todo.description));

    // Add new todo
    addBtn.addEventListener('click', function() {
        const title = newTodoInput.value.trim();
        const description = descriptionInput.value.trim();
        if (title) {
            addTodoItem(title, description);
            newTodoInput.value = '';
            descriptionInput.value = '';
        }
    });

    // Allow enter to add
    newTodoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBtn.click();
        }
    });

    function addTodoItem(title, description) {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';

        const titleContainer = document.createElement('div');
        titleContainer.className = 'title-container';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const todoTitle = document.createElement('span');
        todoTitle.className = 'todo-title';
        todoTitle.textContent = title;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';

        const todoDescription = document.createElement('div');
        todoDescription.className = 'todo-description';
        todoDescription.textContent = description;

        titleContainer.appendChild(checkbox);
        titleContainer.appendChild(todoTitle);
        titleContainer.appendChild(deleteBtn);

        todoItem.appendChild(titleContainer);
        todoItem.appendChild(todoDescription);

        // Toggle description
        todoTitle.addEventListener('click', function() {
            todoDescription.style.display = todoDescription.style.display === 'block' ? 'none' : 'block';
        });

        // Delete todo
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });

        todoList.appendChild(todoItem);
    }
});