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

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // Time complexity: O(log(n))
  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    let idx = this.values.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (idx > 0) {
      if (this.values[parentIdx].priority <= newNode.priority) break;
      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx]
      ];
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
    return this;
  }

  // Time complexity: O(log(n))
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
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
