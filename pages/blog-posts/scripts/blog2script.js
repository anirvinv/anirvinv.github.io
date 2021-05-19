function convolveImage(colstraverse, rowstraverse) {
  let cells = document.querySelectorAll(".imageCells");
  cells.forEach((element) => {
    element.style.backgroundColor = "rgb(89, 241, 135)";
  });

  let rows = [1 + rowstraverse, 2 + rowstraverse, 3 + rowstraverse];
  let cols = [1 + colstraverse, 2 + colstraverse, 3 + colstraverse];

  rows.forEach((element) => {
    cols.forEach((element1) => {
      index = document.getElementById(element + "" + element1);
      index.style.backgroundColor = "rgb(248, 138, 138)";
    });
  });
}

function productDisplay(clicks, colstraverse, rowstraverse) {
  cells = document.querySelectorAll("#featuremap td");
  if (clicks % 9 == 0) {
    cells.forEach((element) => {
      element.innerHTML = "";
      element.style.backgroundColor = "white";
    });
  }

  let resultMatrix = [
    [4, 3, 3],
    [3, 3, 2],
    [4, 2, 1],
  ];

  cells[clicks % 9].innerHTML = resultMatrix[rowstraverse][colstraverse];
  cells[clicks % 9].style.backgroundColor = "yellow";
}

document.addEventListener("DOMContentLoaded", () => {
  var button = document.getElementById("button");

  var clicks = -1;
  var rowstraverse = -1;
  button.addEventListener("click", () => {
    clicks += 1;
    colstraverse = clicks % 3;
    if (clicks % 3 == 0) {
      rowstraverse += 1;
      rowstraverse %= 3;
    }
    convolveImage(colstraverse, rowstraverse);

    productDisplay(clicks, colstraverse, rowstraverse);
  });
});
