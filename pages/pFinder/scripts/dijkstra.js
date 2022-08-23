export function dijkstra(list, boxes, walls) {
	var totalBoxes = boxes.length - 1;
	walls.forEach((element) => {
		totalBoxes -= element;
	});
	var pred = Array(171).fill(-1);
	var dist = Array(171).fill(9999);
	var visited = Array(171).fill(false);
	dist[1] = 0;
	for (var i_ = 1; i_ <= totalBoxes; i_++) {
		var v = -1;
		for (let j = 1; j <= 170; j++) {
			if (walls[j] != 1) {
				if (!visited[j] && (v == -1 || dist[j] < dist[v])) {
					v = j;
				}
			}
		}
		if (v == -1 || dist[v] == 9999) {
			break;
		}
		visited[v] = true;
		for (let u = 0; u < list[v].length; u++) {
			if (visited[list[v][u]]) continue;
			// weight of all edges = 1
			if (dist[v] + 1 < dist[list[v][u]]) {
				dist[list[v][u]] = dist[v] + 1;
				pred[list[v][u]] = v;
			}
		}
	}
	var path = [170];
	var k = 170;
	while (k != -1) {
		path.push(pred[k]);
		k = pred[k];
	}
	path.reverse();
	path.forEach((e) => {
		console.log(e);
	});
	// if (k == -1) {
	// 	path.forEach((i) => {
	// 		console.log(i);
	// 	});
	// 	alert("No path found");
	// 	return;
	// }

	var idx = 0;
	let y = setInterval(() => {
		if (idx == path.length) {
			clearInterval(y);
			return;
		}
		if (path[idx] != 1 && path[idx] != -1 && path[idx] != 170) {
			boxes[path[idx]].style.border = "4px solid red";
		}
		idx++;
	}, 30);
}
