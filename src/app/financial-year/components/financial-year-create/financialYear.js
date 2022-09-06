start();

function writeYearTo() {
  let value = parseInt(document.getElementById("yearFrom").value);
  document.getElementById("yearTo").value = value + 1;
}

function start() {
  document.getElementById("yearFrom").addEventListener('input', writeYearTo);
}
