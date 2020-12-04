var formNode = document.querySelector("#contact-form");

var submitButton = formNode.querySelector(".form-group #submit");
var resetButton = formNode.querySelector(".form-group #reset");
submitButton.addEventListener("click", function () {
  var name = formNode.querySelector("#input-name").value;
  var content = formNode.querySelector("#input-content").value;
  console.log(name + "," + content);
  event.preventDefault();
});
resetButton.addEventListener("click", function () {
  formNode.querySelector("#input-name").value = "";
  formNode.querySelector("#input-content").value = "";
  event.preventDefault();
});
