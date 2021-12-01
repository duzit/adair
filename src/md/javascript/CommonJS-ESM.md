# CommonJs - ES module

- [参考](https://mp.weixin.qq.com/s/mbEb2fCCqVEXJCtX_5_8bg)

## CommonJs 
- 定义模块，提供通用的模块组织方式。

### 模块定义和使用 
- 一个文件就是一个模块，导出通过 exports 或者 module.exports 挂载。

```js
exports.count = 1;
```

- 导入模块 require

```js
const counter = require('./counter');
console.log(counter.count);
```

- CommonJs 的模块主要由原生模块 module 实现

```js
Module {
  id: '.', // 如果是 mainModule id 固定为 '.'，如果不是则为模块绝对路径
  exports: {}, // 模块最终 exports
  filename: '/absolute/path/to/entry.js', // 当前模块的绝对路径
  loaded: false, // 模块是否已加载完毕
  children: [], // 被该模块引用的模块
  parent: '', // 第一个引用该模块的模块
  paths: [ // 模块的搜索路径
   '/absolute/path/to/node_modules',
   '/absolute/path/node_modules',
   '/absolute/node_modules',
   '/node_modules'
  ]
}
```

### 模块的查找过程 
- 在创建模块对象时，会有 paths 属性，其值是由当前文件路径计算得到的，从当前目录一直到系统根目录的 node_modules 
```js
[ 
  '/Users/evan/Desktop/demo/node_modules',
  '/Users/evan/Desktop/node_modules',
  '/Users/evan/node_modules',
  '/Users/node_modules',
  '/node_modules'
]
```

- 除此之外 还会查找全局路径
```js
[
  execPath/../../lib/node_modules, // 当前 node 执行文件相对路径下的 lib/node_modules
  NODE_PATH, // 全局变量 NODE_PATH
  HOME/.node_modules, // HOME 目录下的 .node_module
  HOME/.node_libraries // HOME 目录下的 .node-libraries
]
```

### 缓存和循环引用
- 文件模块的查找挺耗时的，如果每次 require 都需要重新遍历文件夹查找，性能会比较差。  
  CommonJs 的缓存可以解决重复查找和重复执行的问题，模块加载过程中会以模块绝对路径为 key，  
  module 对象为 value 写入 cache。在读取模块时会优先判断是否已经存在缓存中，如果在，  
  直接返回 module.exports ，否则进入模块查找的流程，找到模块后再写入 cache。


## ES Module
- 使用 import export 关键字来进行模块输入输出。  
  ES6模块代码最终会被 babel TypeScript 等工具处理成 CommonJs

### 加载过程 
  1. 查找，下载，解析，构建所有模块实例  
  - ES6模块会在程序开始前先根据模块关系查找所有的模块，生成一个无环关系图，并将所有的模块实例  
    都创建好，这样避免了循环引用的问题，当然也有模块加载缓存，重复 import 同一个模块，只会执行一次代码。
  
  2. 在内存中腾出空间给即将 export 的内容（此时尚未写入 export value），然后使 import 和 export 指向  
  内存中的这些空间，这个过程也叫连接。
  - 这一步完成工作的是 living binding import export  

  3. 运行模块代码，将变量的实际值写在第二步生成的空间中


## 差异点
1. CommonJs 可以在运行时使用变量进行 require ，如 `require(path.join('xxx', 'xxx.js'))`  
  而静态 import 语法（还有动态 import ，返回 Promise）不行，因为 ES6 模块会先解析所有模块再执行代码。  

2. require 引入的是完整的 exports 对象，import 可以只 import 部分需要的内容。

3. import 另一个模块没有的 export 的变量，在代码执行前就会报错，而 CommonJs 是在模块运行时才报错。