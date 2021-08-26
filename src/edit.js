const ul = document.getElementById('list-items');
const p = ul.getElementsByClassName('double-clicked');
const liDiv = ul.getElementsByClassName('new-div-clicked');
const newParagraph = ul.getElementsByClassName('old-double-clicked');
const oldDiv = ul.getElementsByClassName('old-div-clicked');

HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

export default () => {
  p.forEach((para) => {
    para.className = 'none';
    para.style.display = 'none';
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
      const p = document.createElement('p');
      p.innerHTML = submit;
      divNew.forEach((div) => {
        if (div.id === para.id) {
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
      const p = document.createElement('p');
      p.innerHTML = submit;
      div.forEach((div) => {
        if (div.id === para.id) {
          div.appendChild(p);
        }
      })
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
};