export function makeList(walls) {
	// size of walls = vertices + 1 cuz 0 is nothing
	// walls = [ 0 0 0 .... 1 ... 0 ] --> 1 indicates wall at its index
	var adjList = [];
	for (var i = 0; i <= 170; i++) {
		adjList.push(Array());
	}
	for (var i = 1; i <= 170; i++) {
		if (walls[i] != 1) {
			if (i % 17 != 0 && walls[i + 1] != 1) {
				adjList[i].push(i + 1);
				adjList[i + 1].push(i);
			}
			if (i <= 170 - 17 && walls[i + 17] != 1) {
				adjList[i].push(i + 17);
				adjList[i + 17].push(i);
			}
		}
	}
	// for (var i = 0; i <= 170; i++) {
	// 	for (var j = 0; j < adjList[i].length - 1; j++) {
	// 		var swap = Math.random() > 0.5;
	// 		var index = Math.floor(Math.random() * adjList[i].length);
	// 		if (swap) {
	// 			var temp = adjList[i][j];
	// 			adjList[i][j] = adjList[i][index];
	// 			adjList[i][index] = temp;
	// 		}
	// 	}
	// }
	return adjList;
}
