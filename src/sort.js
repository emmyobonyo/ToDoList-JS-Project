HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

export default () => {
  const hide = document.getElementsByClassName('delete');
  let b = 0;
  hide.forEach((hide) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    hide.style.display = 'none';
    const i = hide.id - b;
    tasks.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    b += 1;
  });
};