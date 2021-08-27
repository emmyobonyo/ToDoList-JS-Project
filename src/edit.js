const ul = document.getElementById('list-items');
const li = ul.getElementsByTagName('li');
const checkboxed = ul.getElementsByClassName('checkbox');
const p = ul.getElementsByClassName('double-clicked');
const liDiv = ul.getElementsByClassName('new-div-clicked');
const newParagraph = ul.getElementsByClassName('old-double-clicked');
const oldDiv = ul.getElementsByClassName('old-div-clicked');
const newTask = ul.getElementsByClassName('new-checkbox');

HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

export default () => {
  p.forEach((para) => {
    para.className = 'none';
    para.style.display = 'none';
    newTask.forEach((check) => {
      if (check.id === para.id) {
        check.style.display = 'none';
      }
    });
    const form = document.createElement('form');
    form.className = 'new-form';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'newText';
    const button = document.createElement('input');
    button.type = 'submit';
    button.value = 'Edit';
    liDiv.forEach((div) => {
      div.className = 'new-none-div';
      div.appendChild(form);
      form.appendChild(input);
      form.appendChild(button);
    });
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const divNew = ul.getElementsByClassName('new-none-div');
      const submit = form.newText.value;
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const i = tasks.length - 1;
      tasks[i].description = submit;
      form.style.display = 'none';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'check-margin';
      const p = document.createElement('p');
      p.innerHTML = submit;
      checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
          p.className = 'tasked';
          li.forEach((list) => {
            if (list.id === para.id) {
              list.className = 'delete';
            }
          });
        } else {
          p.className = 'untasked';
          li.forEach((list) => {
            if (list.id === para.id) {
              list.className = 'undelete';
            }
          });
        }
      });
      divNew.forEach((div) => {
        if (div.id === para.id) {
          div.appendChild(checkbox);
          div.appendChild(p);
        }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
};

export const editOld = () => {
  newParagraph.forEach((para) => {
    para.className = 'none';
    para.style.display = 'none';
    checkboxed.forEach((check) => {
      if (check.id === para.id) {
        check.style.display = 'none';
      }
    });
    const form = document.createElement('form');
    form.className = 'new-form';
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'newText';
    const button = document.createElement('input');
    button.type = 'submit';
    button.value = 'Edit';
    oldDiv.forEach((div) => {
      div.className = 'none-div';
      div.appendChild(form);
      form.appendChild(input);
      form.appendChild(button);
    });
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const div = ul.getElementsByClassName('none-div');
      const submit = form.newText.value;
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks[para.id].description = submit;
      form.style.display = 'none';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'check-margin';
      const p = document.createElement('p');
      p.innerHTML = submit;
      checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
          p.className = 'tasked';
          li.forEach((list) => {
            if (list.id === para.id) {
              list.className = 'delete';
            }
          });
        } else {
          p.className = 'untasked';
          li.forEach((list) => {
            if (list.id === para.id) {
              list.className = 'undelete';
            }
          });
        }
      });
      div.forEach((div) => {
        if (div.id === para.id) {
          div.appendChild(checkbox);
          div.appendChild(p);
        }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
};