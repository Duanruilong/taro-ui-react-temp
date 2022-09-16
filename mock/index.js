// const delay = require('roadhog-api-doc');

const proxy = {
  'POST /test': (req, res) => {
    console.log(req);
    const { flag } = req.headers;
    if (flag === 'update') {
      res.send({
        content: {
          username: 'test',
          session: 'testsession',
          flag,
        },
        errorCode: '100103',
        errorMsg: 'testSession',
        status: 'OK',
      });
    } else {
      res.send({
        content: {
          username: 'test',
          session: 'testsession',
          flag,
        },
        errorCode: '100103',
        errorMsg: 'testSession',
        status: 'error',
      });
    }
  },
  'POST /sms/send-code': {
    content: {},
    status: 'OK',
  },
  'POST /login': {
    content: {
      session: 'session',
    },
    status: 'OK',
  },
  'POST /hospital/key-query': {
    content: [
      {
        id: -59495870.317552276,
        hospitalName: 'Duis proident mollit aute sit',
        address: 'ipsum dolore',
        level: 'fugiat in commodo dolor reprehenderit',
        hospitalCode: 'dolore eiusmod',
      },
    ],
    status: 'OK',
  },
  'POST /plan-task/questionnaire-info': {
    content: [
      {
        id: 31,
        bizId: null,
        bizType: 'SAAS_MEDICINE',
        title: '皮科热点问题调研',
        summary: '第0-6周问卷',
        questions:
          '[{"id": "SCALE-2", "type": "SCALE", "range": [], "options": [{"visible": true, "answerOption": "＜10"}, {"notes": "介于痊愈和轻度之间", "visible": true, "answerOption": "10-30"}, {"visible": true, "answerOption": "30-50"}, {"visible": true, "answerOption": "50-72"}, {"visible": true, "answerOption": "＞72"}], "multiple": false, "question": "患者基线PASI 评分：", "required": true}, {"id": "RADIO-2", "type": "RADIO", "range": [], "options": [{"type": "single", "answerOption": "寻常型（斑块状）"}, {"type": "single", "answerOption": "关节病型"}, {"type": "single", "answerOption": "红皮病型 "}, {"type": "single", "answerOption": "脓胞型"}], "multiple": false, "question": "患者银屑病类型：  ", "required": true}, {"id": "CASCADE-3", "type": "CASCADE", "range": [1, 4], "isRange": true, "options": [{"key": 1, "type": "single", "title": "无", "value": 1, "children": [], "multiple": false, "parentId": null, "parentName": null, "grandParent": null, "answerOption": "无"}, {"key": 2, "type": "single", "range": [1, 2], "title": "有", "value": 2, "children": [{"key": "21", "type": "single", "title": "关节炎", "value": "21", "children": [{"key": "211", "type": "single", "title": "1", "value": "211", "children": [], "multiple": false, "parentId": "21", "parentName": "关节炎", "grandParent": 2, "answerOption": "1"}, {"key": "212", "type": "single", "title": "2", "value": "212", "children": [], "multiple": false, "parentId": "21", "parentName": "关节炎", "grandParent": 2, "answerOption": "2"}, {"key": "213", "type": "single", "title": "3", "value": "213", "children": [], "multiple": false, "parentId": "21", "parentName": "关节炎", "grandParent": 2, "answerOption": "3"}], "multiple": false, "parentId": 2, "parentName": "有", "grandParent": null, "answerOption": "关节炎"}, {"key": "22", "type": "single", "title": "血脂紊乱", "value": "22", "children": [], "multiple": false, "parentId": 2, "parentName": "有", "grandParent": null, "answerOption": "血脂紊乱"}, {"key": "23", "type": "single", "title": "高血糖", "value": "23", "children": [], "multiple": false, "parentId": 2, "parentName": "有", "grandParent": null, "answerOption": "高血糖"}, {"key": "24", "type": "single", "title": "高血压", "value": "24", "children": [], "multiple": false, "parentId": 2, "parentName": "有", "grandParent": null, "answerOption": "高血压"}, {"key": "25", "type": "single", "title": "肥胖", "value": "25", "children": [], "multiple": false, "parentId": 2, "parentName": "有", "grandParent": null, "answerOption": "肥胖"}, {"key": "26", "type": "single", "title": "糖尿病", "value": "26", "children": [], "multiple": false, "parentId": 2, "parentName": "有", "grandParent": null, "answerOption": "糖尿病"}, {"key": "27", "type": "single", "title": "其他自身免疫疾病（系统性硬化症、克罗恩病、溃疡性结肠炎、白癜风等）", "value": "27", "children": [], "multiple": false, "parentId": 2, "parentName": "有", "grandParent": null, "answerOption": "其他自身免疫疾病（系统性硬化症、克罗恩病、溃疡性结肠炎、白癜风等）"}], "multiple": true, "parentId": null, "parentName": null, "grandParent": null, "answerOption": "有"}], "multiple": false, "question": "有无共患病： ", "required": true, "isMultiple": true}, {"id": "CHECKBOX-3", "type": "CHECKBOX", "range": [1, 1], "isRange": true, "options": [{"type": "single", "answerOption": "未经治疗"}, {"type": "single", "answerOption": "外用药（糖皮质激素，维生素D3衍生物，维A酸）"}, {"type": "other", "options": [], "answerOption": "其他"}], "multiple": true, "question": "患者近三月治疗手段：", "required": true}, {"id": "SCALE-4", "type": "SCALE", "range": [], "options": [{"visible": true, "answerOption": "非常不满意"}, {"visible": false, "answerOption": "1"}, {"visible": false, "answerOption": "1"}, {"visible": false, "answerOption": "1"}, {"visible": false, "answerOption": "1"}, {"visible": false, "answerOption": "1"}, {"visible": false, "answerOption": "1"}, {"visible": false, "answerOption": "1"}, {"visible": true, "answerOption": "非常满意"}], "multiple": false, "question": "您对整体治疗的满意度如何？（0-10分进行评分，0为非常不满意，10为非常满意）", "required": true}]',
        deleted: false,
        disable: true,
        createTime: 1614851846000,
        createUserId: 108594,
        updateTime: 1614851876000,
        updateUserId: 108594,
        createUserName: '赵晨熹',
        noteInfo:
          '<p><strong>附录：</strong></p><p><strong>银屑病皮损面积和严重程度指数（PASI）</strong></p><p>一、皮损面积评价：</p><p> 将全身分为4个部分评价，每个部分先自身评分，然后4部分评分结合起来切入最后PASL评分。这四部分分别是：下肢（占人体40%皮肤）；躯干（包括：胃部、胸部、背部等）占30%；上肢（占20%）；头部（占10%）。皮损面积占全身体表面积的比例计算如下：体表各部分占区域头/颈、上肢、躯干、下肢百分比参考图在受累部分以“X”标记，大致画出皮损范围和并指出拍照部位（含体表各部分占各区域头/颈、上肢、躯干、下肢百分比参考）</p><p>（插图）</p><img ossid="20210304CEF0827C4B8C4FBBAFEA13D297015507" src="https://oss-dev.e-medclouds.com/Business-attachment/2021-03/108594/04172146-rc-upload-1614849274982-5.png"><p><br></p><p><br></p>',
        submitted: false,
      },
    ],
    status: 'OK',
  },
  'POST /resource/detail': {
    content: {
      resourceId: 68299068.89135766,
      resourceType: 'veniam in labore',
      planType: 'incididunt ea',
      needLearnTime: -97777033.31261423,
      createCompanyId: -79625580.95028496,
      createCompanyName: 'magna',
      contentType: 'cupidatat exercitation occaecat incididunt eiusmod',
      resourceName: 'veniam cupidatat ut adipisicing Excepteur',
      title: 'laborum Duis amet pariatur eu',
      context: 'veniam in laborum',
      thumbnailOssId: 'quis nulla',
      info: {
        summary: 'consectetur',
        duration: 30929794.04087916,
        presenter: 'non Duis sed ea',
      },
      questions: [
        {
          index: 62559115.95425275,
          type: 'eiusmod Lorem tempor do',
          question: 'reprehenderit quis proident',
          options: [
            {
              index: 'tempor labore consequat ex pariatur',
              answerOption: 'quis nulla fugiat ut Ut',
            },
            {
              index: 'cupidatat minim eiusmod culpa ad',
              answerOption: 'tempor sed elit',
            },
            {
              index: 'sed proident et quis',
              answerOption: 'in',
            },
          ],
        },
        {
          index: -24976940.635730088,
          type: 'enim officia',
          question: 'exercitation',
          options: [
            {
              index: 'tempor',
              answerOption: 'dolor',
            },
          ],
        },
        {
          index: 31982334.391994625,
          type: 'labore',
          question: 'ex ut',
          options: [
            {
              index: 'sit id',
              answerOption: 'quis non id ut',
            },
            {
              index: 'veniam aute fugiat',
              answerOption: 'ad quis cupidatat et',
            },
            {
              index: 'fugiat incididunt laborum exercitation ut',
              answerOption: 'quis in magna',
            },
            {
              index: 'nisi',
              answerOption: 'ipsum esse',
            },
          ],
        },
        {
          index: -26108176.955105573,
          type: 'in ipsum ex',
          question: 'Excepteur culpa aliquip consequat ex',
          options: [
            {
              index: 'Excepteur labore',
              answerOption: 'aliquip ad consequat ex',
            },
            {
              index: 'eu',
              answerOption: 'ut dolore',
            },
          ],
        },
        {
          index: 31786695.771922126,
          type: 'Duis',
          question: 'in eu',
          options: [
            {
              index: 'eu sit proident voluptate exercitation',
              answerOption: 'esse dolore fugiat',
            },
          ],
        },
      ],
      attachmentOssId: 'Excepteur',
    },
    status: 'OK',
  },
};

module.exports = {
  ...proxy,
  ...require('./user'),
  ...require('./worktop'),
  ...require('./doctor'),
  ...require('./task'),
  ...require('./comments'),
  ...require('./clerk'),
};
