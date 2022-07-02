//TO DO
//having issues removing the previous grid when hitting new grid, there has to be a way to remove and restart
//also making the squares dynamic in size so that a 5x5 grid takes up the same space as a 100x100
//also make the colors choosable or random

const container = document.getElementById("container");
const square = document.getElementsByClassName("square");
const newGrid = document.getElementById("newGrid");

newGrid.addEventListener("click", () => {
  let num = prompt(
    "Enter new grid size, 0-100 -- 16 will result in a 16x16 grid."
  );
  if (num > 100) {
    prompt("Number is too large, enter number between 1 and 100");
  } else {
    for (let i = 1; i <= num * num; i++) {
      const div = document.createElement("div");
      // div.innerText = i;
      div.classList.add("square");
      container.appendChild(div);
    }
  }
});

// for (let i = 1; i < 257; i++) {
//   const div = document.createElement("div");
//   // div.innerText = i;
//   div.classList.add("square");
//   container.appendChild(div);
// }

[...document.querySelectorAll(".square")].forEach((item) =>
  item.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "pink";
  })
);
