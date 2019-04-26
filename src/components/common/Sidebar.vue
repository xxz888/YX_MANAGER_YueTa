<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse"
                 background-color="#FBFBFB"
                 text-color="#3A3B3D"
                 active-text-color="#29A7F2"
                 unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span class="sliderTextColor" slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span class="sliderTextColor" slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-lx-home',
                        index: 'AHome',
                        title: '首页页面'
                    },
                    {
                        icon: 'el-icon-lx-cascades',
                        index: 'BUser',
                        title: '用户管理',
                        subs: [
                            {
                                index: 'BUser',
                                title: '用户管理',
                            },
                            {
                                index: 'Check1',
                                title: '认证审核',
                            },
                            {
                                index: 'Blacklist',
                                title: '黑名单'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-lx-emoji',
                        index: 'CLoveOrder',
                        title: '约会订单'
                    },
                    {
                        icon: 'el-icon-lx-favor',
                        index: 'DLimit',
                        title: '运营管理',
                        subs: [
                            // {
                            //     index: 'DLimit',
                            //     title: '运营管理'
                            // },
                            {
                                index: 'AServerCenter',
                                title: '客服中心'
                            },
                            {
                                index: 'BQuestion1',
                                title: '常见问题',
                            },
                            {
                                index: 'BQuestion2',
                                title: '常见问题详情'
                            },
                            {
                                index: 'CShop1',
                                title: '商城设置',
                            },
                            {
                                index: 'CShop2',
                                title: 'vip设置'
                            },
                            {
                                index: 'CShop3',
                                title: '约豆设置'
                            },
                            {
                                index: 'DWriter',
                                title: '文案设置'
                            },
                            {
                                index: 'EReport1',
                                title: '举报中心',
                            },
                            {
                                index: 'FOther1',
                                title: '其他设置'
                            },
                            {
                                index: 'GTag',
                                title: '标签管理'
                            },
                        ]
                    },
                    {
                        icon: 'el-icon-rank',
                        index: 'EMoney',
                        title: '财务管理',
                        subs: [
                            {
                                index: 'EMoney',
                                title: '财务管理',
                            },
                            {
                                index: 'OutMoney1',
                                title: '提现管理',
                            },
                            {
                                index: 'OutMoney2',
                                title: '提现详情',
                            }
                        ]
                    },

                ]
                // items: [
                //     {
                //         icon: 'el-icon-lx-home',
                //         index: 'dashboard',
                //         title: '系统首页'
                //     },
                //     {
                //         icon: 'el-icon-lx-cascades',
                //         index: 'table',
                //         title: '基础表格'
                //     },
                //     {
                //         icon: 'el-icon-lx-copy',
                //         index: 'tabs',
                //         title: 'tab选项卡'
                //     },
                //     {
                //         icon: 'el-icon-lx-calendar',
                //         index: '3',
                //         title: '表单相关',
                //         subs: [
                //             {
                //                 index: 'form',
                //                 title: '基本表单'
                //             },
                //             {
                //                 index: '3-2',
                //                 title: '三级菜单',
                //                 subs: [
                //                     {
                //                         index: 'editor',
                //                         title: '富文本编辑器'
                //                     },
                //                     {
                //                         index: 'markdown',
                //                         title: 'markdown编辑器'
                //                     },
                //                 ]
                //             },
                //             {
                //                 index: 'upload',
                //                 title: '文件上传'
                //             }
                //         ]
                //     },
                //     {
                //         icon: 'el-icon-lx-emoji',
                //         index: 'icon',
                //         title: '自定义图标'
                //     },
                //     {
                //         icon: 'el-icon-lx-favor',
                //         index: 'charts',
                //         title: 'schart图表'
                //     },
                //     {
                //         icon: 'el-icon-rank',
                //         index: '6',
                //         title: '拖拽组件',
                //         subs: [
                //             {
                //                 index: 'drag',
                //                 title: '拖拽列表',
                //             },
                //             {
                //                 index: 'dialog',
                //                 title: '拖拽弹框',
                //             }
                //         ]
                //     },
                //     {
                //         icon: 'el-icon-lx-warn',
                //         index: '7',
                //         title: '错误处理',
                //         subs: [
                //             {
                //                 index: 'permission',
                //                 title: '权限测试'
                //             },
                //             {
                //                 index: '404',
                //                 title: '404页面'
                //             }
                //         ]
                //     }
                // ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 200px;
    }
    .sidebar > ul {
        height:100%;
    }
    .sliderTextColor{
        /*color: white;*/
        font-weight: bold
    }
</style>
