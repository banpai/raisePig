import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
    // 首页页面
    {
        path: '/',
        redirect: '/Index'
    },
    // 登陆页面 和 注册页面（在同一个页面）
    {
        path: '/Land',
        name: 'Land',
        component: resolve => require(['@/views/land/Land'], resolve)
    },
    // 忘记密码页面
    {
        path: '/Forgetpsd',
        name: 'Forgetpsd',
        component: resolve => require(['@/views/land/Forgetpsd'], resolve)
    },
    // 支付页面
    {
        path: '/Payment',
        name: 'Payment',
        component: resolve => require(['@/views/Payment'], resolve)
    },
    {
        path: '/Input',
        name: 'Input',
        component: resolve => require(['@/views/Input'], resolve)
    },
    {
        path: '/List',
        name: 'List',
        component: resolve => require(['@/views/List'], resolve)
    },
    {
        path: '/QrCodeScan',
        name: 'QrCodeScan',
        component: resolve => require(['@/views/QrCodeScan'], resolve)
    },
    // 我的资产
    {
        path: '/assets',
        name: 'assets',
        component: resolve => require(['@/views/assets/assets'], resolve)
    },
    // 错误页面
    {
        path: '/error',
        name: 'error',
        component: resolve => require(['@/views/error/error'], resolve)
    }
]

// 首页
const Index = () =>
    import ('@/views/Index')
const Attendance = () =>
    import ('@/views/index/components/Attendance/Attendance')
const Attendanceafter = () =>
    import ('@/views/index/components/Attendance/Attendanceafter')
const Luckdraw = () =>
    import ('@/views/index/components/Attendance/Luckdraw')
const Project = () =>
    import ('@/views/index/components/Project/Project')
const Household = () =>
    import ('@/views/index/components/Household/Household')
const Recommend = () =>
    import ('@/views/index/components/Recommend/Recommend')
const Recrecords = () =>
    import ('@/views/index/components/Recommend/Recrecords')
const Farmlive = () =>
    import ('@/views/index/components/Farmlive/Farmlive')
const Foods = () =>
    import ('@/views/index/components/Foods/Foods')
const Notice = () =>
    import ('@/views/index/components/Notice/Notice')
const Viewpast = () =>
    import ('@/views/index/components/Pcards/Viewpast')
const Pcardsdeta = () =>
    import ('@/views/index/components/Pcards/Pcardsdeta')
const Rank = () =>
    import ('@/views/index/components/Pcards/Rank')
const Adoporders = () =>
    import ('@/views/index/components/Pcards/Adoporders')
const Confirmorder = () =>
    import ('@/views/index/components/Pcards/Confirmorder')
const Custservice = () =>
    import ('@/views/index/components/Custservice/Custservice')
const Activity = () =>
    import ('@/views/index/components/Activity/Activity')

export const shouye = [
    { path: '/Index', name: '首页', component: Index },
    { path: '/index/Notice', name: '系统公告', component: Notice },
    { path: '/index/Attendance', name: '签到', component: Attendance },
    { path: '/index/Attendanceafter', name: '签到后', component: Attendanceafter },
    { path: '/index/Luckdraw', name: '抽奖', component: Luckdraw },
    { path: '/index/Project', name: '项目详情', component: Project },
    { path: '/index/Household', name: '公司+农户', component: Household },
    { path: '/index/Recommend', name: '人人推荐', component: Recommend },
    { path: '/index/Recrecords', name: '推荐记录', component: Recrecords },
    { path: '/index/Farmlive', name: '视频展示', component: Farmlive },
    { path: '/index/Foods', name: '润农食品', component: Foods },
    { path: '/index/Viewpast', name: '查看往期', component: Viewpast },
    { path: '/index/Pcardsdeta', name: '养猪卡详情', component: Pcardsdeta },
    { path: '/index/Rank', name: '排行', component: Rank },
    { path: '/index/Adoporders', name: '认养订单', component: Adoporders },
    { path: '/index/Confirmorder', name: '确认订单', component: Confirmorder },
    { path: '/index/Custservice', name: '客服服务', component: Custservice },
    { path: '/index/Activity', name: '活动详情', component: Activity },
];

// 我的资产
const Myassets = () =>
    import ('@/views/myassets/Myassets')
