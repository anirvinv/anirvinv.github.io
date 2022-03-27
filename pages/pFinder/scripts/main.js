import { dfs } from "./depthFirst.js";
import { bfs } from "./breadthFirst.js";
import { makeList } from "./makeList.js";
document.addEventListener("DOMContentLoaded", () => {
	var button = document.querySelector("#reset");
	button.addEventListener("click", () => {
		location.reload();
	});
	var body = document.querySelector("body");
	var boxDivs = body.querySelectorAll(".box");
	var boxes = [undefined];
	boxDivs.forEach((obj) => {
		boxes.push(obj);
	});
	var count = 1;
	boxes.forEach((box) => {
		if (box != undefined) {
			// box.innerHTML = count;
			box.dataset.val = count++;
			if (box.dataset.val == 1) {
				box.style.backgroundColor = "rgb(160, 236, 124)";
			} else if (box.dataset.val == 170) {
				box.style.backgroundColor = "rgb(160, 236, 124)";
			}
		}
	});
	const walls = Array(count).fill(0);

	boxes.forEach((box) => {
		var highlightColor = "rgb(185, 255, 249)";
		if (box != undefined && box.dataset.val != 1 && box.dataset.val != 170) {
			box.addEventListener("click", () => {
				// console.log(box.style.backgroundColor);
				if (
					box.style.backgroundColor == "" ||
					box.style.backgroundColor == highlightColor
				) {
					box.style.backgroundColor = "brown";
					box.addEventListener("mouseenter", () => {
						box.style.backgroundColor = "brown";
					});
					box.addEventListener("mouseleave", () => {
						box.style.backgroundColor = "brown";
					});
					walls[box.dataset.val] = 1;
				} else if (box.style.backgroundColor == "brown") {
					box.style.backgroundColor = "white";
					box.addEventListener("mouseenter", () => {
						box.style.backgroundColor = highlightColor;
					});
					box.addEventListener("mouseleave", () => {
						box.style.backgroundColor = "white";
					});
					walls[box.dataset.val] = 0;
				}
			});
		}
	});

	document.addEventListener("keydown", (event) => {
		// console.log(event);
		var adjList = makeList(walls);
		if (event.key == "d") {
			dfs(adjList, boxes);
		}
		if (event.key == "b") {
			bfs(adjList, boxes);
		}
	});
});
