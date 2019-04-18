<template>
    <div>
        <!--第三行 关于ta-->
        <el-row v-for="item in 10" :key="item" style="margin-top: 20px;">
            <el-card class="box-card" :body-style="{ padding: '0px'}">
                <div style="margin: 20px;height: 100px;">
                    <el-col :span="3">
                        <viewer style="width: 100%;text-align: center">
                            <img src="../../../assets/img/zw.png"
                                 style="width: 70px;height: 70px;
                                 margin-bottom: 10px;
                                 border-radius: 35px;">
                        </viewer>
                        <div style="width: 100%;text-align: center;font-size: 14px">
                            <p>笑笑</p>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div style="text-align: left;height: 65px">
                            <span style="line-height:40px">发布时间:</span>
                            <span style="line-height:40px">2018.8.31 13:30</span>
                            <br>
                            <span style="line-height:40px">约会方式:</span>
                            <span style="line-height:40px">打赏</span>
                        </div>
                    </el-col>
                    <el-col :span="5">
                        <div style="text-align: left;height: 65px">
                            <span style="line-height:40px">约会时间:</span>
                            <span style="line-height:40px">2018.8.31 一天</span>
                            <br>
                            <span style="line-height:40px">打赏赏金:</span>
                            <span style="line-height:40px">200</span></div>
                    </el-col>
                    <el-col :span="5">
                        <div style="text-align:left;height: 65px">
                            <span style="line-height:40px">约会地点:</span>
                            <span style="line-height:40px">皇后酒吧（保俶路）</span>
                            <br>
                            <span style="line-height:40px">约会内容:</span>
                            <span style="line-height:40px">看电影，吃饭，逛街</span>
                        </div>
                    </el-col>
                    <el-col :span="3">
                        <div style="text-align: left;height: 65px">
                            <span style="line-height:40px">状态:</span>
                            <span style="line-height:40px">发布中</span></div>
                    </el-col>
                    <el-col :span="3">
                        <div style="text-align: left;">
                            <el-popover
                                    placement="right"
                                    width="400"
                                    trigger="click">
                                <el-table :data="gridData">
                                    <el-table-column width="70" property="date">
                                        <template slot-scope="scope">
                                            <div style="width: 100%;text-align: center">
                                                <viewer >
                                                    <img src="../../../assets/img/zw.png" style="width: 35px;height: 35px;border-radius: 35px;">
                                                </viewer>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column width="70" property="name">
                                    </el-table-column>
                                    <el-table-column width="100" property="address">
                                    </el-table-column>
                                    <el-table-column width="160">
                                        <template slot-scope="scope">
                                            <div style="width: 100%;text-align: right">
                                                <el-button @click="clickUserInfoButton" size="small" type="primary">查看</el-button>
                                            </div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <el-button slot="reference" type="primary">查看报名</el-button>
                            </el-popover>
                            <div style="width: 100%;text-align: left;margin-top: 20px;color: darkgrey;">
                                <span>报名人数:100人</span>
                            </div>
                        </div>
                    </el-col>
                </div>
                <div style="margin-left: 120px;margin-bottom: 20px;width: 100%">
                    <viewer>
                        <el-row :gutter="20">
                            <el-col :span="2" v-for="imgItem in 5" :key="imgItem">
                                <img src="../../../assets/img/zw.png"
                                     style="
                                     width: 80px;
                                     height: 80px;
                                     margin-bottom: 10px;">
                            </el-col>
                        </el-row>
                    </viewer>
                </div>
            </el-card>
        </el-row>

        <!--<video-player  class="video-player vjs-custom-skin"-->
        <!--ref="videoPlayer"-->
        <!--:playsinline="true"-->
        <!--:options="playerOptions"-->
        <!--&gt;</video-player>-->

    </div>
</template>

<script>
    export default {
        name: "TaYaoYue",
        data() {
            return {
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: 'VIP 已认证'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: 'VIP 已认证'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: 'VIP 已认证'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: 'VIP 已认证'
                }]
            }
        },
        methods:{
            clickUserInfoButton(){
                this.$router.push({
                    path:'/UserDetail',
                    query:{

                    }
                })
            }
        }
    }
</script>

<style scoped>
    span {
        font-size: 6px
    }
</style>
