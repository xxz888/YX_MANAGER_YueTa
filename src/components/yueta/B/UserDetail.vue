<template >
    <div style="background-color: white;width: 100%">
        <!--第一行 基本信息 个人相册-->
        <el-row :gutter=15 style="margin-top: 20px;">
            <!--基本信息-->
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" :body-style="{ padding: '0px',height:'280px' }">
                        <div class="custom1">
                            <p class="custom2">基本信息</p>
                        </div>
                        <div style="margin: 10px">
                            <el-row>
                                <el-col :span="10">
                                    <img src="../../../assets/img/zw.png"
                                         class="image">
                                </el-col>
                                <el-col :span="12">
                                    <el-form style="padding-top: 10px;" ref="form" :model="form" label-width="80px">
                                        <el-form-item class="el-form-item" label="活动名称">
                                            <span v-model="form.name">123</span>
                                        </el-form-item>
                                        <el-form-item class="el-form-item" label="活动名称">
                                            <span v-model="form.name">123</span>
                                        </el-form-item>
                                        <el-form-item class="el-form-item" label="活动名称">
                                            <span v-model="form.name">123</span>
                                        </el-form-item>
                                        <el-form-item class="el-form-item" label="活动名称">
                                            <span v-model="form.name">123</span>
                                        </el-form-item>
                                        <el-form-item class="el-form-item" label="活动名称">
                                            <span v-model="form.name">123</span>
                                        </el-form-item>
                                    </el-form>

                                </el-col>
                            </el-row>
                            <div style="padding: 14px;">
                                <div class="bottom clearfix" style="text-align: center">
                                    <time class="time">最后登录时间{{ currentDate }}</time>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <!--轮播图片-->
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card" :body-style="{ padding: '0px',height:'280px' }">
                        <div class="custom1">
                            <p class="custom2">个人相册</p>
                        </div>
                        <div style="margin: 10px">
                            <el-carousel height="200px" indicator-position="outside">
                                <el-carousel-item v-for="item in 4" :key="item">
                                    <viewer>
                                        <img v-for="itemImg in 8" :key="itemImg" src="../../../assets/img/zw.png"
                                             style="width: 22%;height: 90px;margin-left: 10px;margin-bottom: 10px">
                                    </viewer>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-card>

                </div>
            </el-col>
        </el-row>
        <!--第二行 个人介绍 个人标签-->
        <el-row :gutter=15 style="margin-top: 20px;">
            <!--个人介绍-->
            <el-col :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" :body-style="{ padding: '0px',height:'120px' }">
                        <div class="custom1">
                            <p class="custom2">个人简介</p>
                        </div>
                        <div style="margin: 10px">
                            <span style="font-size: 6px">这个人很懒，什么都没有留下</span>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <!--个人标签-->
            <el-col  :span="12">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" :body-style="{ padding: '0px',height:'120px' }">
                        <div class="custom1">
                            <p class="custom2">个人标签</p>
                        </div>
                        <div style="margin: 10px">
                            <span style="font-size: 6px">女神，苗条，购物狂，吃货，电影，气质佳，时尚</span>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <!--第三行 关于ta-->
        <el-row style="margin-top: 20px;">
            <el-card class="box-card" :body-style="{ padding: '0px',height:'250px' }">
                <div class="custom1">
                    <p class="custom2">关于ta</p>
                </div>
                <div style="margin: 10px;height: 200px;">
                        <el-col>
                            <el-row >
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">约会意向:</span>
                                        <span style="line-height:65px">看电影/吃饭/旅行</span>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">约会意向:</span>
                                        <span style="line-height:65px">看电影/吃饭/旅行</span>                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">约会意向:</span>
                                        <span style="line-height:65px">看电影/吃饭/旅行</span>                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col>
                            <el-row >
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">约会意向:</span>
                                        <span style="line-height:65px">看电影/吃饭/旅行</span>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">约会意向:</span>
                                        <span style="line-height:65px">看电影/吃饭/旅行</span>                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">约会意向:</span>
                                        <span style="line-height:65px">看电影/吃饭/旅行</span>                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col>
                            <el-row >
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">约会意向:</span>
                                        <span style="line-height:65px">看电影/吃饭/旅行</span>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">约会意向:</span>
                                        <span style="line-height:65px">看电影/吃饭/旅行</span>                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">约会意向:</span>
                                        <span style="line-height:65px">看电影/吃饭/旅行</span>                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                </div>
            </el-card>
        </el-row>
        <!--第四行 认证信息-->
        <el-row :gutter=15 style="margin-top: 20px;">
            <!--认证信息-->
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" :body-style="{ padding: '0px',height:'480px' }">
                        <div class="custom1">
                            <p class="custom2">认证信息</p>
                        </div>
                        <div style="margin: 10px">
                            <el-row >
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">认证时间:</span>
                                        <span style="line-height:65px">2018.9.19  15:30</span>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row >
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px">
                                        <span style="line-height:65px">身份证正面:</span>
                                        <viewer>
                                            <img src="../../../assets/img/zw.png"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px">
                                        <span style="line-height:65px">身份证反面:</span>
                                        <viewer>
                                            <img src="../../../assets/img/zw.png"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px">
                                        <span style="line-height:65px">手持身份证照片:</span>
                                        <viewer>
                                            <img src="../../../assets/img/zw.png"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <div class="bottom" style="margin-left: 40px">
                            <el-button type="primary">提交认证</el-button>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <!--第四行 职业信息认证-->
        <el-row :gutter=15 style="margin-top: 20px;">
            <!--认证信息-->
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" :body-style="{ padding: '0px',height:'480px' }">
                        <div class="custom1">
                            <p class="custom2">职业认证信息</p>
                        </div>
                        <div style="margin: 10px">
                            <el-row >
                                <el-col :span="8">
                                    <div style="text-align: center;height: 65px">
                                        <span style="line-height:65px">提交审核时间:</span>
                                        <span style="line-height:65px">2018.9.19  15:30</span>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row >
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px">
                                        <span style="line-height:65px">职业图片:</span>
                                        <viewer>
                                            <img src="../../../assets/img/zw.png"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px">
                                        <span style="line-height:65px">职业图片:</span>
                                        <viewer>
                                            <img src="../../../assets/img/zw.png"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <!--拉黑按钮-->
        <el-row style="margin: 45px">
            <el-col :span="5">
                <el-button @click="laheiButton" type="danger"  size="info">&nbsp&nbsp&nbsp拉黑&nbsp&nbsp&nbsp</el-button>
            </el-col>
            <el-col :span="19">
                <div>
                    <p style="font-size: 14px;background-color: #EFEFEF;">
                        拉黑后不可操作：
                        该用户不能发布任何约会信息；无法进行邀约；不能进行任何付费项目（例如购买VIP、约币、付费查看照片等），（客户端提示：由于多次被举报，您已被列入黑名单，如有疑问可直接反馈平台客服）
                        <br>
                        拉黑后可操作：
                        可以登录app，查看其他用户信息，申请提现
                    </p>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
            </el-col>
        </el-row >


    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        data() {
            return {
                currentDate: new Date(),
                defaultImg: 'this.src="' + require('../../../assets/img/zw.png') + '"',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            };
        },
        methods:{
            laheiButton(){
                this.$confirm('拉黑后将限制该用户大部分操作，是否确认拉黑?', '提示', {
                    confirmButtonText: '确认拉黑',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '拉黑成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped>
    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .image {
        padding-left: 20px;
        padding-top: 20px;
        width: 70%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .el-form-item {
        margin: 0;
        padding: 0;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .custom1{
          background-color: #EFEFEF;
          height: 40px;
    }
    .custom2{
        height: 20px;
        margin-left: 10px;
        line-height:40px;
        font-size: 13px;
        color: #818181;
    }
    .content{
        background-color: white;
    }
    .bg-purple-light {
        background: #EFEFEF;
    }
    span{
        font-size: 6px
    }
</style>