const Yestearnings = () =>
    import ('@/views/myassets/components/Yestearnings')
const Cumincome = () =>
    import ('@/views/myassets/components/Cumincome')
const Sellrecord = () =>
    import ('@/views/myassets/components/Sellrecord')
const Tosell = () =>
    import ('@/views/myassets/components/Tosell')
const Selldetails = () =>
    import ('@/views/myassets/components/Selldetails')
const Settlement = () =>
    import ('@/views/myassets/components/Settlement')
export const myass = [
    { path: '/Myassets', name: '我的资产', component: Myassets },
    { path: '/Myassets/Yestearnings', name: '昨日收益', component: Yestearnings },
    { path: '/Myassets/Cumincome', name: '累计收益', component: Cumincome },
    { path: '/Myassets/Sellrecord', name: '卖猪记录', component: Sellrecord },
    { path: '/Myassets/Tosell', name: '卖猪操作页面', component: Tosell },
    { path: '/Myassets/Selldetails', name: '卖猪详情', component: Selldetails },
    { path: '/Myassets/Settlement', name: '卖猪结算', component: Settlement },
]

// 个人中心页面的路由
export const personalCenter = [
    { path: '/my', name: '个人中心', component: resolve => { require(['@/views/my/my'], resolve); } },
    { path: '/my/Collection', name: '我的收藏', component: resolve => { require(['myComponents/collection/collection'], resolve); } },
    { path: '/my/Balance', name: '我的余额', component: resolve => { require(['myComponents/balance/balance'], resolve); } },
    { path: '/my/Balance/bill', name: '我的余额账单明细', component: resolve => { require(['myComponents/balance/components/bill'], resolve); } },
    { path: '/my/Balance/Withdrawals', name: '我的余额钱包提现', component: resolve => { require(['myComponents/balance/components/Withdrawals'], resolve); } },
    { path: '/my/Contract', name: '我的合同', component: resolve => { require(['myComponents/contract/contract'], resolve); } },
    { path: '/my/Coupon', name: '我的优惠券', component: resolve => { require(['myComponents/coupon/coupon'], resolve); } },
    { path: '/my/InformationEdit', name: '个人信息编辑', component: resolve => { require(['myComponents/informationEdit/informationEdit'], resolve); } },
    { path: '/my/InformationEdit/changePass', name: '个人信息编辑-修改密码', component: resolve => { require(['myComponents/informationEdit/components/changePass'], resolve); } },
    { path: '/my/InformationEdit/changeIcon', name: '个人信息编辑-修改头像', component: resolve => { require(['myComponents/informationEdit/components/changeIcon'], resolve); } },
    { path: '/my/Invitation', name: '邀请好友', component: resolve => { require(['myComponents/invitation/invitation'], resolve); } },
    { path: '/my/Member', name: '我的会员', component: resolve => { require(['myComponents/member/member'], resolve); } },
    { path: '/my/News', name: '我的消息', component: resolve => { require(['myComponents/news/news'], resolve); } },
    { path: '/my/News/ShopNews', name: '我的消息-商城消息', component: resolve => { require(['myComponents/news/components/ShopNews'], resolve); } },
    { path: '/my/News/CouponNews', name: '我的消息-优惠券消息', component: resolve => { require(['myComponents/news/components/CouponNews'], resolve); } },
    { path: '/my/News/ActivityNews', name: '我的消息-活动消息', component: resolve => { require(['myComponents/news/components/ActivityNews'], resolve); } },
    { path: '/my/News/SystemNews', name: '我的消息-系统消息', component: resolve => { require(['myComponents/news/components/SystemNews'], resolve); } },
    { path: '/my/Pig', name: '我的猪只', component: resolve => { require(['myComponents/pig/pig'], resolve); } },
    { path: '/my/Pig/pigDetails', name: '我的猪只-详情', component: resolve => { require(['myComponents/pig/components/pigDetails'], resolve); } },
    { path: '/my/Pig/pigDetails/Farm', name: '我的猪-养殖场', component: resolve => { require(['myComponents/pig/components/Farm'], resolve); } },
    { path: '/my/Pig/pigDetails/Insurance', name: '我的猪只-保险', component: resolve => { require(['myComponents/pig/components/Insurance'], resolve); } },
    { path: '/my/PorkOrder', name: '吃肉订单', component: resolve => { require(['myComponents/porkOrder/porkOrder'], resolve); } },
    { path: '/my/PorkOrder/logistics', name: '吃肉订单-查看物流', component: resolve => { require(['myComponents/porkOrder/components/logistics'], resolve); } },
    { path: '/my/PorkOrder/OrderDetails', name: '吃肉订单-详情', component: resolve => { require(['myComponents/porkOrder/components/OrderDetails'], resolve); } },
    { path: '/my/PorkOrder/evaluate', name: '吃肉订单-发表评论', component: resolve => { require(['myComponents/porkOrder/components/evaluate'], resolve); } },
    { path: '/my/RaisePigOrder', name: '养猪订单', component: resolve => { require(['myComponents/raisePigOrder/raisePigOrder'], resolve); } },
    { path: '/my/Set', name: '设置', component: resolve => { require(['myComponents/set/set'], resolve); } },
    { path: '/my/Set/Details', name: '设置关于-人人养猪', component: resolve => { require(['myComponents/set/components/Details'], resolve); } },
    { path: '/my/Set/Feedback', name: '设置-意见反馈', component: resolve => { require(['myComponents/set/components/Feedback'], resolve); } },
    { path: '/my/Profit', name: '我的收益', component: resolve => { require(['myComponents/profit/profit'], resolve); } },
    { path: '/my/AboutUS', name: '关于我们', component: resolve => { require(['myComponents/aboutUS/aboutUS'], resolve); } },
    { path: '/my/AboutUS/ProjectIntroduction', name: '关于我们-项目介绍', component: resolve => { require(['myComponents/aboutUS/components/ProjectIntroduction'], resolve); } },
    { path: '/my/AboutUS/Terms', name: '关于我们-服务条款', component: resolve => { require(['myComponents/aboutUS/components/Terms'], resolve); } },
    { path: '/my/AboutUS/UnderstandUs', name: '关于我们-了解我们', component: resolve => { require(['myComponents/aboutUS/components/UnderstandUs'], resolve); } },
    { path: '/my/AboutUS/UserFeedback', name: '关于我们-用户反馈', component: resolve => { require(['myComponents/aboutUS/components/UserFeedback'], resolve); } },
    { path: '/my/Call', name: '在线客服', component: resolve => { require(['myComponents/call/call'], resolve); } }
];

