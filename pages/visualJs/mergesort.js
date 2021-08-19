export function mergeSort(parent, array) {
	var globalArray = [...array];
	var globalCount = 0;

	function styleNestedDivs(parent, arr) {
		let parentElement = document.querySelector(parent);
		let childDivs = parentElement.querySelectorAll("div");

		childDivs.forEach((childDiv, index) => {
			// childDiv.style.width = `${parseInt(60 / childDivs.length)}%`;
			childDiv.style.width = "6px";
			childDivs[index].style.height = `${arr[index] * 4}px`;
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

	function subArraySizes(twoDimArray) {
		let arr = [...twoDimArray];
		let sizes = [];

		arr.forEach((subArr) => {
			sizes.push(subArr.length);
		});
		return sizes;
	}

	function transpose(twoDimArray) {
		let arr = [...twoDimArray];

		let transposed = [];
		let i = 0;
		let row = [];
		for (let j = 0; j < arr[0].length; j++) {
			row = [];
			for (let i = 0; i < arr.length; i++) {
				row.push(arr[i][j]);
			}
			transposed.push(row);
		}

		return transposed;
	}

	function lightUpIndices(arraySizes) {
		let sizes = [...arraySizes];
		let indices = [];
		let count = 0;
		let arr = [];
		sizes.forEach((size) => {
			arr = [];
			for (let i = 0; i < size; i++) {
				arr.push(i + count);
			}
			indices.push(arr);
			count += size;
		});
		return indices;
	}
	let parentElement = document.querySelector(parent);
	let childDivs = parentElement.querySelectorAll("div");
	let childDivColor = childDivs[0].style.backgroundColor;

	function clearChildDivColor() {
		childDivs.forEach((element) => {
			element.style.backgroundColor = childDivColor;
		});
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
			copy1.push(copy[copy.length - 1]);
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
			stepArrays.push(copy2);
			stepArrays.push(copy1);
			count++;
		}
		let parentElement = document.querySelector(parent);
		let childDivs = parentElement.querySelectorAll("div");
		let childDivColor = childDivs[0].style.backgroundColor;
		let iterator = 0;
		stepArrays.forEach((array, index) => {
			setTimeout(() => {
				let sizes = subArraySizes(array);
				let indexList = lightUpIndices(sizes);
				let transposedIndexList = transpose(indexList);
				transposedIndexList.forEach((list) => {
					iterator++;
					setTimeout(() => {
						list.forEach((e, index) => {
							if (e) {
								{
									childDivs[e].style.backgroundColor = "red";
								}
							}
						});
					}, 4 * iterator);

					setTimeout(() => {
						clearChildDivColor();
					}, 5 * iterator);
				});

				styleNestedDivs(parent, array.flat(Infinity));
			}, 1200 * index);
		});

		return copy1;
	}
	let arr = [...array];
	let sorted = iterativeMergeSort(parent, arr);
	return sorted;
}
