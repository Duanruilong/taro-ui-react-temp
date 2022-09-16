// const delay = require('roadhog-api-doc');

const proxy = {
  'POST /comment/list': (req, res) => {
    const { ps, pn } = req.body;
    let re = [];
    for (let i = ps * (pn - 1); i < ps * pn; i += 10) {
      re = re.concat([
        {
          id: i,
          commentContent: '很感兴趣，有空来医院聊聊好吧，欢迎欢迎欢迎欢迎欢迎',
          commentUserId: 100022,
          commentUserName: '李科',
          commentUserType: 'DOCTOR',
          createTime: 1595458110487,
          commentId: i + 1037,
          parentId: 214324,
          deleted: 0,
          secondLevelCommentList: [],
        },
        {
          id: i + 1,
          commentContent: '很感兴趣，有空来医院聊聊好吧，欢迎欢迎欢迎欢迎欢迎',
          commentUserId: 100022,
          commentUserName: '李科' + i,
          commentUserType: 'DOCTOR',
          createTime: 1595458110487,
          commentId: i + 1437,
          parentId: 214324,
          deleted: 0,
          secondLevelCommentList: [
            {
              id: i + 133,
              commentContent: '好的，我明天就来医院',
              commentUserId: 100023,
              commentUserName: '任亮' + i,
              commentUserType: 'REPRESENT',
              createTime: 1595458110487,
              commentId: i + 5337,
              parentId: 214324,
              respondent: '路飞',
              respondentUserType: 'REPRESENT',
              deleted: 0,
            },
            {
              id: i + 112,
              commentContent: '回复内容' + i,
              commentUserId: 100023,
              commentUserName: '任亮22' + i + 4,
              commentUserType: 'REPRESENT',
              createTime: 1595458110487,
              commentId: i + 10937,
              parentId: 214324,
              respondent: '路飞',
              respondentUserType: 'DOCTOR',
              deleted: 1,
            },
            {
              id: i + 112,
              commentContent: '回复内容' + i,
              commentUserId: 100023,
              commentUserName: '任亮22' + i + 4,
              commentUserType: 'DOCTOR',
              createTime: 1595458110487,
              commentId: i + 10937,
              parentId: 214324,
              respondent: '路飞',
              respondentUserType: 'DOCTOR',
              deleted: 0,
            },
          ],
        },
        {
          id: i + 4,
          commentContent: '评论内容',
          commentUserId: 100022,
          commentUserName: '李科2' + i,
          commentUserType: 'DOCTOR',
          createTime: 1595458110487,
          commentId: i + 2437,
          parentId: 214324,
          deleted: 0,
          secondLevelCommentList: [
            {
              id: i + 3323,
              commentContent: '回复内容',
              commentUserId: 100023,
              commentUserName: '任亮3' + i,
              commentUserType: 'REPRESENT',
              createTime: 1595458110487,
              commentId: i + 3337,
              parentId: 214324,
              respondent: '路飞',
              respondentUserType: 'REPRESENT',
              deleted: 1,
            },
          ],
        },
        {
          id: i + 5,
          commentContent: '评论内容',
          commentUserId: 100022,
          commentUserName: '李科3' + i,
          commentUserType: 'DOCTOR',
          createTime: 1595458110487,
          commentId: i + 5437,
          parentId: 214324,
          deleted: 1,
          secondLevelCommentList: [
            {
              id: i + 2323,
              commentContent: '回复内容',
              commentUserId: 100023,
              commentUserName: '任亮4' + i,
              commentUserType: 'DOCTOR',
              createTime: 1595458110487,
              commentId: i + 8337,
              respondent: '路飞',
              respondentUserType: 'REPRESENT',
              parentId: 214324,
              deleted: 0,
            },
          ],
        },
      ]);
    }
    res.send({
      content: {
        records: re,
        tc: 30,
        ps: 10,
        pn: 1,
        total: 4,
        searchCount: true,
        current: 1,
        size: 10,
        hitCount: false,
        pages: 1,
      },
      status: 'SUCCESS',
    });
  },
  'POST /comment/num': {
    content: {
      commentNum: 900,
    },
    status: 'OK',
  },
  'POST /comment/add': {
    content: {},
    status: 'OK',
  },
  'POST /favorite/exists': {
    content: { exists: true },
    status: 'OK',
  },
  'POST /favorite/add-or-cancel': {
    content: {},
    status: 'OK',
  },
};

module.exports = proxy;
