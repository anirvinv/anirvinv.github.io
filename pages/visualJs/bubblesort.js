export function bubbleSort(parent, array) {
	let arr = [...array];

	let parentElement = document.querySelector(parent);
	let childDivs = parentElement.querySelectorAll("div");
	let childDivColor = childDivs[0].style.backgroundColor;
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			count++;
			setTimeout(() => {
				childDivs[j].style.backgroundColor = "rgb(221, 120, 120)";
				childDivs[j + 1].style.backgroundColor = "rgb(221, 120, 120)";

				if (arr[j] > arr[j + 1]) {
					let temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;

					let tempHeight = childDivs[j].style.height;
					childDivs[j].style.height = childDivs[j + 1].style.height;
					childDivs[j + 1].style.height = tempHeight;

					let tempText = childDivs[j].innerText;
					childDivs[j].innerText = childDivs[j + 1].innerText;
					childDivs[j + 1].innerText = tempText;
				}
			}, 4 * count);
			setTimeout(() => {
				childDivs.forEach((element) => {
					element.style.backgroundColor = childDivColor;
				});
			}, 6 * count);
		}
	}
	return arr;
}
