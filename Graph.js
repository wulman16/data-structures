/*
  Adjacency List (what this graph class uses)
  - Can take up less space
  - Faster to iterate over all edges
  - Can be slower to look up a specific edge

  Adjacency Matrix
  - Takes up more space
  - Slower to iterate over all edges
  - Faster to look up a specific edge
*/

// undirected, unweighted graph
// lacks error handling
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Time complexity: O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  // Time complexity: O(1)
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Time complexity: O(|E|)
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => {
      return v !== vertex2;
    });
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => {
      return v !== vertex1;
    });
  }

  // Time complexity: O(|V| + |E|)
  removeVertex(vertex) {
    for (let v of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, v);
    }
    delete this.adjacencyList[vertex];
  }
}
