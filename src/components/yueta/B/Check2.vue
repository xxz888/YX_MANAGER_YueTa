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
                                    <img  :onerror="defaultImg"
                                          :src="form.photo"
                                          class="image">
                                </el-col>
                                <el-col :span="12">
                                    <el-form :label-position="positionValue" style="padding-top: 10px;" ref="form" :model="form" label-width="80px">
                                        <el-form-item  class="el-form-item" label="昵称:">
                                            <p>{{form.username}}</p>
                                        </el-form-item>
                                        <el-form-item class="el-form-item" label="账号:">
                                            <p>{{form.mobile}}</p>
                                        </el-form-item>
                                        <el-form-item class="el-form-item" label="性别:">
                                            <p>{{form.gender==0?'男':'女'}}</p>
                                        </el-form-item>
                                        <el-form-item class="el-form-item" label="年龄:">
                                            <p>{{form.age}}</p>
                                        </el-form-item>
                                        <el-form-item class="el-form-item" label="注册时间:">
                                            <p>{{form.date_joined}}</p>
                                        </el-form-item>
                                    </el-form>

                                </el-col>
                            </el-row>
                            <div style="padding: 14px;">
                                <div class="bottom clearfix" style="text-align: center">
                                    <time class="time">最后登录时间{{ form.last_login }}</time>
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
                                <el-carousel-item v-for="item in Math.ceil(form.pic_list.length/8.0)" :key="item">
                                    <viewer>
                                        <img v-for="itemImg in form.pic_list.length" :key="itemImg" :src="itemImg"
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
                            <span style="font-size: 6px">{{form.introduction}}</span>
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
                            <span style="font-size: 6px"></span>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <!--第三行 关于ta-->
        <el-row style="margin-top: 20px;" :gutter="10">
            <el-card class="box-card" :body-style="{ padding: '0px',height:'300px' }">
                <div class="custom1">
                    <p class="custom2">关于ta</p>
                </div>
                <div style="margin: 30px;">
                    <el-col style="margin-top: 10px">
                        <el-row >
                            <el-col :span="8">
                                <el-form :label-position="positionValue" label-width="80px">
                                    <el-form-item label="约会意向:">
                                        <p style="">{{form.program}}</p>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <el-col :span="8">
                                <el-form :label-position="positionValue" label-width="80px">
                                    <el-form-item label="感情状况:">
                                        <p style="">{{
                                            form.emotion==0?'保密':
                                            form.emotion==1?'已婚':
                                            form.emotion==2?'单身':
                                            form.emotion==3?'热恋中': '保密'}}
                                        </p>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <el-col :span="8">
                                <el-form :label-position="positionValue" label-width="80px">
                                    <el-form-item label="职业:">
                                        <p>{{form.job}}</p>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col style="margin-top: 20px">
                        <el-row >
                            <el-col :span="8">
                                <el-form :label-position="positionValue" label-width="80px">
                                    <el-form-item label="学历:">
                                        <p style="">
                                            {{
                                            form.education=0?'初中':
                                            form.education=1?'高中':
                                            form.education=2?'专科':
                                            form.education=3?'本科':
                                            form.education=4?'研究生':
                                            form.education=5?'硕士':
                                            form.education=6?'博士':
                                            form.education=7?'博士后':''
                                            }}
                                        </p>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <el-col :span="8">
                                <el-form :label-position="positionValue" label-width="80px">
                                    <el-form-item label="身高:">
                                        <p style="">{{form.height}}</p>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <el-col :span="8">
                                <el-form :label-position="positionValue" label-width="80px">
                                    <el-form-item label="微信:">
                                        <p style="">{{form.wechat}}</p>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col style="margin-top: 20px">
                        <el-row >
                            <el-col :span="8">
                                <el-form :label-position="positionValue" label-width="80px">
                                    <el-form-item label="VIP:">
                                        <p style="">{{form.wechat}}</p>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                            <el-col :span="8">
                                <el-form :label-position="positionValue" label-width="80px">
                                    <el-form-item label="认证:">
                                        <p style="">{{form.auth_status?'已认证':'未认证'}}</p>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col style="margin-top: 20px">
                        <el-row >
                            <el-col :span="8">
                                <el-form :label-position="positionValue" label-width="80px">
                                    <el-form-item label="约币数:">
                                        <p style="">{{form.wallet.date_coin}}</p>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </el-col>

                </div>
            </el-card>
        </el-row>
        <!--第四行 认证信息-->
        <el-row v-if="start_dic.type == 1" :gutter=15 style="margin-top: 20px;">
            <!--认证信息-->
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <el-card class="box-card" :body-style="{ padding: '0px',height:'500px' }">
                        <div class="custom1">
                            <p class="custom2">认证信息</p>
                        </div>
                        <div style="margin: 10px">
                            <el-row style="margin: 30px;">
                                <el-col :span="8">
                                    <el-form action="">
                                        <el-form-item label="认证时间:">
                                            <p>{{getLocalTime(start_dic.apply_time)}}</p>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>

                            <el-row >
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px;">
                                        <span style="line-height:65px;font-size: 15px">身份证正面:</span>
                                        <viewer>
                                            <img :src="start_dic.pic1"
                                                 :onerror="defaultImg"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px">
                                        <span style="line-height:65px;font-size: 15px">身份证反面:</span>
                                        <viewer>
                                            <img :src="start_dic.pic2"
                                                 :onerror="defaultImg"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px">
                                        <span style="line-height:65px;font-size: 15px">手持身份证照片:</span>
                                        <viewer>
                                            <img :src="start_dic.pic3"
                                                 :onerror="defaultImg"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <!--审核中-->
                        <div v-if="start_dic.status == 2" class="bottom" style="margin-left: 40px">
                            <el-button @click="renzhengtongguoAction(start_dic.type)" type="primary">认证通过</el-button>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            <el-button @click="butongguoAction(start_dic.type)" type="info">不通过</el-button>
                        </div>
                        <!--审核成功-->
                        <div v-if="start_dic.status == 1" class="bottom" style="margin-left: 40px">
                            <p class="custom2">审核成功</p>
                        </div>
                        <!--审核失败-->
                        <div v-if="start_dic.status == 3" class="bottom" style="margin-left: 40px">
                            <el-form action="">
                                <el-form-item label="未通过原因:">
                                    <p>{{start_dic.reason}}</p>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
        <!--第四行 职业信息认证-->
        <el-row v-if="start_dic.type == 2" :gutter=15 style="margin-top: 20px;">
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
                                    <el-form action="">
                                        <el-form-item label="认证时间:">
                                            <p>{{getLocalTime(start_dic.apply_time)}}</p>
                                        </el-form-item>
                                    </el-form>
                                </el-col>
                            </el-row>

                            <el-row >
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px">
                                        <span style="line-height:65px">职业图片1:</span>
                                        <viewer>
                                            <img :src="start_dic.pic1"
                                                 :onerror="defaultImg"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                                <el-col :span="8">
                                    <div style="text-align: center;height: 300px">
                                        <span style="line-height:65px;font-size: 15px">职业图片2:</span>
                                        <viewer>
                                            <img :src="start_dic.pic2"
                                                 :onerror="defaultImg"
                                                 style="width: 80%;height: 200px">
                                        </viewer>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                        <!--审核中-->
                        <div v-if="start_dic.status == 2" class="bottom" style="margin-left: 40px">
                            <el-button @click="renzhengtongguoAction(start_dic.type)" type="primary">认证通过</el-button>
                            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                            <el-button @click="butongguoAction(start_dic.type)" type="info">不通过</el-button>
                        </div>
                        <!--审核成功-->
                        <div v-if="start_dic.status == 1" class="bottom" style="margin-left: 40px">
                            <p class="custom2">审核成功</p>
                        </div>
                        <!--审核失败-->
                        <div v-if="start_dic.status == 3" class="bottom" style="margin-left: 40px">
                            <el-form action="">
                                <el-form-item label="未通过原因:">
                                    <p>{{start_dic.reason}}</p>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>

        <el-dialog title="审核不通过" :visible.sync="dialogTableVisible">
            <el-input type="textarea" v-model="liyouInput" placeholder="请输入审核不过理由"></el-input>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="butongguoLastAction(start_dic.type)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        data() {
            return {
                user_id:'',
                dataArray:[],
                showBottomInfoBOOL:false,
                start_dic:{},
                positionValue:'left',
                dialogTableVisible:false,
                liyouInput:'',
                defaultImg: 'this.src="' + require('../../../assets/img_moren.png') + '"',
                form: {
                    VIP: '',
                    abscissa: '',
                    age: '',
                    auth_job: '',
                    auth_status: '',
                    city: '',
                    distance: '',
                    education: '',
                    emotion: '',
                    finally_on_line: '',
                    gender: '',
                    height: '',
                    id: '',
                    introduction: '',
                    job: '',
                    like: '',
                    mobile: '',
                    on_line: '',
                    ordinate: '',
                    photo: '',
                    pic_list: [],
                    program: '',
                    province: '',
                    username: '',
                    wechat: '',
                    weight: '',
                    wallet:{
                        date_coin:''
                    }
                }
            };
        },
        created(){
            this.getParams();
        },
        watch:{
            '$route':'getParams'
        },
        methods:{
            //认证通过
            renzhengtongguoAction(type){
                var self = this;
                this.$confirm('是否认证通过', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    self.postRenZhengData(type,'1','');
                }).catch(() => {});
            },
            //认证不通过
            butongguoAction(type){
              this.dialogTableVisible = true;
            },
            butongguoLastAction(type){
                this.postRenZhengData(type,'3',this.liyouInput);
            },
            //认证通过请求
            postRenZhengData(type,status,reason){
                var self = this;
                var dic = {
                    user_id:this.user_id,
                    type:type,
                    status:status,
                    reason:reason
                }
                this.$axios.post("/api2/users/black_list/0/",dic,{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    self.$message.success('操作成功');
                    self.$router.go(-1);//返回上一层
                })
                this.dialogTableVisible = false;
            },
            getParams(){
                this.user_id = this.$route.query.user_id;
                this.start_dic= JSON.parse(sessionStorage.getItem('XXZ2'));
                if (this.user_id && this.user_id.toString().length >0){
                    this.getData();
                }
            },
            //用户详情请求
            getData(){
                var self = this;
                this.$axios.post("/api2/nearby/detail/",{id:this.user_id},{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    self.form = res.data;
                    self.form.last_login = self.data_formatter_lastLogin(self.start_dic.last_login);
                    self.form.date_joined = self.data_formatter_lastLogin(self.start_dic.date_joined);
                })
            },
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
            },
            tayaoyueAction(){
                var id = this.form.id;
                this.$router.push({
                    path:'/TaYaoYue',
                    query:{
                        'id':id,
                    }
                })
            },
            data_formatter_lastLogin(val){
                if(val == null){
                    return '';
                }
                return val.toString().split('T')[0];
            },
            getLocalTime(nS) {
                return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
            },
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
