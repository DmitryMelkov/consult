export function date() {
  const dateSpan = document.querySelector('.date-js');

  let dateCurrent = new Date();
  let monday = new Date();

  if (dateCurrent.getDay()) {
    monday.setDate(dateCurrent.getDate() + 8 - dateCurrent.getDay());
  } else {
    monday.setDate(dateCurrent.getDate() + 1);
  }

  let mondayFormat = monday.toLocaleDateString();
  dateSpan.innerHTML = mondayFormat;
}
