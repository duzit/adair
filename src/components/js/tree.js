/**
 * 树结构 相关
 * 遍历 转换
 */

console.log('---tree---');

let tree = [
  {
    id: '1',
    title: '节点1',
    children: [
      {
        id: '1-1',
        title: '节点1-1'
      },
      {
        id: '1-2',
        title: '节点1-2'
      }
    ]
  },
  {
    id: '2',
    title: '节点2',
    children: [
      {
        id: '2-1',
        title: '节点2-1'
      }
    ]
  }
]

// 广度优先遍历
function treeForEach(tree, func) {
  let node, list = [...tree];
  while (node = list.shift()) {
    func(node)
    node.children && list.push(...node.children)
  }
}

treeForEach(tree, node => { console.log(node.title); })
// 先遍历第一层数据 然后类推
// 节点1
// 节点2
// 节点1-1
// 节点1-2
// 节点2-1

console.log('----------');

// 深度遍历 递归
// 
function treeRecursion(tree, func) {
  tree.forEach(ele => {
    // 后序遍历
    ele.children && treeRecursion(ele.children, func);
    // 节点1-1
    // 节点1-2
    // 节点1
    // 节点2-1
    // 节点2
    func(ele);
    // 先序遍历
    // ele.children && treeRecursion(ele.children, func);
    // 节点1
    // 节点1-1
    // 节点1-2
    // 节点2
    // 节点2-1
  });
}
treeRecursion(tree, node => { console.log(node.title); })

