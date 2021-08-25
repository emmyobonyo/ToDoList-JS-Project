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
      div.appendChild(form);
      form.appendChild(input);
      form.appendChild(button);
    });
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const submit = form.newText.value;
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const i = tasks.length - 1;
      tasks[i].description = submit;
      form.style.display = 'none';
      const p = document.createElement('p');
      p.innerHTML = submit;
      liDiv.forEach((div) => {
        div.appendChild(p);
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
};

export const editOld = () => {
  newParagraph.forEach((para, idpara) => {
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
      div.appendChild(form);
      form.appendChild(input);
      form.appendChild(button);
    });
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const submit = form.newText.value;
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks[idpara].description = submit;
      form.style.display = 'none';
      const p = document.createElement('p');
      p.innerHTML = submit;
      oldDiv.forEach((div) => {
        div.appendChild(p);
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
};