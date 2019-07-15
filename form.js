function buat_login() {
  var elem = document.getElementById("x");
  elem.parentElement.removeChild(elem);

  var p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "SILAHKAN MENDAFTAR";

  var element = document.getElementsByTagName("div")[0];
  element.appendChild(p);

  var form = document.createElement("FORM");
  element.appendChild(form);

  var label = document.createElement("label");
  label.innerHTML = "Nama User";
  form.appendChild(label);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Nama User...";
  form.appendChild(input_username);

  var label3 = document.createElement("label");
  label3.innerHTML = "Nomor Handphone";
  form.appendChild(label3);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "nomor_handphone";
  input_username.className = "form_login";
  input_username.placeholder = "Nomor Handphone...";
  form.appendChild(input_username);

  var label4 = document.createElement("label");
  label4.innerHTML = "Username";
  form.appendChild(label4);

  var input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  input_username.placeholder = "Username atau email...";
  form.appendChild(input_username);

  var label2 = document.createElement("label");
  label2.innerHTML = "Password";
  form.appendChild(label2);

  var input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  input_password.placeholder = "Password...";
  form.appendChild(input_password);

  var tombol = document.createElement("input");
  tombol.type = "submit";
  tombol.className = "tombol_login";
  tombol.value = "Daftar Sekarang";
  form.appendChild(tombol);
}
