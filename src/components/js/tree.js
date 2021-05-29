/**
 * 树结构 相关
 * 遍历 转换
 * https://mp.weixin.qq.com/s/dgY6cKOju2UpUEQk-7jHJQ
 */

console.log('---tree---');

const tree = [
  {
    id: '1',
    title: '节点1',
    children: [
      {
        id: '1-1',
        title: '节点1-1',
      },
      {
        id: '1-2',
        title: '节点1-2',
      },
    ],
  },
  {
    id: '2',
    title: '节点2',
    children: [
      {
        id: '2-1',
        title: '节点2-1',
      },
    ],
  },
];

// 广度优先遍历
function treeForEach(tree, func) {
  let node; const
    list = [...tree];
  // eslint-disable-next-line no-cond-assign
  while (node = list.shift()) {
    func(node);
    node.children && list.push(...node.children);
  }
}

treeForEach(tree, (node) => { console.log(node.title); });
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
  tree.forEach((ele) => {
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
treeRecursion(tree, (node) => { console.log(node.title); });

// 列表转为树
const list = [
  {
    id: '1',
    title: '节点1',
    parentId: '',
  },
  {
    id: '1-1',
    title: '节点1-1',
    parentId: '1',
  },
  {
    id: '1-2',
    title: '节点1-2',
    parentId: '1',
  },
  {
    id: '2',
    title: '节点2',
    parentId: '',
  },
  {
    id: '2-1',
    title: '节点2-1',
    parentId: '2',
  },
];

function listToTree(list) {
  const info = list.reduce((map, node) => (map[node.id] = node, node.children = [], map), {});
  console.log(info, 'info');
  return list.filter((node) => {
    info[node.parentId] && info[node.parentId].children.push(node);
    return !node.parentId;
  });
}

const treeList = listToTree(list);
console.log(treeList, 'treeList');

// 树结构转为列表
function treeToList(tree, result = [], level = 0) {
  tree.forEach((node) => {
    result.push(node);
    node.level = level + 1;
    node.children && treeToList(node.children, result, level);
  });

  return result;
}

console.log(treeToList(treeList));

// 树节点筛选
function treeFilter(tree, func) {
  return tree.map((node) => ({ ...node })).filter((node) => {
    node.children = node.children && treeFilter(node.children, func);
    return func(node) || (node.children && node.children.length);
  });
}

console.log(treeFilter(tree, (node) => node.id === '1'), 'treeFilter');

// 树节点查找
function treeFind(tree, func) {
  for (const data of tree) {
    if (func(data)) return data;
    if (data.children && data.children.length) {
      const res = treeFind(data.children, func);
      if (res) return res;
    }
  }
  return null;
}

console.log(treeFind(tree, (node) => node.id === '2'), 'tree find');
