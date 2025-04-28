const widthDisplay = document.getElementById('widthDisplay');

function updateWidth() {
  widthDisplay.textContent = `عرض صفحه: ${window.innerWidth}px`;
}

window.addEventListener('resize', updateWidth);
updateWidth();




const list = document.querySelector(".list");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");
const items = Array.from(document.querySelectorAll(".item"));

let positions = [0, 1, 2, 3, 4];

updateClasses();

function updateClasses() {
  items.forEach((item, index) => {

    item.className = "item";
    item.classList.add(`position-${positions[index]}`);

  });
}

btnNext.addEventListener("click", () => {
  positions.unshift(positions.pop());
  updateClasses();

});

btnPrev.addEventListener("click", () => {
  positions.push(positions.shift());
  updateClasses();
});