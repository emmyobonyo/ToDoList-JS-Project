HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

export default  () => {
  const hide = document.getElementsByClassName('delete');
  console.log(hide.length);
  let b = 0;
  hide.forEach((hide, idHide) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    hide.style.display = 'none';
    let i = hide.id - b;
    console.log(`${hide.id} is id`); //* Here
    tasks.splice(i, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(b);
    b += 1;
  })
};