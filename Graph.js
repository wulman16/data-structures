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

  iterativeDFS(startVertex) {
    const results = [];
    const visited = {};
    let stack = [startVertex];
    let currentVertex;
    while (stack.length > 0) {
      currentVertex = stack.pop();
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        results.push(currentVertex);
        stack = stack.concat(this.adjacencyList[currentVertex]);
      }
    }
    return results;
  }
}

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

  // Time complexity: O(|V| + |E|)
  DFSRecursive(startVertex) {
    let results = [];
    let visited = {};
    const DFS = vertex => {
      if (this.adjacencyList[vertex].length === 0) return;
      results.push(vertex);
      visited[vertex] = true;
      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          DFS(neighbor);
        }
      }
    };
    DFS(startVertex);
    return results;
  }

  // Time complexity: O(|V| + |E|)
  DFSIterative(startVertex) {
    const results = [];
    // store the vertices in a stack (last in, first out)
    let stack = [startVertex];
    const visited = {};
    visited[startVertex] = true;
    let vertex;
    while (stack.length > 0) {
      vertex = stack.pop();
      if (!visited[vertex]) {
        results.push(vertex);
        visited[vertex] = true;
        stack = stack.concat(this.adjacencyList[vertex]);
      }
    }
    return results;
  }

  // Time complexity: O(|V| + |E|)
  BFSIterative(startVertex) {
    const results = [];
    // store the vertices in a queue (first in, first out)
    let queue = [startVertex];
    const visited = {};
    let vertex;
    while (queue.length > 0) {
      vertex = queue.shift();
      if (!visited[vertex]) {
        results.push(vertex);
        visited[vertex] = true;
        queue = queue.concat(this.adjacencyList[vertex]);
      }
    }
    return results;
  }
}
