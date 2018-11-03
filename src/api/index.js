/* ========================================================
                        接口服务配置文件
======================================================== */

// 域名
// var host = 'http://127.0.0.1:3000';
var host = 'http://47.107.110.153';

export const api = {
  // 登录接口
  login: '/login ',
  // 退出接口
  quit: '/quit',
  // 会员活动
  member_activity: '/user/activity',
  // 购买会员
  buy_member: '/user/buy_member',
  // 提建议
  suggest: '/user/suggest',

  // 文章列表
  atclist: '/art/list',
  // 文章详情
  atcdetail: '/art/detail',

  // 主域
  host
}

export default {
  api
}

