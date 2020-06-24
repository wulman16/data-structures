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
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
      return v !== vertex2;
    });
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => {
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

  // Time complexity: O(|V| + |E|)
  DFSRecursive(startVertex) {
    const result = [];
    const visited = {};
    const traverse = (vertex) => {
      if (this.adjacencyList[vertex].length === 0) return;
      result.push(vertex);
      visited[vertex] = true;
      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) traverse(neighbor);
      }
    };
    traverse(startVertex);
    return result;
  }

  // Time complexity: O(|V| + |E|)
  DFSIterative(startVertex) {
    const result = [];
    const visited = {};
    const stack = [startVertex];
    while (stack.length > 0) {
      let vertex = stack.pop();
      result.push(vertex);
      visited[vertex] = true;
      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) stack.push(neighbor);
      }
    }
    return result;
  }

  // Time complexity: O(|V| + |E|)
  BFSIterative(startVertex) {
    const result = [];
    const visited = [];
    const queue = [startVertex];
    while (queue.length > 0) {
      let vertex = queue.shift();
      result.push(vertex);
      visited[vertex] = true;
      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) queue.push(neighbor);
      }
    }
    return result;
  }
}
