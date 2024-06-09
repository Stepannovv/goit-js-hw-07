const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

function greetings() {
  const trimmedValue = input.value.trim();
  if (trimmedValue) {
    output.textContent = trimmedValue;
  } else {
    output.textContent = "Anonymous";
  }
}

input.addEventListener("input", greetings);
