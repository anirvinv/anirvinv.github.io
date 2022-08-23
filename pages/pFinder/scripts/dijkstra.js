export function dijkstra(list, boxes) {
	var pred = Array(171).fill(-1);
	var dist = Array(171).fill(9999);
	var visited = Array(171).fill(false);
	dist[1] = 0;
	for (var i = 1; i <= 170; i++) {
		visited[i] = true;
		for (let u = 0; u < list[i].length; u++) {
			if (visited[list[i][u]]) continue;
			// weight of all edges = 1
			if (dist[i] + 1 < dist[list[i][u]]) {
				dist[list[i][u]] = dist[i] + 1;
				pred[list[i][u]] = i;
			}
		}
	}
	var path = [170];
	let k = 170;
	while (k != 1 && k != -1) {
		path.push(pred[k]);
		k = pred[k];
	}
	console.log(k);
	path.reverse();

	if (k != 1) {
		alert("No path found");
		return;
	}
	let idx = 0;
	let y = setInterval(() => {
		console.log(idx);
		if (idx == path.length) {
			clearInterval(y);
			return;
		}
		if (path[idx] != 1 && path[idx] != 170) {
			boxes[path[idx]].style.border = "4px solid red";
		}
		idx++;
	}, 30);
}
