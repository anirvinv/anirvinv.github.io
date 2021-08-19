export function insertionSort(parent, array) {
	let arr = [...array];

	let parentElement = document.querySelector(parent);
	let childDivs = parentElement.querySelectorAll("div");
	let childDivColor = childDivs[0].style.backgroundColor;
	let temp = 0;
	let count = 0;

	for (let j = 1; j < arr.length; j++) {
		for (let i = 0; i < j; i++) {
			count++;
			setTimeout(() => {
				childDivs[i].style.backgroundColor = "rgb(221, 120, 120)";
				// childDivs[j].style.backgroundColor = "rgb(221, 120, 120)";
				if (arr[j] < arr[i]) {
					temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;

					let tempHeight = childDivs[j].style.height;
					childDivs[j].style.height = childDivs[i].style.height;
					childDivs[i].style.height = tempHeight;
				}
			}, 3 * count);
			setTimeout(() => {
				childDivs.forEach((element) => {
					element.style.backgroundColor = childDivColor;
				});
			}, 6 * count);
		}
	}
	return arr;
}
