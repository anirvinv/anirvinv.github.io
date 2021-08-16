import { bubbleSort } from "./bubblesort.js";
import { selectionSort } from "./selectionsort.js";
import { mergeSort } from "./mergesort.js";

function generateRandomArray(length) {
	let arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(parseInt(Math.random() * 100) + 20);
	}
	return arr;
}

function nestDivs(parent, numberOfDivs) {
	let parentElement = document.querySelector(parent);
	for (let i = 0; i < numberOfDivs; i++) {
		parentElement.appendChild(document.createElement("div"));
	}
}

function styleNestedDivs(parent, arr) {
	let parentElement = document.querySelector(parent);
	let childDivs = parentElement.querySelectorAll("div");

	childDivs.forEach((childDiv, index) => {
		// childDiv.style.width = `${parseInt(60 / childDivs.length)}%`;
		childDiv.style.width = "6px";
		if (parseInt(60 / childDivs.length) > 3) {
			childDivs[index].innerText = `${arr[index]}`;
		}
		childDivs[index].style.height = `${arr[index] * 5}px`;
	});
}

document.addEventListener("DOMContentLoaded", () => {
	let arr = generateRandomArray(200);
	// let arr= [40,30,20,10]
	console.log(arr);

	nestDivs(".div__container", arr.length);

	styleNestedDivs(".div__container", arr);

	let bubble = document.querySelector("#bubbleButton");
	let selection = document.querySelector("#selectionButton");
	let merge = document.querySelector("#mergeSort");
	bubble.addEventListener("click", () => {
		arr = bubbleSort(".div__container", arr);
	});
	selection.addEventListener("click", () => {
		arr = selectionSort(".div__container", arr);
		console.log(arr);
	});
	merge.addEventListener("click", () => {
		arr = mergeSort(".div__container", arr);
		console.log(arr);
	});
});
