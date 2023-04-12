const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BinarySearchTree {
  constructor(rootNode=null) {
    this.rootNode = rootNode;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.rootNode === null) {
      this.rootNode = new Node(data);
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else {
            return searchTree(node.right);
          }
        }
      };
      return searchTree(this.rootNode);
    }
  }

  has(data) {
    let currentNodeNodeNodeNode = this.rootNode;
    while (currentNodeNodeNodeNode) {
      if (data === currentNodeNodeNodeNode.data) {
        return true;
      }
      if (data < currentNodeNodeNodeNode.data) {
        currentNodeNodeNodeNode = currentNodeNodeNodeNode.left;
      } else {
        currentNodeNodeNodeNode = currentNodeNodeNodeNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNodeNodeNode = this.rootNode;
    while (currentNodeNodeNode && currentNodeNodeNode.data !== data) {
      if (data < currentNodeNodeNode.data) {
        currentNodeNodeNode = currentNodeNodeNode.left;
      } else {
        currentNodeNodeNode = currentNodeNodeNode.right;
      }
    }
    return currentNodeNodeNode;
  }

  remove(data) {
    const removeNode = function(node, data) {
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let helperNode = node.right;
        while (helperNode.left !== null) {
          helperNode = helperNode.left;
        }
        node.data = helperNode.data;
        node.right = removeNode(node.right, helperNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let currentNodeNode = this.rootNode;
    while (currentNodeNode.left !== null) {
      currentNodeNode = currentNodeNode.left;
    }
    return currentNodeNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};