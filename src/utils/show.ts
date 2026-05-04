const show = document.getElementById("show") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

show.addEventListener("change", () => {
  password.type = show.checked ? "text" : "password";
});
