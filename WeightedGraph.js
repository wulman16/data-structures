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
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // Time complexity: O(n(log(n)))
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this._sort();
  }

  dequeue() {
    return this.values.shift();
  }

  _sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
