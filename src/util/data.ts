// 左侧导航栏数据
const leftNavItems: Array<object> = [
  {
    index: 'Index',
    navName: '首页',
    path: '/home',
  },
  {
    index: '2',
    navName: '隐患管理',
    children: [
      {
        index: 'HiddenDangerReport',
        navName: '隐患上报',
      },
      {
        index: '2-2',
        navName: '隐患处置',
        path: '/',
      },
      {
        index: '2-3',
        navName: '施工单位隐患排查月报',
        path: '/',
      },
      {
        index: '2-4',
        navName: '隐患统计',
        children: [
          {
            index: '2-4-1',
            navName: '各月隐患统计',
            path: '',
          },
          {
            index: '2-4-2',
            navName: '隐患分类汇总统计',
            path: '',
          },
          {
            index: '2-4-3',
            navName: '隐患分类统计',
            path: '',
          },
          {
            index: '2-4-4',
            navName: '隐患各标段统计',
            path: '',
          },
          {
            index: '2-4-5',
            navName: '新增一、二级隐患情况',
            path: '',
          },
          {
            index: '2-4-6',
            navName: '施工单位月末统计报表',
            path: '',
          },
          {
            index: '2-4-7',
            navName: '安全隐患排查整改台账',
            path: '',
          },
        ],
      },
      {
        index: '2-5',
        navName: '隐患指标审核',
        path: '/',
      },
    ],
  },
  {
    index: '3',
    navName: '质量管理',
    children: [
      {
        index: '3-1',
        navName: '不合格试验报告',
        path: '',
      },
      {
        index: '3-2',
        navName: '不合格试验处置',
        path: '',
      },
      {
        index: '3-3',
        navName: '检测方案',
        path: '',
      },
      {
        index: '3-4',
        navName: '试验类别管理',
        path: '',
      },
      {
        index: '3-5',
        navName: '试验指标管理',
        path: '',
      },
    ],
  },
  {
    index: '4',
    navName: '监管履责',
    chidren: [
      {
        index: '4-1',
        navName: '监理问题上报',
        path: '',
      },
      {
        index: '4-2',
        navName: '监理问题处置',
        path: '',
      },
      {
        index: '4-3',
        navName: '监理问题统计',
        path: '',
      },
    ],
  },
  {
    index: '5',
    navName: '风险预警管理',
    children: [
      {
        index: '5-1',
        navName: '风险源管理',
        children: [
          {
            index: '5-2',
            navName: '风险源动态核查',
            path: '',
          },
          {
            index: '5-3',
            navName: '风险源统计',
            path: '',
          },
          {
            index: '5-4',
            navName: '风险源级别统计',
            path: '',
          },
          {
            index: '5-5',
            navName: '风险源状态统计',
            path: '',
          },
        ],
      },
      {
        index: '5-2',
        navName: '风险预警',
        children: [
          {
            index: '5-2-1',
            navName: '预警事件上报',
            path: '',
          },
          {
            index: '5-2-2',
            navName: '预警事件处理',
            path: '',
          },
          {
            index: '5-2-3',
            navName: '预警指标审核',
            path: '',
          },
          {
            index: '5-2-4',
            navName: '预警消警处置',
            path: '',
          },
          {
            index: '5-2-5',
            navName: '预警消警资料',
            path: '',
          },
        ],
      },
      {
        index: '5-3',
        navName: '其他风险问题',
        children: [
          {
            index: '5-3-1',
            navName: '风险常规问题',
            path: '',
          },
          {
            index: '5-3-2',
            navName: '工作联系单',
            path: '',
          },
          {
            index: '5-3-3',
            navName: '风险咨询工作报告',
            path: '',
          },
        ],
      },
      {
        index: '5-4',
        navName: '风险预警统计',
        children: [
          {
            index: '5-4-1',
            navName: '风险预警统计',
            path: '',
          },
          {
            index: '5-4-2',
            navName: '风险预警统计(含降级预警)',
            path: '',
          },
          {
            index: '5-4-3',
            navName: '监理单位风险预警统计',
            path: '',
          },
          {
            index: '5-4-4',
            navName: '施工单位风险预警统计',
            path: '',
          },
          {
            index: '5-4-5',
            navName: '第三方单位风险预警统计',
            path: '',
          },
        ],
      },
      {
        index: '5-5',
        navName: '危大方案',
        children: [
          {
            index: '5-5-1',
            navName: '危大工程动态核查',
            path: '',
          },
          {
            index: '5-5-2',
            navName: '危大工程统计',
            path: '',
          },
          {
            index: '5-5-3',
            navName: '危大方案资料',
            path: '',
          },
        ],
      },
    ],
  },
  {
    index: '6',
    navName: '履约管理',
    children: [
      {
        index: '6-1',
        navName: '履约罚单',
        path: '',
      },
      {
        index: '6-2',
        navName: '隐患整改超时统计',
        path: '',
      },
      {
        index: '6-3',
        navName: '隐患批示超时统计',
        path: '',
      },
      {
        index: '6-4',
        navName: '监理履责超时统计',
        path: '',
      },
      {
        index: '6-5',
        navName: '预警处置超时统计',
        path: '',
      },
      {
        index: '6-6',
        navName: '工作联系单超时统计',
        path: '',
      },
      {
        index: '6-7',
        navName: '风险常规问题超时统计',
        path: '',
      },
    ],
  },
  {
    index: '7',
    navName: '监控测量管理',
    children: [
      {
        index: '7-1',
        navName: '基础信息维护',
        path: '',
      },
      {
        index: '7-2',
        navName: '施工监测数据上报',
        path: '',
      },
      {
        index: '7-3',
        navName: '第三方监测数据上报',
        path: '',
      },
      {
        index: '7-4',
        navName: '监测数据查看',
        path: '',
      },
      {
        index: '7-5',
        navName: '监测预警查看',
        path: '',
      },
      {
        index: '7-6',
        navName: '监测数据对比',
        path: '',
      },
      {
        index: '7-7',
        navName: '监测比对资料',
        path: '',
      },
      {
        index: '7-8',
        navName: '第三方监测成果资料',
        path: '',
      },
      {
        index: '7-9',
        navName: '施工工况',
        path: '',
      },
    ],
  },
  {
    index: '8',
    navName: '盾构管理',
    children: [
      {
        index: '8-1',
        navName: '盾构实时监控',
        path: '',
      },
      {
        index: '8-2',
        navName: '盾构轴线预警',
        path: '',
      },
      {
        index: '8-3',
        navName: '盾构监控资料',
        path: '',
      },
    ],
  },
  {
    index: '9',
    navName: '应急管理',
    children: [
      {
        index: '9-1',
        navName: '应急管理',
        path: '',
      },
      {
        index: '9-2',
        navName: '体系文件',
        path: '',
      },
      {
        index: '9-3',
        navName: '应急组织',
        path: '',
      },
      {
        index: '9-4',
        navName: '应急资源',
        path: '',
      },
      {
        index: '9-5',
        navName: '应急演练',
        path: '',
      },
      {
        index: '9-6',
        navName: '应急抢险大队',
        path: '',
      },
      {
        index: '9-7',
        navName: '相关方联系方式',
        path: '',
      },
      {
        index: '9-8',
        navName: '应急资料维护',
        children: [
          {
            index: '9-8-1',
            navName: '体系文件',
            path: '',
          },
          {
            index: '9-8-2',
            navName: '应急演练',
            path: '',
          },
          {
            index: '9-8-3',
            navName: '应急组织',
            path: '',
          },
          {
            index: '9-8-4',
            navName: '应急物资',
            path: '',
          },
          {
            index: '9-8-5',
            navName: '相关联系方式',
            path: '',
          },
        ],
      },
      {
        index: '9-9',
        navName: '事故报警管理',
        children: [
          {
            index: '9-9-1',
            navName: '事故类型',
            path: '',
          },
          {
            index: '9-9-2',
            navName: '事故报警',
            path: '',
          },
        ],
      },
    ],
  },
  {
    index: '10',
    navName: '系统管理',
    children: [
      {
        index: '10-1',
        navName: '机构管理',
        path: '',
      },
      {
        index: '10-2',
        navName: '用户管理',
        path: '',
      },
      {
        index: '10-3',
        navName: '权限管理',
        path: '',
      },
      {
        index: '10-4',
        navName: '菜单管理',
        path: '',
      },
      {
        index: '10-5',
        navName: '预警分类管理',
        path: '',
      },
      {
        index: '10-6',
        navName: '预警指标管理',
        path: '',
      },
      {
        index: '10-7',
        navName: '隐患分类维护',
        path: '',
      },
      {
        index: '10-8',
        navName: '隐患指标管理',
        path: '',
      },
      {
        index: '10-9',
        navName: '监测分类维护',
        path: '',
      },
      {
        index: '10-10',
        navName: '微信提醒配置',
        path: '',
      },
      {
        index: '10-11',
        navName: '微信提醒日志',
        path: '',
      },
      {
        index: '10-12',
        navName: '监理资料分类',
        path: '',
      },
      {
        index: '10-13',
        navName: '公司简介',
        path: '',
      },
      {
        index: '10-14',
        navName: '通知公告',
        path: '',
      },
      {
        index: '10-15',
        navName: '快轨新闻',
        path: '',
      },
      {
        index: '10-16',
        navName: '用户申请',
        path: '',
      },
    ],
  },
  {
    index: '11',
    navName: '地图管理',
    children: [
      {
        index: '11-1',
        navName: '地图标注',
        path: '',
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
// 预警统计表格数据
const preliminaryTableData: Array<object> = [
  {
    line: '11号线',
    redLevel: 0,
    orangeLevel: 0,
    yellowLevel: 0,
    sum: 0,
  },
];
// 风险源统计表格数据
const riskSourceTableData: Array<object> = [
  {
    line: '11号线',
    notPass: 0,
    passing: 0,
    passed: 0,
    sum: 0,
  },
];
// 最新风险事件数据
const riskItemsData = [
  {
    riskEventData: {
      riskEventMsg: '11号线-土建-01标金顶街站隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '11号线-土建-01标金顶街站至金安桥站(不含)区间隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '11号线-土建-02标金安桥站隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '11号线-土建-01标金顶街站至金安桥站(不含)区间隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '机场西延-土建-机场线西延东北区间隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '机场西延-土建-机场线西延东北区间隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '11号线-土建-01标金顶街站隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '玉渊潭东门站16号线-土建-标段1702隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '达官营站16号线-土建-标段1902隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '红莲南里站16号线-土建-标段2002隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '达官营站16号线-土建-标段1902隐患',
      riskEventDate: '2021-01-31',
    },
  },
  {
    riskEventData: {
      riskEventMsg: '红莲南里站16号线-土建-标段2002隐患',
      riskEventDate: '2021-01-31',
    },
  },
];
// 通知公告数据
const announcementItemsData = [
  {
    announcementData: {
      announcementMsg: '测试-01',
      announcementDate: '2020-07-28',
    },
  },
];
// 通知公告详情数据
const detailItemsData = [
  {
    detailItemName: 'aaa',
    detailItemDate: '2020-03-01',
  },
  {
    detailItemName: 'bbb',
    detailItemDate: '2020-03-01',
  },
];
// 公司简介数据
const companyProfileData = `北京城市快轨建设管理有限公司的前身成立于2001年7月，在2012年9月分立出现有公司。该公司资产总额在2015年达5058.50万元。该公司许可经营项目为：建设工程项目管理；一般经营项目为：城市轨道交通的投资、运营管理；设计、制作、代理、发布广告。
2009年初，基于在机场线建设中锻炼出来的奋发进取的建设团队和丰富扎实的建设经验，该公司被北京市政府指派为北京地铁15号线一期工程的建设单位，并于2010年底、2011年底、2014年底先后开通15号线一期中段（望京西-后沙峪）、东段（后沙峪-俸伯）、西段（望京西-清华东路）。
截至目前，北京城市快轨建设管理有限公司已建成首都机场线、15号线、16号线北段，合计89.1公里；正在建设16号线南段、机场线西延、22号线，合计86.45公里；管理新机场线A部分及监管B部分，合计41.36公里。“暗挖机械化、新型洞桩法”为企业创新亮点。机场线被评为奥运会残奥会交通保障工作突出贡献奖；15号线获中国土木工程詹天佑大奖；2016年底开通的16号线北段是当年北京唯一开通的轨道交通线路。`;

// 隐患上报树型数据
const hiddenDangerReportTreeData = [
  {
    label: '安全',
    children: [
      {
        label: '疫情防控',
      },
      {
        label: '复工核查',
      },
      {
        label: '消防安全',
      },
      {
        label: '物料提升机',
      },
      {
        label: '特殊气候施工安全',
      },
      {
        label: '塔吊安全',
      },
      {
        label: '施工用电安全',
      },
      {
        label: '施工机具安全',
      },
      {
        label: '人工挖孔安全',
      },
      {
        label: '起重吊装安全',
      },
      {
        label: '模架工程安全',
      },
      {
        label: '满堂式脚手架',
      },
      {
        label: '绿色文明施工',
      },
      {
        label: '龙门吊安全',
      },
      {
        label: '矿山法隧道施工安全',
      },
      {
        label: '扣件式钢管脚手架',
      },
      {
        label: '架桥机作业安全',
      },
      {
        label: '基坑支护安全',
      },
      {
        label: '盾构法/TBM隧道施工安全',
      },
      {
        label: '承插型盘扣式钢管脚手架',
      },
      {
        label: '安全管理',
      },
      {
        label: '安全防护',
      },
      {
        label: '碗扣式钢管脚手架',
      },
      {
        label: '轨行区施工安全',
      },
    ],
  },
  {
    label: '质量',
    children: [
      {
        label: '质量管理',
      },
      {
        label: '施工材料',
      },
      {
        label: '分部分项工程质量',
      },
      {
        label: '明挖法施工质量',
      },
      {
        label: '矿山法施工质量',
      },
      {
        label: '盾构法/TBM施工质量',
      },
      {
        label: '路基与高架桥施工质量',
      },
      {
        label: '装饰装修质量',
      },
      {
        label: '设备安装质量',
      },
      {
        label: '轨道工程质量',
      },
    ],
  },
];
// 隐患上报搜索栏隐患等级选项数据
const hiddenDangerLevels = [
  {
    value: '1',
    label: '低',
  },
  {
    value: '2',
    label: '中',
  },
  {
    value: '3',
    label: '高',
  },
];

export default {
  leftNavItems,
  hiddenDangerTableData,
  preliminaryTableData,
  riskSourceTableData,
  riskItemsData,
  announcementItemsData,
  detailItemsData,
  companyProfileData,
  hiddenDangerReportTreeData,
  hiddenDangerLevels,
};
