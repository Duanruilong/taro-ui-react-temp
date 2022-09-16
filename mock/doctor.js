// const delay = require('roadhog-api-doc');

const proxy = {
  'POST /doctor/upper-limit-list': (req, res) => {
    const { ps = 10, pn = 1 } = req.body;
    const re = [];
    for (let i = ps * (pn - 1); i < ps * pn; i++) {
      re.push({
        id: i,
        userId: i,
        name: '阿飞' + i,
        sex: 0,
        mobile: '1190002002',
        hospitalCode: null,
        hospitalName: '安徽省明光市2中医院',
        departmentsCode: null,
        departmentsName: '泌尿外科',
        jobGradeCode: null,
        jobGradeName: '医院医师/助教',
        aptitudeOssId: null,
      });
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
  'POST /doctor/save': {
    content: {},
    status: 'OK',
  },
  'POST /doctor/info': {
    content: {
      id: 1,
      name: '张医生',
      phone: '13122221111',
      level: '主任医师',
      type: '内科综合',
      hospital: '华西医院',
    },
    status: 'OK',
  },
  '/task/check-represent-task-rule':{
    content: {
      msg: 'fail',
    },
    errorCode: '00010008',
    errorMsg: 'testSession',
    status: 'error',
  }
};

module.exports = proxy;
