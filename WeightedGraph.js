class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  // find the shortest path between two given vertices
  // Time complexity: O(|V|^2)
  dijkstrasAlgorithm(startVertex, endVertex) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === endVertex) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          const nextNode = this.adjacencyList[smallest][neighbor];
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // update new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // update previous (how we got to neighbor)
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

// {
//   A: [{ node: "B", weight: 4 }, { node: "C", weight: 2 }],
//       B: [{ node: "A", weight: 4 }, { node: "E", weight: 3 }],
//       C: [
//         { node: "A", weight: 2 },
//         { node: "D", weight: 2 },
//         { node: "F", weight: 4 }
//       ],
//       D: [
//         { node: "C", weight: 2 },
//         { node: "E", weight: 3 },
//         { node: "F", weight: 1 }
//       ],
//       E: [
//         { node: "D", weight: 3 },
//         { node: "F", weight: 1 },
//         { node: "B", weight: 3 }
//       ],
//       F: [
//         { node: "E", weight: 1 },
//         { node: "D", weight: 1 },
//         { node: "C", weight: 4 }
//       ]
//     }
