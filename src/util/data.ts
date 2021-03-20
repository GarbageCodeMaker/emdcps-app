// 左侧导航栏数据
const leftNavItems: Array<object> = [
  {
    index: '1',
    navName: '首页',
    path: '/home',
  },
  {
    index: '2',
    navName: '测试',
    children: [
      {
        index: '2-1',
        navName: 'test1',
        path: '/test1',
      },
      {
        index: '2-2',
        navName: 'test2',
        path: '/test2',
      },
    ],
  },
];
// 隐患统计表格数据
const hiddenDangerTableData: Array<object> = [
  {
    line: '11号线',
    oneLevel: 0,
    twoLevel: 39,
    treeLevel: 2320,
    fourLevel: 2202,
    sum: 4561,
  },
  {
    line: '16号线',
    oneLevel: 0,
    twoLevel: 1038,
    treeLevel: 18781,
    fourLevel: 13455,
    sum: 33274,
  },
  {
    line: '22号线',
    oneLevel: 0,
    twoLevel: 2,
    treeLevel: 53,
    fourLevel: 42,
    sum: 97,
  },
  {
    line: '机场西延',
    oneLevel: 0,
    twoLevel: 20,
    treeLevel: 490,
    fourLevel: 490,
    sum: 1000,
  },
  {
    line: '平西府',
    oneLevel: 0,
    twoLevel: 10,
    treeLevel: 212,
    fourLevel: 137,
    sum: 359,
  },
  {
    line: '16号线',
    oneLevel: 0,
    twoLevel: 37,
    treeLevel: 273,
    fourLevel: 149,
    sum: 459,
  },
];

export default {
  leftNavItems,
  hiddenDangerTableData,
};
