for (var i = 0; i < document.getElementsByClassName("d-btn").length; i++) {
  document.getElementsByClassName("d-btn")[i].addEventListener("click", action);
}

function action() {
  alert("light-speed");
  document.getElementsByClassName("speed")[0].classList.add("js");
  document.getElementById("greet").innerHTML = "ENJOY!!";

  setTimeout(function () {
    document.getElementsByClassName("speed")[0].classList.remove("js");
  }, 100);
  for (var i = 0; i < document.querySelector(".d-btn").length; i++) {
    document.querySelector(".d-btn")[i].classList.add("btn-warning");
  }
}

document.addEventListener("keypress", function (event) {
  keyaction(event.key);
});

function keyaction(pressed) {
  if (pressed === "w") {
    document.getElementsByClassName("speed")[0].src = "pic/light.png";
  } else if (pressed === "s") {
    document.getElementsByClassName("speed")[0].src = "pic/free.jpg";
  } else {
    alert("Not an option!!");
  }
}
