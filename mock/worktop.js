// const delay = require('roadhog-api-doc');

const proxy = {
  'POST /plan/v2/list': {
    status: 'SUCCESS',
    errorCode: null,
    errorMsg: null,
    content: {
      tradition: {
        noPassNum: 0,
        planId: '47',
        plans: [
          {
            planId: '47',
            planName: '盖世计划',
            taskNum: 20,
            unCompleteNum: 20,
            planStatus: 'EXECUTING',
          },
          {
            planId: '29',
            planName: '盖世计划',
            taskNum: 20,
            unCompleteNum: 18,
            planStatus: 'EXECUTING',
          },
          {
            planId: '30',
            planName: '盛世美颜计划',
            taskNum: 30,
            unCompleteNum: 30,
            planStatus: 'EXECUTING',
          },
        ],
      },
      remote: {
        noPassNum: 0,
        planId: '47',
        plans: [
          {
            planId: '47',
            planName: '盖世计划',
            taskNum: 20,
            unCompleteNum: 20,
            planStatus: 'EXECUTING',
          },
          {
            planId: '32',
            planName: '盖世计划',
            taskNum: 20,
            unCompleteNum: 18,
            planStatus: 'EXECUTING',
          },
          {
            planId: '33',
            planName: '盛世美颜计划',
            taskNum: 30,
            unCompleteNum: 30,
            planStatus: 'EXECUTING',
          },
        ],
      },
    },
  },
  'POST /plan/task/header/info': {
    status: 'SUCCESS',
    errorCode: null,
    errorMsg: null,
    content: [
      {
        taskTemplate: 'SURVEY',
        taskNum: 10,
        completeNum: 0,
        noPassNum: 0,
        executingNum: 2,
        readyExecuteNum: 3,
        existenceResource: false,
        planStatus: 'EXECUTING',
      },
      {
        taskTemplate: 'VISIT',
        taskNum: 10,
        completeNum: 0,
        noPassNum: 0,
        executingNum: 2,
        readyExecuteNum: 3,
        existenceResource: false,
        planStatus: 'EXECUTING',
      },
      {
        taskTemplate: 'MEETING',
        taskNum: 0,
        completeNum: 0,
        noPassNum: 0,
        executingNum: 2,
        readyExecuteNum: 3,
        existenceResource: false,
        planStatus: 'EXECUTING',
      },
    ],
  },
  'POST /plan/task/list': (req, res) => {
    const { ps, pn } = req.body;
    let re = [];
    for (var i = ps * (pn - 1); i < ps * pn; i++)
      re.push({
        planTaskId: i + 1,
        taskTemplate: 'DEPART',
        taskTypeName: '科室会 ' + i,
        newData: false,
        taskNum: 7,
        companyName: '成都瑞安云科技股份有限公司',
        existenceResource: true,
        doctorSubmitNum: 0,
        taskPassNum: 0,
        planImplementStartTime: 1604419200000,
      });
    res.send({
      content: {
        pn,
        ps,
        records: re,
        tc: 100,
      },
      status: 'OK',
    });
  },
  'POST /plan-task/list': (req, res) => {
    const { planType, taskTemplate, ps, pn } = req.body;
    let re = [];
    for (var i = ps * (pn - 1); i < ps * pn; i++)
      re.push(
        {
          planName: 'EXECUTING-计划是分开骄傲计划是分开骄傲计划是分开骄傲和德生科',
          planType: planType,
          planId: i,
          planImplementStartTime: 1604419200000,
          planImplementEndTime: 1906419200000,
          execStatus: 'EXECUTING',
          taskNum: 10,
          planTasks: [
            {
              taskTypeName: '医学调研',
              taskTemplate: 'MEDICAL_SURVEY',
              planTaskId: i + 1,
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: true,
            },
            {
              taskTypeName: '调研',
              taskTemplate: 'SURVEY',
              planTaskId: i + 1,
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: true,
            },
            {
              taskTypeName: '拜访',
              taskTemplate: 'VISIT',
              planTaskId: i + 1,
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: true,
            },
            {
              taskTypeName: '沙龙会',
              planTaskId: i + 1,
              taskTemplate: 'SALON',
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: false,
            },
            {
              taskTypeName: '科室会',
              taskTemplate: 'DEPART',
              planTaskId: i + 1,
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: true,
            },
            {
              taskTypeName: '医生讲课邀请',
              taskTemplate: 'DOCTOR_LECTURE',
              planTaskId: i + 1,
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: true,
            },
          ],
        },
        {
          planType: planType,
          planName: 'COMPLETE-计划是分开骄傲和德生科',
          planId: i,
          planImplementStartTime: 1604419200000,
          planImplementEndTime: 1614671057194,
          execStatus: 'COMPLETE',
          taskNum: 0,
          planTasks: [
            {
              taskTypeName: '计划COMPLETE名称成都瑞安云科技股份有限公司',
              taskTemplate: 'VISIT',
              planTaskId: i + 1,
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: false,
            },
            {
              taskTypeName: '计划名称成都瑞COMPLETE',
              taskTemplate: 'DOCTOR_LECTURE',
              planTaskId: i + 1,
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: true,
            },
          ],
        },
        {
          planType: planType,
          planName: 'EXPIRE-计划是分开骄傲和德生科',
          planId: i,
          planImplementStartTime: 1604419200000,
          planImplementEndTime: 1614671057194,
          execStatus: 'EXPIRE',
          taskNum: 20,
          planTasks: [
            {
              taskTypeName: '计划EXPIRE名称成都瑞安云科技股份有限公司',
              taskTemplate: 'SURVEY',
              planTaskId: i + 1,
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: false,
            },
            {
              taskTypeName: '计划名称成都瑞EXPIRE',
              taskTemplate: 'MEDICAL_SURVEY',
              planTaskId: i + 1,
              performNum: 10,
              executionNum: 3,
              completeNum: 2,
              noPassNum: 2,
              newData: true,
            },
          ],
        },
      );
    res.send({
      content: {
        pn: 1,
        ps: 10,
        records: re,
        tc: 30,
      },
      status: 'OK',
    });
  },
  'POST /workbench': {
    status: 'SUCCESS',
    errorCode: null,
    errorMsg: null,
    content: {
      tradition: {
        performNum: 1591,
        planId: null,
        rejectNum: 1,
        tasks: [
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'VISIT',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'DEPART',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'SALON',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'SURVEY',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'PATIENT_EDUCATION',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'PRODUCT_PROMOTE_PLAN',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'COMPETITOR_INFO',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'CASE_COLLECT',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'PRODUCT_CSI',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'POLICY_SURVEY',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'MEDICAL_BUSINESS',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'BUSINESS_DATA',
          },
        ],
      },
      remote: {
        performNum: 1591,
        planId: null,
        rejectNum: 1,
        tasks: [
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'VISIT',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'DEPART',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'SALON',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'SURVEY',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'DOCTOR_LECTURE',
          },
          {
            complete: false,
            incrNum: 100,
            noPassNum: 0,
            performNum: 182,
            sort: 1,
            taskTemplate: 'MEDICAL_SURVEY',
          },
        ],
      },
    },
  },
};

module.exports = proxy;
