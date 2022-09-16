export const ENV = process.env.DEPLOY_ENV;

export const NAME = process.env.NAME;

export const VERSION = process.env.VERSION;

export const LOGIN_CHANNEL = "login-channel";

export const SESSION_KEY = `${NAME}-ticket`;

export const AGREEMENT_KEY = `${NAME}-agreement`;

export const LAST_PHONE = `${NAME}-phone`;

export const USER_DATA = `${NAME}-user-data`;

export const USER_ORGS = `${NAME}-user-org`;

export const BUSINESS_AREA = `${NAME}-businessArea`;

export const SYSTEM = "REPRESENT";

export const MAP_KEY = "1018327a207cc3e422011d8d614eb0fb";

export const LOGIN_PAGE = "/pages/login/index";

export const HOME_PAGE = "/pages/worktop/index";

export const APPID_ZHUOAO = "wx38aabd6fe1432c31";

export const TRACK_ID =
  ENV === "prod" ? "5ff565f244bb94418a76e55f" : "5ff58a7144bb94418a776a7c";

// 拜访目的
export const MAP_VISIT_OBJECTIVE = [
  {
    code: "0",
    value: "传递产品信息"
  },
  {
    code: "1",
    value: "解答医生问题"
  },
  {
    code: "2",
    value: "促进学术交流"
  },
  {
    code: "3",
    value: "协助患者管理"
  }
];

// 巡店目的
export const MAP_SHOP_OBJECTIVE = [
  {
    code: "0",
    value: "传递产品信息"
  },
  {
    code: "1",
    value: "解答店员问题"
  },
  {
    code: "2",
    value: "了解销售情况"
  }
];

// 医生反馈
export const MAP_DOCTOR_FEEDBACK = [
  {
    code: "0",
    value: "有收获"
  },
  {
    code: "1",
    value: "学到很多"
  },
  {
    code: "2",
    value: "内容精彩"
  },
  {
    code: "3",
    value: "谢谢分享"
  },
  {
    code: "4",
    value: "有所帮助"
  },
  {
    code: "5",
    value: "增加了认知"
  },
  {
    code: "6",
    value: "收获很多"
  },
  {
    code: "7",
    value: "内容丰富"
  }
];

// 医生反馈
export const ARRAY_DOCTOR_FEEDBACK = [
  ["有收获", "学到很多", "内容精彩"],
  ["有所帮助", "增加了认知", "内容丰富"]
];

// 医生职称
export const MAP_DOCTOR_TITLE = [
  {
    code: "1",
    value: "住院医师/助教"
  },
  {
    code: "2",
    value: "主治医师/讲师"
  },
  {
    code: "3",
    value: "主任医师/教授"
  },
  {
    code: "4",
    value: "副主任医师/副教授"
  },
  {
    code: "5",
    value: "实习医生"
  },
  {
    code: "6",
    value: "护师"
  }
];

// 性别
export const MAP_SEX = [
  {
    code: "0",
    value: "女"
  },
  {
    code: "1",
    value: "男"
  }
];

// 周期
export const CYCLE_DATA = [
  {
    code: "QUARTER",
    value: "季度"
  },
  {
    code: "MONTH",
    value: "月度"
  }
];

export const CYCLE_DATA_DETAIL = {
  QUARTER: {
    code: "QUARTER",
    value: "季度"
  },
  MONTH: {
    code: "MONTH",
    value: "月度"
  }
};

// 人数
export const PEOPLE_RANGE = (() => {
  const re = [];
  for (let i = 1; i <= 50; i++) {
    re.push(i);
  }
  return re;
})();

export const MAP_RESOURCE_TYPE = {
  ARTICLE: "文章",
  VIDEO: "视频",
  QUESTIONNAIRE: "问卷",
  MEDICAL_TEMPLATE: "问卷"
};

export const MAP_DOCTOR_STATUS = {
  WAIT_LEARN: "分配未查看",
  LEARNING: "学习中",
  LEARN_COMPLETE: "学习完成",
  RE_WAIT_LEARN: "再次拜访",
  SUBMIT_LEARN: "已提交",
  ACCEPTED: "已采纳"
};

export const MAP_TASK_STATUS = {
  EXECUTING: "执行中",
  WAIT_VERIFY: "待审核",
  VERIFIED: "已通过",
  REJECT: "驳回"
};

export const MAP_MEETING_STATUS = {
  NOT_START: "未开始",
  UNDERWAY: "进行中",
  ENDING: "已结束"
};

export const MAP_QUESTION_STATUS = {
  NOT_OPEN: "未开启",
  PROCEEDING: "待完成",
  COMPLETE: "已完成"
};

export const MAP_TASK_TEMPLATE = {
  SALON: "沙龙会",
  DEPART: "科室会",
  VISIT: "拜访",
  DOCTOR_LECTURE: "医生讲课邀请",
  SURVEY: "调研",
  MEDICAL_SURVEY: "医学调研",
  SINGLE_STORE_TRAINING: "单店培训",
  MULTI_STORE_TRAINING: "多店培训",
  SHOP_INSPECT: "巡店",
  PATIENT_EDUCATION: "患者教育",
  PRODUCT_PROMOTE_PLAN: "产品推广计划",
  COMPETITOR_INFO: "竞品信息收集",
  CASE_COLLECT: "病例收集",
  PRODUCT_CSI: "产品满意度信息收集",
  POLICY_SURVEY: "行业政策调研报告",
  MEDICAL_BUSINESS: "医药商务管理",
  BUSINESS_DATA: "商业数据收集"
};

export const MAP_TASK_TITLE = {
  SALON: "沙龙会",
  DEPART: "科室会",
  VISIT: "面对面拜访",
  SURVEY: "调研",
  PATIENT_EDUCATION: "患者教育",
  PRODUCT_PROMOTE_PLAN: "产品推广计划",
  COMPETITOR_INFO: "竞品信息收集",
  CASE_COLLECT: "病例收集",
  PRODUCT_CSI: "产品满意度信息收集",
  POLICY_SURVEY: "行业政策调研报告",
  MEDICAL_BUSINESS: "医药商务管理",
  BUSINESS_DATA: "商业数据收集"
};

export const MAP_TASK_TITLE_REO = {
  SALON: "线上沙龙会",
  DEPART: "线上科室会",
  VISIT: "线上拜访",
  DOCTOR_LECTURE: "医生讲课邀请",
  SURVEY: "线上调研",
  MEDICAL_SURVEY: "医学调研"
};

export const TASK_TEMPLATE = {
  SALON: {
    value: "SALON",
    text: "会议"
  },
  DEPART: {
    value: "DEPART",
    text: "会议"
  },
  SURVEY: {
    value: "SURVEY",
    text: "调研"
  },
  MEDICAL_SURVEY: {
    value: "MEDICAL_SURVEY",
    text: "医学调研"
  },
  DOCTOR_LECTURE: {
    value: "DOCTOR_LECTURE",
    text: "医生讲课邀请"
  },
  VISIT: {
    value: "VISIT",
    text: "拜访"
  }
};
