export function selectionSort(parent, array) {
	let arr = [...array];
	let parentElement = document.querySelector(parent);
	let childDivs = parentElement.querySelectorAll("div");
	let childDivColor = childDivs[0].style.backgroundColor;

	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		count++;
		setTimeout(() => {
			let min = arr[i];
			let minIndex = i;
			let minChild = childDivs[i];
			for (let j = i; j < arr.length; j++) {
				if (arr[j] < min) {
					min = arr[j];
					minIndex = j;
				}
			}
			let temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;

			let tempHeight = childDivs[i].style.height;
			childDivs[i].style.height = childDivs[minIndex].style.height;
			childDivs[minIndex].style.height = tempHeight;
			minChild.style.backgroundColor = "rgb(221,120,120)";
			setTimeout(() => {
				childDivs.forEach((element) => {
					element.style.backgroundColor = childDivColor;
				});
			}, 150);
		}, count * 100);
	}
	return arr;
}
