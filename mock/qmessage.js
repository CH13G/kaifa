'use strict';

const qs = require('qs');
const mockjs = require('mockjs'); // 导入mock.js的模块

const Random = mockjs.Random; // 导入mock.js的随机数

// 数据持久化   保存在global的全局变量中

module.exports = {
  // post请求  /api/users/ 是拦截的地址   方法内部接受 request response对象
  'post /soc/task.json' (req, res) {
    setTimeout(() => {
      res.json({
        'value': {
          'createTime': '2017-06-08 09:09:04',
          'handleRemark': '',
          'handleTime': '',
          'handler': '',
          'msg': '[06-08 21:08 DIVIXWCN-eco0prod coBIService P1] [ecsProd-4-91 load1 6.4 > 5.0]',
          'status': '超时关闭',
          'taskId': 90,
          'taskType': '监控事件',
          'title': 'coBIService系统告警',
          'urgencyDegree': '低'
        }
      });
    }, 200);
  },

  'get /anttalk/warningMessage.json' (req, res) {
    setTimeout(() => {
      res.json({
        'stat': 'ok',
        'data': {
          'value': {
            'company': '浙江科技股份有限公司',
            'title': '浙江信息科技股份有限公司',
            'id': '2008123456780012',
            'name': '孙红雷',
            'codeId': '200812345678990012',
            'time': '2017-08-11',
            'cause': '交易支付跌0'
          }
        }
      })
    }, 200);
  },

  'get /anttalk/userLoginVarify.json' (req, res) {
    setTimeout(() => {
      res.json({
        'stat': 'ok',
        'data': {
          'data': 'ok',
        }
      })
    }, 200)
  }
}
