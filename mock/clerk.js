// const delay = require('roadhog-api-doc');

const proxy = {
  'POST /clerk/query-clerk-list': (req, res) => {
    const { ps = 10, pn = 1 } = req.body;
    const re = [];
    for (let i = ps * (pn - 1); i < ps * pn; i++) {
      re.push({
        id: i,
        userId: i,
        name: '店员：小飞' + i,
        mobile: '119000200' + i,
        drugstoreName: '安徽省明光市小店' + i,
        enterpriseName: '小名的连锁店',
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
  'POST /clerk/represent-insert': {
    content: {},
    status: 'OK',
  },
  'POST /clerk/query-clerk-detail': {
    content: {
      id: 1,
      name: '张久',
      mobile: '13122221111',
      drugstoreName: '安徽省明光市小店',
      enterpriseName: '小名的连锁店',
      points: 200,
    },
    status: 'OK',
  },

  'POST /points/log-list-by-user': (req, res) => {
    const { ps, pn } = req.body;
    let re = [];
    for (let i = ps * (pn - 1); i < ps * pn; i += 10) {
      re = re.concat([
        {
          operationMatter: '调研任务审核通过—张哥',
          operationPoints: '+200',
          afterBalance: '300',
          createTime: 1600090356376,
        },
        {
          operationMatter: '调研任务审核通过—张哥',
          operationPoints: '+200',
          afterBalance: '300',
          createTime: 1600090356376,
        },
        {
          operationMatter: '调研任务审核通过—张哥',
          operationPoints: '-200',
          afterBalance: '300',
          createTime: 1600090356376,
        },
        {
          operationMatter: '调研任务审核通过—张哥',
          operationPoints: '+100',
          afterBalance: '300',
          createTime: 1600090356376,
        },
        {
          operationMatter: '调研任务审核通过—张哥',
          operationPoints: '-20',
          afterBalance: '300',
          createTime: 1600090356376,
        },
        {
          operationMatter: '调研任务审核通过—张哥',
          operationPoints: '+10',
          afterBalance: '300',
          createTime: 1600090356376,
        },
      ]);
    }
    res.send({
      content: {
        records: re,
        tc: 30,
        ps: 10,
        pn: 1,
        total: 30,
        searchCount: true,
        current: 1,
        size: 10,
        hitCount: false,
        pages: 1,
      },
      status: 'SUCCESS',
    });
  },
  'POST /drugstore/query-drugstore-list': {
    content: {
      records: [
        {
          enterpriseName: '老百姓大药房',
          drugstores: [
            {
              name: '老百姓1',
              id: 1,
            },
            {
              name: '老百姓2',
              id: 2,
            },
            {
              name: '老百姓3',
              id: 3,
            },
          ],
        },
        {
          enterpriseName: '老百姓小药房',
          // companyId: 12,
          drugstores: [
            {
              name: '老百姓19',
              id: 19,
            },
            {
              name: '老百姓22',
              id: 22,
            },
            {
              name: '老百姓33',
              id: 33,
            },
          ],
        },
        {
          enterpriseName: '老百姓中药房',
          // companyId: 12,
          drugstores: [
            {
              name: '老百姓109',
              id: 109,
            },
            {
              name: '老百姓202',
              id: 202,
            },
            {
              name: '老百姓303',
              id: 303,
            },
          ],
        },
      ],
    },
    status: 'OK',
  },
  'POST /points/submit-consumption': {
    content: {},
    status: 'OK',
  },
};

module.exports = proxy;
