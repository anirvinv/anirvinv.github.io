export function dfs(list, boxes) {
	var visited = Array(171).fill(0);
	var stack = [boxes[1]];
	var found = false;
	var count = 1;
	var prev = undefined;
	let x = function () {
		if (prev != undefined) {
			prev.style.border = "1px solid rgb(214, 205, 205)";
		}
		var top = stack.pop();
		var u = top.dataset.val;
		var curr = top;
		// console.log(u);
		if (u != 1 && u != 170) {
			curr.style.backgroundColor = "#7db5ff";
			curr.style.border = "4px solid white";
		}
		prev = curr;
		if (u == 170) {
			found = true;
		}

		if (!found && visited[u] != 1) {
			visited[u] = 1;
			for (var j = 0; j < list[u].length; j++) {
				if (visited[list[u][j]] == 0) {
					visited[boxes[list[u][j]]] = 1;
					stack.push(boxes[list[u][j]]);
				}
			}
		}
	};
	let y = setInterval(() => {
		x();
		if (stack.length == 0 || found) {
			clearInterval(y);
		}
	}, 100);
}
