//TO DO
//add new grid/reset button
//also making the squares dynamic in size so that a 5x5 grid takes up the same space as a 100x100
//also make the colors choosable or random

const container = document.getElementById("container");
const square = document.getElementsByClassName("square");

for (let i = 1; i < 257; i++) {
  const div = document.createElement("div");
  // div.innerText = i;
  div.classList.add("square");
  container.appendChild(div);
}

[...document.querySelectorAll(".square")].forEach((item) =>
  item.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "pink";
  })
);
