const ul = document.getElementById('list-items');
const checkbox = ul.getElementsByClassName('checkbox');
const li = ul.getElementsByTagName('li');
const p = ul.getElementsByTagName('p');
const newTask = ul.getElementsByClassName('new-checkbox');
const newList = ul.getElementsByClassName('new-list');
const newParagraph = ul.getElementsByClassName('new-paragraph');

HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

export default () => {
  const newP = ul.getElementsByClassName('tasked-list');
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  checkbox.forEach((check, idcheck) => {
    if (check.checked) {
      li.forEach((list, idlist) => {
        if (idlist === idcheck) {
          list.className = 'delete';
          p[idlist].style.textDecoration = 'line-through';
          const i = list.id;
          tasks[i].isCompleted = true;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      });
    } else {
      li.forEach((list, idlist) => {
        if (idlist === idcheck) {
          list.className = 'undelete';
          p[idlist].style.textDecoration = 'none';
          const i = list.id;
          tasks[i].isCompleted = false;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      });
    }
  });
};

export const newCompleted = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  newTask.forEach((check, idcheck) => {
    if (check.checked) {
      newList.forEach((list, idlist) => {
        if (idlist === idcheck) {
          list.className = 'new-list delete';
          newParagraph[idlist].style.textDecoration = 'line-through';
          const i = list.id;
          tasks[i].isCompleted = true;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      });
    } else {
      newList.forEach((list, idlist) => {
        if (idlist === idcheck) {
          list.className = 'new-list undelete';
          newParagraph[idlist].style.textDecoration = 'none';
          const i = list.id;
          tasks[i].isCompleted = false;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      });
    }
  });
};
