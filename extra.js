const login = prompt("Введите логин");
if (login !== "admin") {
  document.getElementById("result").style.background = "red";
} else {
  const password = prompt("Введите пароль");
  if (password !== "qwerty") {
    document.getElementById("result").style.background = "red";
  } else {
    document.getElementById("result").style.background = "green";
  }
}
