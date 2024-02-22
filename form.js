var login = document.getElementById("login");
login.addEventListener("click", getValue);
function getValue(e) {
    e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email === "" || password === "") {
    alert("Email và password không được để trống");
  } else {
    alert("Chào mừng bạn " + email + " đã đăng nhập");
    location.href =
      "./index2.html";
  }
}
