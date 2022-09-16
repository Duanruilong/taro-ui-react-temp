// const delay = require('roadhog-api-doc');

const proxy = {
  'POST /plan-task/resource-list': {
    status: 'SUCCESS',
    errorCode: null,
    errorMsg: null,
    content: {
      allowResourceType: ['VIDEO', 'ARTICLE', 'QUESTIONNAIRE'],
      resources: [
        {
          resourceId: '47',
          resourceType: 'ARTICLE',
          resourceName: '测试计划测试计划测试计划测试计划测试计划',
          needLearnTime: 10,
          ossId: 20,
        },
        {
          resourceId: '48',
          resourceType: 'VIDEO',
          resourceName: '测试计划',
          needLearnTime: 10,
          ossId: 21,
        },
        {
          resourceId: '49',
          resourceType: 'QUESTIONNAIRE',
          needLearnTime: 10,
          resourceName: '测试计划',
          ossId: 22,
        },
      ],
    },
  },
  'POST /task-detail/face/batch-execute': {
    status: 'SUCCESS',
    errorCode: null,
    errorMsg: null,
    content: {},
  },
  'POST /task-detail/meeting/execute': {
    status: 'SUCCESS',
    errorCode: null,
    errorMsg: null,
    content: {},
  },
  'POST /task-detail/survey/batch-execute': {
    status: 'SUCCESS',
    errorCode: null,
    errorMsg: null,
    content: {},
  },
  'POST /resource/list': (req, res) => {
    const { ps = 10, pn = 1 } = req.body;
    let re = [];
    for (let i = ps * (pn - 1); i < ps * pn; i = i + 4) {
      re = re.concat([
        {
          resourceId: i,
          resourceName: '测试资料测试资料测试资料测试资料测试资料' + i,
          resourceType: 'ARTICLE',
          contentType: 'RICH_TEXT',
          needLearnTime: 15,
          thumbnailUrl: 'https://admin.e-medclouds.com/static/content.6dfe90eb.png',
          planType: 'REMOTE',
          info: {
            summary: '测试测试测试测试测试测试测试测试测试',
            duration: '23:13s',
          },
        },
        {
          resourceId: i + 1,
          resourceName: '测试资料' + i + 1,
          resourceType: 'ARTICLE',
          contentType: 'ATTACHMENT',
          needLearnTime: 15,
          thumbnailOssId: '111',
          planType: 'TRADITION',
          info: {},
        },
        {
          resourceId: i + 2,
          resourceName: '测试资料' + i + 2,
          resourceType: 'VIDEO',
          needLearnTime: 15,
          thumbnailOssId: '111',
          thumbnailUrl: 'https://admin.e-medclouds.com/static/content.6dfe90eb.png',
          planType: 'REMOTE',
          info: {
            summary: '测试测试测试测试测试测试测试测试测试',
            duration: '23:13s',
          },
        },
        {
          resourceId: i + 3,
          resourceName: '测试资料' + i + 3,
          resourceType: 'QUESTIONNAIRE',
          summary:
            '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
          needLearnTime: 15,
          thumbnailOssId: '111',
          thumbnailUrl: 'https://admin.e-medclouds.com/static/content.6dfe90eb.png',
          planType: 'REMOTE',
          info: {
            summary: '测试测试测试测试测试测试测试测试测试',
          },
        },
      ]);
    }
    setTimeout(() => {
      res.send({
        content: {
          pn: pn,
          ps: ps,
          records: re,
          tc: 30,
        },
        status: 'OK',
      });
    }, 500);
  },
  'POST /task/task-detail-list': {
    status: 'SUCCESS',
    errorCode: null,
    errorMsg: null,
    content: {
      planTaskId: 1,
      submitNum: 1,
      totalNum: 10,
      planStatus: 'EXECUTING',
      assignList: [
        {
          taskDetailId: 1,
          learnPlanId: 1,
          taskName: '测试',
          doctorName: '测试',
          completeRate: '10',
          learnPlanStatus: 'SUBMIT_LEARN',
          taskStatus: 'EXECUTING',
        },
        {
          taskDetailId: 2,
          learnPlanId: 2,
          taskName: '测试',
          doctorName: '测试测',
          completeRate: '10',
          learnPlanStatus: 'SUBMIT_LEARN',
          taskStatus: 'EXECUTING',
        },
        {
          taskDetailId: 3,
          learnPlanId: 3,
          taskName: '测试',
          doctorName: '测试测',
          completeRate: '10',
          learnPlanStatus: 'SUBMIT_LEARN',
          taskStatus: 'EXECUTING',
        },
        {
          taskDetailId: 4,
          learnPlanId: 4,
          taskName: '测试',
          doctorName: '测试测',
          completeRate: '20',
          learnPlanStatus: 'SUBMIT_LEARN',
          taskStatus: 'EXECUTING',
        },
        {
          taskDetailId: 5,
          learnPlanId: 5,
          taskName: '测试',
          doctorName: '测试测试',
          completeRate: '30',
          learnPlanStatus: 'ACCEPTED',
          taskStatus: 'EXECUTING',
        },
        {
          taskDetailId: 6,
          learnPlanId: 6,
          taskName: '测试',
          doctorName: '测试测试',
          completeRate: '30',
          learnPlanStatus: 'ACCEPTED',
          taskStatus: 'EXECUTING',
        },
      ],
      reVisitList: [
        {
          taskDetailId: 1,
          learnPlanId: 1,
          taskName: '测试1',
          doctorName: '测试测试1',
          completeRate: '40',
          learnPlanStatus: 'RE_WAIT_LEARN',
          taskStatus: 'EXECUTING',
        },
        {
          taskDetailId: 2,
          learnPlanId: 2,
          taskName: '测试2',
          doctorName: '测试测试2',
          completeRate: '50',
          learnPlanStatus: 'RE_WAIT_LEARN',
          taskStatus: 'EXECUTING',
        },
        {
          taskDetailId: 3,
          learnPlanId: 3,
          taskName: '测试3',
          doctorName: '测试测试3',
          completeRate: '60',
          learnPlanStatus: 'RE_WAIT_LEARN',
          taskStatus: 'EXECUTING',
        },
      ],
    },
  },
  'POST /task/batch-submit-visit-survey-task': {
    content: {},
    status: 'OK',
  },
  'POST /task/re-visit-doctor': {
    content: {},
    status: 'OK',
  },
  'POST /task/meeting-task-detail-list': {
    content: {
      planTaskId: 1,
      submitNum: 2,
      totalNum: 6,
      planStatus: 'COMPLETE',
      taskTemplate: 'SALON',
      taskDetails: [
        {
          taskDetailId: 1,
          taskName: '测试',
          doctorNum: 10,
          submitNum: 1,
          taskStatus: 'WAIT_VERIFY',
        },
        {
          taskDetailId: 1,
          taskName: '测试',
          doctorNum: 10,
          submitNum: 1,
          taskStatus: 'WAIT_VERIFY',
        },
        {
          taskDetailId: 1,
          taskName: '测试',
          doctorNum: 10,
          submitNum: 1,
          taskStatus: 'WAIT_VERIFY',
        },
      ],
    },
    status: 'OK',
  },
  'POST /task/meeting-task-detail': {
    content: {
      taskDetailId: 1,
      meetingName: '会议名称',
      taskDetailStartTime: 1595056741203,
      taskDetailEndTime: 1595056741203,
      taskStatus: 'EXECUTING',
      meetingStatus: 'NOT_START',
      doctorNum: 10,
      planStatus: 'EXECUTING',
      reason: '测试测测试测测试测测试测测试测测试测测试测测试测测试测测试测测试测',
      assignList: [
        {
          learnPlanId: 1,
          doctorName: '测试',
          completeRate: '10',
          learnPlanStatus: 'SUBMIT_LEARN',
        },
        {
          learnPlanId: 2,
          doctorName: '测试测',
          completeRate: '10',
          learnPlanStatus: 'SUBMIT_LEARN',
        },
        {
          learnPlanId: 3,
          doctorName: '测试测',
          completeRate: '10',
          learnPlanStatus: 'SUBMIT_LEARN',
        },
        {
          learnPlanId: 4,
          doctorName: '测试测',
          completeRate: '20',
          learnPlanStatus: 'SUBMIT_LEARN',
        },
        {
          learnPlanId: 5,
          doctorName: '测试测试',
          completeRate: '30',
          learnPlanStatus: 'ACCEPTED',
        },
      ],
      reVisitList: [
        {
          learnPlanId: 1,
          doctorName: '测试测试1',
          completeRate: '40',
          learnPlanStatus: 'RE_WAIT_LEARN',
        },
        {
          learnPlanId: 2,
          doctorName: '测试测试2',
          completeRate: '50',
          learnPlanStatus: 'RE_WAIT_LEARN',
        },
        {
          learnPlanId: 3,
          doctorName: '测试测试3',
          completeRate: '60',
          learnPlanStatus: 'RE_WAIT_LEARN',
        },
      ],
    },
    status: 'OK',
  },
  'POST /task/submit-meeting-task': {
    content: {},
    status: 'OK',
  },
  'POST /task/learn-plan-detail': {
    content: {
      learnPlanId: 1,
      meetingStartTime: 1595056741203,
      representName: 'representName',
      taskTemplate: 'VISIT',
      taskDetailId: 1,
      representId: 1,
      companyName: 'companyName',
      taskName: 'taskName',
      reason: 'reason',
      doctorName: '测试',
      createTime: 1595056741203,
      meetingEndTime: 1595056741203,
      learnProgress: 20,
      status: 'LEARN_COMPLETE',
      resources: [
        {
          resourceId: 1,
          resourceName: '测试资料测试资料测试资料测试资料测试资料' + 1,
          resourceType: 'ARTICLE',
          contentType: 'RICH_TEXT',
          needLearnTime: 15,
          thumbnailUrl: 'https://admin.e-medclouds.com/static/content.6dfe90eb.png',
          planType: 'REMOTE',
          info: {
            summary: '测试测试测试测试测试测试测试测试测试',
            videoTime: '23:13s',
          },
          title: 'title',
          learnTime: 15,
          status: 'LEARNING',
          feedback: '',
        },
        {
          resourceId: 2,
          resourceName: '测试资料' + 2,
          resourceType: 'ARTICLE',
          contentType: 'ATTACHMENT',
          needLearnTime: 15,
          thumbnailOssId: '111',
          planType: 'TRADITION',
          info: {},
          title: 'title',
          learnTime: 15,
          status: 'COMPLETE',
          feedback: '1111',
        },
        {
          resourceId: 3,
          resourceName: '测试资料' + 3,
          resourceType: 'VIDEO',
          needLearnTime: 25,
          thumbnailOssId: '111',
          thumbnailUrl: 'https://admin.e-medclouds.com/static/content.6dfe90eb.png',
          planType: 'REMOTE',
          info: {
            summary: '测试测试测试测试测试测试测试测试测试',
            duration: '23:13s',
          },
          title: 'title',
          learnTime: 15,
          status: 'LEARNING',
          feedback: '',
        },
        {
          resourceId: 4,
          resourceName: '测试资料' + 4,
          resourceType: 'QUESTIONNAIRE',
          summary:
            '测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试',
          needLearnTime: 15,
          thumbnailOssId: '111',
          thumbnailUrl: 'https://admin.e-medclouds.com/static/content.6dfe90eb.png',
          planType: 'REMOTE',
          info: {
            summary: '测试测试测试测试测试测试测试测试测试',
          },
          title: 'title',
          learnTime: 15,
          status: 'LEARNING',
          feedback: '',
        },
      ],
    },
    status: 'OK',
  },
  'POST /task-apply/page': (req, res) => {
    const { ps = 10, pn = 1 } = req.body;
    let re = [];
    for (let i = ps * (pn - 1); i < ps * pn; i = i + 4) {
      re = re.concat([
        {
          planId: i + 100000003,
          applyNo: 1604419200000,
          planType: 'REMOTE',
          planName: '测试计划的后方可临时冻结福建师范名称' + i + 1,
          applyTime: 1604419200000,
          status: 'PASS',
        },
        {
          planId: i + 100000003,
          applyNo: 1604419200000,
          planType: 'TRADITION',
          planName: '测试计划名称' + i + 1333,
          applyTime: 1604419200000,
          status: 'PASS',
        },
        {
          planId: i + 100000003,
          applyNo: 1604419200000,
          planType: 'TRADITION',
          planName: '测试计划收代理费那扣税返回键名称' + i + 1444,
          applyTime: 1604419200000,
          status: '',
        },
        {
          planId: i + 100000003,
          applyNo: 1604419200000,
          planType: 'REMOTE',
          planName: '测试计划名称' + i + 1555,
          applyTime: 1604419200000,
          status: '',
        },
        {
          planId: i + 100000003,
          applyNo: 1604419200000,
          planType: 'TRADITION',
          planName: '测试计划名称' + i + 1666,
          applyTime: 1604419200000,
          status: 'PASS',
        },
      ]);
    }
    setTimeout(() => {
      res.send({
        content: {
          pn: pn,
          ps: ps,
          records: re,
          tc: 30,
        },
        status: 'OK',
      });
    }, 500);
  },
  'POST /task-apply/detail': {
    content: {
      saleOrganizationId: 111,
      saleOrganizationName: '成都',
      planId: 100000003,
      applyNo: 1604419200000,
      planType: 'REMOTE',
      //  planType: 'TRADITION',
      planName: '测试计划名称' + 1333,
      applyTime: 1604419200000,
      status: 'PASS',
      planImplementStartTime: 1604419200000,
      planImplementEndTime: 1606419200000,
      planResources: [
        { resourceId: 111111, resourceName: '测试资料名称ARTICLE' + 1333, resourceType: 'ARTICLE' },
        { resourceId: 112221111, resourceName: '测试资料名称VIDEO' + 1333, resourceType: 'VIDEO' },
        {
          resourceId: 1113333111,
          resourceName: '测试资料名称QUESTIONNAIRE' + 1333,
          resourceType: 'QUESTIONNAIRE',
        },
      ],
      planContents: [
        {
          planContentId: 1155551111,
          taskTypeName: '测试资料名称测试资料名称测试资料名称测试资料名称测试资料名称-VISIT' + 1333,
          taskTemplate: 'VISIT',
          contentResources: [
            {
              resourceId: 111111,
              resourceName: '测试资料名称ARTICLE' + 1333,
              resourceType: 'ARTICLE',
            },
            {
              resourceId: 112221111,
              resourceName: '测试资料名称VIDEO' + 1333,
              resourceType: 'VIDEO',
            },
            {
              resourceId: 1113333111,
              resourceName: '测试资料名称QUESTIONNAIRE' + 1333,
              resourceType: 'QUESTIONNAIRE',
            },
          ],
        },
      ],
    },
    status: 'OK',
  },
  'POST /task-apply/query-plan-list': {
    content: [
      {
        planId: 111111,
        planName: '测试计划名称-TRADITION' + 1333,
        planType: 'TRADITION',
      },
      {
        planId: 112221111,
        planName: '测试计划名称-REMOTE' + 1333,
        planType: 'REMOTE',
      },
      {
        planId: 1113333111,
        planName: '测试资料名称-REMOTE' + 1333,
        planType: 'REMOTE',
      },
    ],
    status: 'OK',
  },
  'POST /task-apply/plan-detail': {
    content: {
      saleOrganizationId: 111,
      saleOrganizationName: '成都',
      planId: 100000003,
      applyNo: 1604419200000,
      planType: 'TRADITION',
      // planType: 'REMOTE',
      planName: '测试计划名称' + 1333,
      applyTime: 1604419200000,
      status: 'PASS',
      planImplementStartTime: 1604419200000,
      planImplementEndTime: 1606419200000,
      planResources: [
        { resourceId: 111111, resourceName: '测试资料名称ARTICLE' + 1333, resourceType: 'ARTICLE' },
        { resourceId: 112221111, resourceName: '测试资料名称VIDEO' + 1333, resourceType: 'VIDEO' },
        {
          resourceId: 1113333111,
          resourceName: '测试资料名称QUESTIONNAIRE' + 1333,
          resourceType: 'QUESTIONNAIRE',
        },
      ],
      planContents: [
        {
          planContentId: 1155551111,
          taskTypeName: '测试资料名称测试资料名称测试资料名称测试资料名称测试资料名称-VISIT' + 1333,
          taskTemplate: 'VISIT',
          contentResources: [
            {
              resourceId: 111111,
              resourceName: '测试资料名称ARTICLE' + 1333,
              resourceType: 'ARTICLE',
            },
            {
              resourceId: 112221111,
              resourceName: '测试资料名称VIDEO' + 1333,
              resourceType: 'VIDEO',
            },
            {
              resourceId: 1113333111,
              resourceName: '测试资料名称QUESTIONNAIRE' + 1333,
              resourceType: 'QUESTIONNAIRE',
            },
          ],
        },
        {
          planContentId: 1666661111,
          taskTypeName:
            '测试资料名称测试资料名称测试资料名称测试资料名称测试资料名称-DEPART' + 1333,
          taskTemplate: 'DEPART',
          contentResources: [
            {
              resourceId: 111111,
              resourceName: '测试资料名称ARTICLE' + 1333,
              resourceType: 'ARTICLE',
            },
            {
              resourceId: 112221111,
              resourceName: '测试资料名称VIDEO' + 1333,
              resourceType: 'VIDEO',
            },
            {
              resourceId: 1113333111,
              resourceName: '测试资料名称QUESTIONNAIRE' + 1333,
              resourceType: 'QUESTIONNAIRE',
            },
          ],
        },
      ],
    },
    status: 'OK',
  },
  'POST /task-apply/submit': {
    content: {},
    status: 'OK',
  },
  'POST /resource/product-list': {
    content: [
      {
        resourceId: 111111,
        resourceName: '测试资料名称ARTICLE' + 1333,
        resourceType: 'PRODUCT',
        contentType: 'contentType',
      },
      {
        resourceId: 112221111,
        resourceName: '测试资料名称VIDEO' + 1333,
        resourceType: 'PRODUCT',
        contentType: 'contentType',
      },
      {
        resourceId: 1113333111,
        resourceName: '测试资料名称QUESTIONNAIRE' + 1333,
        resourceType: 'PRODUCT',
        contentType: 'contentType',
      },
    ],
    status: 'OK',
  },
  'POST /task-detail/face/v2/insert': {
    status: 'ERROR',
    errorCode: '00010008',
    errorMsg: '你今日提交的拜访任务数已超过最大次数限制，继续提交任务将可能被驳回',
    content: {},
  },
  'POST /task-detail/face/v2/edit': {
    status: 'ERROR',
    errorCode: '00010008',
    errorMsg: '你今日提交的拜访任务数已超过最大次数限制，继续提交任务将可能被驳回',
    content: {},
  },
  'POST /task-detail/salon/v2/edit': {
    status: 'ERROR',
    errorCode: '00010008',
    errorMsg: '你今日提交的拜访任务数已超过最大次数限制，继续提交任务将可能被驳回',
    content: {},
  },
  'POST /task-detail/survey/v2/edit': {
    status: 'ERROR',
    errorCode: '00010008',
    errorMsg: '你今日提交的拜访任务数已超过最大次数限制，继续提交任务将可能被驳回',
    content: {},
  },
  'POST /company-configuration/sign-place-and-meeting-num': {
    content: {
      minMeetingNum: 5,
      signPlaceRange: 200,
      allowModifySignPlace: true,
    },
    status: 'OK',
  },
  'POST /task-attachment/check-same-batch': (req, res) => {
    const { ossIds = [] } = req.body;
    const content = ossIds.map((ossId) => {
      return { ossId, hasError: true };
    });

    setTimeout(() => {
      res.send({
        content,
        status: 'OK',
      });
    }, 500);
  },
};

module.exports = proxy;
