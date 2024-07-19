const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function load() {
  var loader = document.getElementById("loading");
  var button = document.getElementById("submit");
  var originalButton = button.style;
  var originalLoader = loader.style;
  loader.style.display = "block";
  loader.style.pointerEvents = "none";
  button.style.backgroundColor = "#bababa";
  button.style.cursor = "auto";
  await delay(3000);
  button.style = originalButton;
  loader.style = originalLoader;
}

var button = document.getElementById("submit");
button.addEventListener("click", load);
