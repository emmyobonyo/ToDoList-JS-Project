import './style.css';
import completed, { newCompleted } from './completed.js';
import edit, { editOld } from './edit.js';
import sort from './sort.js';
// import rendered from './render.js';
// rendered();
const ul = document.getElementById('list-items');
const form = document.getElementById('form');
const submitTask = document.getElementById('submit-task');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const button = document.getElementById('submit');
const error = document.getElementById('error');

class Task {
  constructor(description) {
    this.description = description;
    this.isCompleted = false;
  }

  addTask() {
    const li = document.createElement('li');
    li.className = 'new-list';
    const b = tasks.length;
    li.id = b;
    const liDiv = document.createElement('div');
    liDiv.id = b;
    liDiv.className = 'new-div';
    const p = document.createElement('p');
    p.className = 'new-paragraph';
    p.id = b;
    p.addEventListener('dblclick', () => {
      p.className = 'new-paragraph double-clicked';
      liDiv.className = 'new-div new-div-clicked';
      edit();
    });
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'new-checkbox';
    checkbox.id = b;
    checkbox.onclick = newCompleted;
    const icon = document.createElement('i');
    icon.className = 'fa fa-trash';
    icon.addEventListener('click', () => {
      ul.removeChild(li);
      tasks.splice(b, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    p.innerHTML = this.description;
    ul.appendChild(li);
    li.appendChild(liDiv);
    liDiv.appendChild(checkbox);
    liDiv.appendChild(p);
    li.appendChild(icon);
    form.task.value = '';
  }
}

submitTask.addEventListener('click', () => {
  const description = form.task.value;
  if (description === '') {
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
    const newTask = new Task(description);
    newTask.addTask();
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});

const render = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const li = document.createElement('li');
    li.id = i;
    const liDiv = document.createElement('div');
    liDiv.id = i;
    const p = document.createElement('p');
    p.className = 'paragraph';
    p.id = i;
    p.addEventListener('dblclick', () => {
      p.className = 'paragraph old-double-clicked';
      liDiv.className = 'old-div old-div-clicked';
      editOld();
    });
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.id = i;
    checkbox.onclick = completed;
    const icon = document.createElement('i');
    icon.className = 'fa fa-trash';
    icon.addEventListener('click', () => {
      ul.removeChild(li);
      tasks.splice(i, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    p.innerHTML = tasks[i].description;
    if (tasks[i].isCompleted) {
      p.style.textDecoration = 'line-through';
      checkbox.checked = true;
      li.className = 'delete';
    }
    ul.appendChild(li);
    li.appendChild(liDiv);
    liDiv.appendChild(checkbox);
    liDiv.appendChild(p);
    li.appendChild(icon);
  }
};

button.addEventListener('click', sort);

if (tasks.length > 0) {
  render();
}

function component() {
  const element = document.createElement('div');

  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());