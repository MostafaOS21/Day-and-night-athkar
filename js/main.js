let time_box = document.querySelector(".time");
let day_link = document.querySelector(".day");
let night_link = document.querySelector(".night");
let btns = document.querySelectorAll(".btn");
let container_thekr = document.querySelector(".container");


let end_of_program = document.querySelector(".end-of-program");

window.onload = function () {
  if (time_box !== null) time_box.classList.add("active");
  if (container_thekr !== null) {
    container_thekr.classList.add("active");
  }
};

btns.forEach((btn) => {
  if (btn !== null) {
    btn.addEventListener("click", () => {
      btn.innerHTML--;
      if (btn.innerHTML === "0") {
        btn.parentElement.classList.add("hide");
        setTimeout(() => {
          btn.parentElement.remove();
          if (document.querySelector(".thekr") === null) {
            container_thekr.remove();
            document.body.style = `
						display: flex;
						justify-content: center;
						align-items: center;
						`;
            end_of_program.classList.remove("d-none");
            document.querySelectorAll(".end-of-program a").forEach((a) => {
              a.classList.add("animate");
            });
            setTimeout(() => end_of_program.classList.add("show"), 100);
          }
        }, 500);
      }
      console.log();
    });
  }
});
