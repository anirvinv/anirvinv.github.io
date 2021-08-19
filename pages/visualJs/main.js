import { bubbleSort } from "./bubblesort.js";
import { selectionSort } from "./selectionsort.js";
import { mergeSort } from "./mergesort.js";
import { insertionSort } from "./insertionsort.js";

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
			// childDivs[index].innerText = `${arr[index]}`;
		}
		childDivs[index].style.height = `${arr[index] * 4}px`;
	});
}

function disableButtons() {
	let sortButtons = document.querySelectorAll(".sort");
	sortButtons.forEach((button) => {
		button.disabled = true;
	});
}
function enableButtons() {
	let sortButtons = document.querySelectorAll(".sort");
	sortButtons.forEach((button) => {
		button.disabled = false;
	});
}

document.addEventListener("DOMContentLoaded", () => {
	let slider = document.querySelector("#arraysize");
	let arr = generateRandomArray(200);
	slider.value = 200;
	if (screen.availWidth < 1000) {
		arr = generateRandomArray(60);
		slider.value = 60;
	}
	// let arr= [40,30,20,10]
	console.log(arr);

	nestDivs(".div__container", arr.length);

	styleNestedDivs(".div__container", arr);

	let bubble = document.querySelector("#bubbleButton");
	let selection = document.querySelector("#selectionButton");
	let merge = document.querySelector("#mergeSort");
	let insertion = document.querySelector("#insertionButton");

	slider.addEventListener("click", () => {
		let container = document.querySelector(".div__container");

		while (container.firstChild) {
			container.removeChild(container.lastChild);
		}

		arr = generateRandomArray(slider.value);
		nestDivs(".div__container", arr.length);
		styleNestedDivs(".div__container", arr);
		enableButtons();
	});

	bubble.addEventListener("click", () => {
		arr = bubbleSort(".div__container", arr);
		disableButtons();
	});
	selection.addEventListener("click", () => {
		arr = selectionSort(".div__container", arr);
		console.log(arr);
		disableButtons();
	});
	merge.addEventListener("click", () => {
		arr = mergeSort(".div__container", arr);
		console.log(arr);
		disableButtons();
	});

	insertion.addEventListener("click", () => {
		arr = insertionSort(".div__container", arr);
		console.log(arr);
		disableButtons();
	});
});
