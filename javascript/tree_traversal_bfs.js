class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {
  if (!root) return [];
  const queue = [root];
  const result = [root.value];

  while (queue.length > 0) {
    const current = queue.shift();
    const left = current.left;
    const right = current.right;
    if (left) {
      queue.push(left);
      result.push(left.value);
    }
    if (right) {
      queue.push(right);
      result.push(right.value);
    }
  }

  return result;
}

if (require.main === module) {
  let root = new Node(1, new Node(2), new Node(3));
  // add your own tests in here
  console.log("Expecting: [[1], [2, 3]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30));

  console.log("Expecting: [[10], [20, 30], [9, 22]]");
  console.log(levelOrderTraversal(root));
}

module.exports = {
  Node,
  levelOrderTraversal,
};

// Please add your pseudocode to this file
// And a written explanation of your solution
