function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}

// Keyboard support
document.addEventListener("keydown", function(e) {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
});