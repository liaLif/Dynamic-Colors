function changeColor(color) {
  return function () {
    document.body.style.background = color;
  };
}

const colorMint = changeColor("#afd1a1");
const colorPacific = changeColor("#8fb4b8");
const colorLilac = changeColor("#a89db3");

document.getElementById("mint").addEventListener("click", colorMint);
document.getElementById("pacific").addEventListener("click", colorPacific);
document.getElementById("lilac").addEventListener("click", colorLilac);