// 猪肉商城页面的路由
export const ShoppingMall = [
    { path: '/shop', name: '猪肉商城', component: resolve => require(['@/views/shop/shop'], resolve) },
    { path: '/shop/Cooked', name: '猪肉商城-熟食', component: resolve => require(['shopCcomponents/Cooked/Cooked'], resolve) },
    { path: '/shop/Raw', name: '猪肉商城-生肉', component: resolve => require(['shopCcomponents/Raw/Raw'], resolve) },
    { path: '/shop/Cart', name: '猪肉商城-购物车', component: resolve => require(['shopCcomponents/Cart/Cart'], resolve) },
    { path: '/shop/Address', name: '猪肉商城-选择收货地址', component: resolve => require(['shopCcomponents/Address/Address'], resolve) },
    { path: '/shop/Details', name: '猪肉商城-商品详情', component: resolve => require(['shopCcomponents/Details/Details'], resolve) },
    { path: '/shop/Order', name: '猪肉商城-订单信息', component: resolve => require(['shopCcomponents/Order/Order'], resolve) },
    { path: '/shop/DeliveryAddress', name: '猪肉商城-收获地址', component: resolve => require(['shopCcomponents/DeliveryAddress/DeliveryAddress'], resolve) },
    { path: '/shop/AddDeliveryAddress', name: '猪肉商城-添加收获地址', component: resolve => require(['shopCcomponents/DeliveryAddress/AddDeliveryAddress'], resolve) },
    { path: '/shop/comment', name: '猪肉商城-评论', component: resolve => require(['shopCcomponents/comment/comment'], resolve) }
];

export const routers = [
    ...routes,
    ...personalCenter,
    ...shouye,
    ...myass,
    ...ShoppingMall
];

const router = new Router({
    routes: routers
})

export default router