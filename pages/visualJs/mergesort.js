export function mergeSort(parent, array) {
	var globalArray = [...array];
	var globalCount = 0;

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

	function merge(parent, array1, array2) {
		//Assumes that arr1 and arr2 are sorted already
		let arr1 = [...array1];
		let arr2 = [...array2];
		let mergedArr = [];
		let finalLength = arr1.length + arr2.length;

		while (mergedArr.length < finalLength) {
			if (arr1.length == 0) {
				mergedArr = mergedArr.concat(arr2);
				break;
			}
			if (arr2.length == 0) {
				mergedArr = mergedArr.concat(arr1);
				break;
			}
			if (arr1[0] <= arr2[0]) {
				mergedArr.push(arr1[0]);
				arr1 = arr1.slice(1);
			} else {
				mergedArr.push(arr2[0]);
				arr2 = arr2.slice(1);
			}
		}
		return mergedArr;
	}
	function mergeSort2(parent, array) {
		const arr = [...array];
		const left = 0;
		const right = arr.length;

		const middle = parseInt((left + right) / 2);

		if (arr.length == 1) {
			return arr;
		} else {
			// Left half
			const leftArr = arr.slice(0, middle);
			// Right half
			const rightArr = arr.slice(middle);

			// Left partition
			const leftPartition = mergeSort(parent, leftArr);
			// Right partition
			const rightPartition = mergeSort(parent, rightArr);

			return merge(parent, leftPartition, rightPartition);
		}
	}

	function iterativeMergeSort(parent, array) {
		let copy = array.map((element) => [element]);
		let copy1 = [];
		let i = 0;

		while (i < copy.length - 1) {
			copy1.push(merge(parent, copy[i], copy[i + 1]));
			i += 2;
		}
		if (copy.length % 2 != 0) {
			copy1.append(copy[copy.length - 1]);
		}
		let n = array.length;
		let groupSize = 2;
		let count = 0;

		let stepArrays = [];

		while (groupSize < n) {
			let copy2 = [];
			let j = 0;
			while (j < copy1.length - 1) {
				copy2.push(merge(parent, copy1[j], copy1[j + 1]));
				groupSize = copy2[0].length;
				j += 2;
			}
			if (copy1.length % 2 != 0) {
				copy2.push(copy1[copy1.length - 1]);
			}
			copy1 = [];
			let k = 0;
			while (k < copy2.length - 1) {
				copy1.push(merge(parent, copy2[k], copy2[k + 1]));
				groupSize = copy1[0].length;
				k += 2;
			}
			if (copy2.length % 2 != 0) {
				copy1.push(copy2[copy2.length - 1]);
			}
			stepArrays.push(copy1);
			count++;
		}
		let parentElement = document.querySelector(parent);
		let childDivs = parentElement.querySelectorAll("div");
		let childDivColor = childDivs[0].style.backgroundColor;
		stepArrays.forEach((array, index) => {
			setTimeout(() => {
				styleNestedDivs(parent, array.flat(Infinity));
			}, 900 * index);
		});

		return copy1;
	}
	let arr = [...array];
	let sorted = iterativeMergeSort(parent, arr);

	return sorted;
}
