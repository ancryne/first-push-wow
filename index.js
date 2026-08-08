let resultFiled = document.getElementById("resultField");
let buttons = document.querySelectorAll("button");
let keys = Array.from(buttons);
let result = "";

keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    if (event.target.innerHTML === "=") {
      if (result === "") return;
      result = eval(result);
      resultFiled.value = String(result);
    } else if (event.target.innerHTML === "=") {
      result = eval(result);
      resultFiled.value = String(result);
    } else if (event.target.innerHTML === "AC") {
      result = "";
      resultFiled.value = String(result);
    } else if (event.target.innerHTML === "C") {
      result = result.substring(0, result.length - 1);
      resultFiled.value = String(result);
    } else {
      result += event.target.innerHTML;
      resultFiled.value = result;
    }
  });
});
