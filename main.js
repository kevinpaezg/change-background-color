const button = document.getElementById("button");
// const array1 = ["a", "b", "c", "d", "e", "f"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

button.addEventListener('click', (e) => {
  let newArray = "#";
  // let range1 = Math.floor(Math.random() * (6 - 0) + 0);
  // let range2 = Math.floor(Math.random() * (6 - 0) + 0);
  // let number = Math.floor(Math.random() * (10 - 0) + 0);
  // if (range1 < 6) {
  //   let color1 = array1[range1];
  //   let color2 = array1[range2];
  //   newArray.push("#" + number + color1 + color2);
  // }

  for (let i = 0; i < 6; i++) {
    newArray += hex[numberAleatory()];
  }

  // console.log(newArray);
  e.target.parentNode.style.backgroundColor = newArray;
});

function numberAleatory() {
  return Math.floor(Math.random() * hex.length);
}
