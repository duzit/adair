
// 取两个数组中的相同项
function getSameItem(source, target, id = 'id') {
  if (!source || !source.length) return [];
  if (!target || !target.length) return [];
  const arr = [];
  source.forEach((item) => {
    const finded = target.find((sel) => sel[id] === item[id]);
    finded && arr.push(finded);
  });
  return arr;
}

// 取两个数组中的不同项
// target 在 source 中的不同
function getDiffItem(source, target, id = 'id') {
  if (!source || !source.length) return [];
  if (!target || !target.length) return [];
  const arr = [];
  for (let i = 0; i < source.length; i++) {
    const obj = source[i];
    const num = obj[id];
    let isExist = false;
    for (let j = 0; j < target.length; j++) {
      const aj = target[j];
      const n = aj[id];
      if (n === num) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      arr.push(obj);
    }
  }
  return arr;
}

const arrSet11 = [
  {
    id: 1,
    label: 'name',
  },
  {
    id: 2,
    label: 'name2',
  },
];

const arrSet22 = [
  {
    id: 1,
    label: 'name',
  },
  {
    id: 3,
    label: 'name3',
  },
];

const arrSet33 = [
  {
    id: 4,
    label: 'name4',
  },
  {
    id: 3,
    label: 'name3',
  },
];

const same1 = getSameItem(arrSet11, arrSet22, 'id');
const same2 = getSameItem(arrSet11, arrSet33, 'id');
console.log(same1, 'same1');
console.log(same2, 'same2');

// 顺序不同 结果也不同
const diff = getDiffItem(arrSet11, arrSet22, 'id');
const diff2 = getDiffItem(arrSet22, arrSet11, 'id');
const diff3 = getDiffItem(arrSet11, arrSet33, 'id');
console.log(diff, 'diff');
console.log(diff2, 'diff2');
console.log(diff3, 'diff3');
