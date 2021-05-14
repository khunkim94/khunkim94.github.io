let form = document.forms.demo;

function checkName() {
  let name = form.elements.name;
  console.log(name);
  // let error = name.nextElementSibling;
  // let value = name.value.trim();

  // if (value == "") {
  //   error.textContent = "Tên không được để trống";
  //   return false;
  // }

  // if (value.length < 3) {
  //   error.textContent = "Tên phải có độ dài tối thiểu là 3";
  //   return false;
  // }

  // return true;
}

// form.addEventListener("submit", function (ev) {
//   if (!form.checkValidity()) {
//     ev.preventDefault();
//     ev.stopPropagation();
//   }

//   form.classList.add("was-validated");
// });