export function bfs(list, boxes) {
	class Node {
		constructor(data) {
			this.data = data;
			this.next = null;
		}
	}
	class Queue {
		constructor() {
			this.first = null;
			this.last = null;
			this.length = 0;
		}
		isEmpty() {
			return this.length == 0;
		}
		enqueue(x) {
			if (this.length == 0) {
				this.first = new Node(x);
				this.last = this.first;
			} else {
				var node = new Node(x);
				this.last.next = node;
				this.last = node;
			}
			this.length++;
		}

		dequeue() {
			if (this.isEmpty()) {
				console.log("Error: Empty Queue");
				return;
			}
			var temp = this.first;
			this.first = this.first.next;
			this.length--;
			return temp;
		}
	}

	var visited = Array(171).fill(0);
	var queue = new Queue();
	queue.enqueue(boxes[1]);
	var found = false;
	var count = 1;
	var prev = undefined;
	let x = function () {
		if (prev != undefined) {
			prev.style.border = "1px solid rgb(214, 205, 205)";
		}
		var top = queue.dequeue().data;
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
					queue.enqueue(boxes[list[u][j]]);
				}
			}
		}
		if (queue.isEmpty()) {
			if (curr != undefined) {
				curr.style.border = "1px solid rgb(214, 205, 205)";
			}
			if (prev != undefined) {
				prev.style.border = "1px solid rgb(214, 205, 205)";
			}
		}
		if (found) {
			alert("Path found!");
		}
	};
	let y = setInterval(() => {
		x();
		if (queue.isEmpty() || found) {
			clearInterval(y);
		}
	}, 40);
}
