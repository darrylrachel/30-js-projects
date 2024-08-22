const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();
// const month = date.getMonth()
monthNameEl.innerText = date.toLocaleString("en", {
  month:"long" // short - abbreviates the month
})

dayNameEl.innerText = date.toLocaleDateString("en", {
  weekday:"long" // short - abbreviates the month
})

dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();