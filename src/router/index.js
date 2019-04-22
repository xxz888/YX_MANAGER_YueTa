import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/AHome'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/AHome',
                    component: resolve => require(['../components/yueta/AHome.vue'], resolve),
                    meta: { title: '首页页面' }
                },
                {
                    path: '/BUser',
                    component: resolve => require(['../components/yueta/BUser.vue'], resolve),
                    meta: { title: '用户管理' }
                },
                {
                    path: '/UserDetail',
                    component: resolve => require(['../components/yueta/B/UserDetail.vue'], resolve),
                    meta: { title: '用户详情' }
                },
                {
                    path: '/TaYaoYue',
                    component: resolve => require(['../components/yueta/B/TaYaoYue.vue'], resolve),
                    meta: { title: 'ta的邀约' }
                },
                {
                    path: '/Check1',
                    component: resolve => require(['../components/yueta/B/Check1.vue'], resolve),
                    meta: { title: '认证审核' }
                },
                {
                    path: '/Check2',
                    component: resolve => require(['../components/yueta/B/Check2.vue'], resolve),
                    meta: { title: '审核详情' }
                },
                {
                    path: '/Blacklist',
                    component: resolve => require(['../components/yueta/B/Blacklist.vue'], resolve),
                    meta: { title: '黑名单' }
                },
                {
                    path: '/CLoveOrder',
                    component: resolve => require(['../components/yueta/CLoveOrder.vue'], resolve),
                    meta: { title: '约会订单' }
                },
                {
                    path: '/DLimit',
                    component: resolve => require(['../components/yueta/DLimit.vue'], resolve),
                    meta: { title: '运营管理' }
                },
                {
                    path: '/AServerCenter',
                    component: resolve => require(['../components/yueta/D/AServerCenter.vue'], resolve),
                    meta: { title: '客服中心' }
                },
                {
                    path: '/BQuestion1',
                    component: resolve => require(['../components/yueta/D/BQuestion1.vue'], resolve),
                    meta: { title: '常见问题' }
                },
                {
                    path: '/BQuestion2',
                    component: resolve => require(['../components/yueta/D/BQuestion2.vue'], resolve),
                    meta: { title: '常见问题详情' }
                },
                {
                    path: '/BQuestion3',
                    component: resolve => require(['../components/yueta/D/BQuestion3.vue'], resolve),
                    meta: { title: '问题分类' }
                },
                {
                    path: '/CShop1',
                    component: resolve => require(['../components/yueta/D/CShop1.vue'], resolve),
                    meta: { title: '商城设置' }
                },
                {
                    path: '/CShop2',
                    component: resolve => require(['../components/yueta/D/CShop2.vue'], resolve),
                    meta: { title: 'vip设置' }
                },
                {
                    path: '/CShop3',
                    component: resolve => require(['../components/yueta/D/CShop3.vue'], resolve),
                    meta: { title: '约豆设置' }
                },
                {
                    path: '/DWriter',
                    component: resolve => require(['../components/yueta/D/DWriter.vue'], resolve),
                    meta: { title: '文案设置' }
                },
                {
                    path: '/EReport1',
                    component: resolve => require(['../components/yueta/D/EReport1.vue'], resolve),
                    meta: { title: '举报中心' }
                },
                {
                    path: '/EReport2',
                    component: resolve => require(['../components/yueta/D/EReport2.vue'], resolve),
                    meta: { title: '举报详情' }
                },
                {
                    path: '/FOther1',
                    component: resolve => require(['../components/yueta/D/FOther1.vue'], resolve),
                    meta: { title: '其他设置' }
                },
                {
                    path: '/GTag',
                    component: resolve => require(['../components/yueta/D/GTag.vue'], resolve),
                    meta: { title: '标签管理' }
                },
                {
                    path: '/EMoney',
                    component: resolve => require(['../components/yueta/EMoney.vue'], resolve),
                    meta: { title: '财务管理' }
                },
                {
                    path: '/OutMoney1',
                    component: resolve => require(['../components/yueta/E/OutMoney1.vue'], resolve),
                    meta: { title: '提现管理' }
                },
                {
                    path: '/OutMoney2',
                    component: resolve => require(['../components/yueta/E/OutMoney2.vue'], resolve),
                    meta: { title: '提现详情' }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
