let count = 0;

document.getElementById("increase").onclick = () => {
  count += 1;
  document.getElementById("label").innerHTML = count;
};

document.getElementById("decreaase").onclick = () => {
  count -= 1;
  document.getElementById("label").innerHTML = count;
};

document.getElementById("reset").onclick = () => {
  count = 0;
  document.getElementById("label").innerHTML = count;
};
