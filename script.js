const accordion = document.getElementsByClassName("contant-container");
const question = document.querySelectorAll(".question");
const icons = document.querySelectorAll(".plus");
const icon = document.querySelector(".plus");
const img1 = "images/icon-plus.svg";
const img2 = "images/icon-minus.svg";

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

question.forEach((q) => {
  q.addEventListener("click", () => {
    const icon = q.querySelector(".plus");
    if (icon.src.includes("icon-plus.svg")) {
      icon.src = img2; // Change to minus icon
    } else {
      icon.src = img1; // Change back to plus icon
    }
  });
});
