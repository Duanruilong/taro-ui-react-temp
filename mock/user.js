const userData = {
  "ticket": "enim aliqua",
  "loginCompany": {
    "companyId": -2782748.63809523,
    "companyType": "nisi irure enim",
    "enable": "ex amet",
    "companyName": "companyName",
    "org": {
      "orgId": "sunt ipsum",
      "orgName": "occaecat incididunt qui"
    },
    "adminId": "veniam"
  },
  "loginUser": {
    "userId": -58770729.85336311,
    "realName": "realName",
    "userName": "aute sed veniam sit proident",
    "enable": false,
    "userType": "dolore",
    "mobile": "13111112222",
    "orgs": [{
        "orgId": 21953428.473863393,
        "orgName": "ullamco",
        "parentOrgId": 62947626.19734055
      },
      {
        "orgId": -42082544.28512435,
        "orgName": "veniam eu esse quis fugiat",
        "parentOrgId": 89286598.41766876
      }
    ]
  },
  "admin": true,
  "organizationId": 72629111.75128114,
  "companyId": 3873682.3522675037,
  "userType": "proident",
  "userId": 78594752.94052416,
  "loginTimes": 1,
  "wechatAccounts": false
};

const proxy = {
  'POST /user/me': {
    content: {
      'userId': 'est officia dolore laboris',
      'companyName': 'tempor adipisicing',
      'sex': 'adipisicing',
      'mobile': '13122221111',
      'realName': 'sunt'
    },
    status: 'OK',
  },
  'POST /user/change-pwd': {
    content: {},
    status: 'OK',
  },
  'POST /user/login-by-wechatapp-phone': {
    content: userData,
    status: 'OK',
  },
  'POST /user/login-by-pwd': {
    content: userData,
    status: 'OK',
  },
  'POST /user/login-by-code': {
    content: userData,
    status: 'OK',
  },
  'POST /user/login-by-wechatapp-code': {
    content: userData,
    status: 'OK',
  },
  'POST /message/unreadCount': {
    content: {
      unReadCount: 10,
    },
    status: 'SUCCESS,'
  },
  'POST /message/list': {
    content: {
      current: 1,
      records: [{
          messageId: 1,
          messageTitle: 'xx评论了你的某某xxxxxxx',
          messageContent: '测试大丰市地方撒地方水淀粉撒范德萨范德萨发',
          createTime: 1597679999000,
          readed: true,
          messageAbstract: '测试大丰市地方撒地方水',
          learnPlanId: 859,
          resourceId: 307,
        },
        {
          messageId: 2,
          messageTitle: 'xx评论了你的某某xxxxxxx',
          messageContent: '11测试大丰市地方撒地方水淀粉撒范德萨范德萨发',
          createTime: 1597636819000,
          messageAbstract: '',
          readed: false,
          learnPlanId: 859,
          resourceId: 307,
        }
      ],
      tc: 20,
      pc: 20,
      pn: 1,
      ps: 20,
      size: 10
    },
    status: 'OK',
  },
  'POST /message/update-status': {
    content: {},
    status: 'OK',
  }
};

module.exports = proxy;
