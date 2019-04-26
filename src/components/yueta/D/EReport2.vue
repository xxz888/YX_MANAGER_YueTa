<template>
    <div style="background-color: white">

        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>举报时间:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>{{start_dic.publish_time}}</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>被举报账号:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>{{start_dic.aim_info.mobile}}</span>
            </el-col>
            <el-col :span="8">
                <span>被举报人:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>{{start_dic.aim_info.username}}</span>
            </el-col>
            <el-col :span="8">
                <span>被举报次数:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>{{start_dic.inform_times}}</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>举报账号:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>{{start_dic.own_info.mobile}}</span>

            </el-col>
            <el-col :span="8">
                <span>举报人:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>{{start_dic.own_info.username}}</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>举报理由:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>{{start_dic.reason}}</span>

            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="24">
                <span>相关图片:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <div style="width: 100%;margin-top: 20px">
                        <el-row :gutter="80">
                            <el-col :span="2">
                                <viewer>
                                <img :src="start_dic.pic1"
                                     style="
                                     width: 80px;
                                     height: 80px;
                                     margin-bottom: 10px;">
                                </viewer>
                            </el-col>
                            <el-col :span="2">
                                <viewer>
                                    <img :src="start_dic.pic2"
                                         style="
                                     width: 80px;
                                     height: 80px;
                                     margin-bottom: 10px;">
                                </viewer>
                            </el-col>
                            <el-col :span="2">
                                <viewer>
                                    <img :src="start_dic.pic3"
                                         style="
                                     width: 80px;
                                     height: 80px;
                                     margin-bottom: 10px;">
                                </viewer>
                            </el-col>
                            <el-col :span="2">
                                <viewer>
                                    <img :src="start_dic.pic4"
                                         style="
                                     width: 80px;
                                     height: 80px;
                                     margin-bottom: 10px;">
                                </viewer>
                            </el-col>
                            <el-col :span="2">
                                <viewer>
                                    <img :src="start_dic.pic5"
                                         style="
                                     width: 80px;
                                     height: 80px;
                                     margin-bottom: 10px;">
                                </viewer>
                            </el-col>
                        </el-row>

                </div>

            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>补充描述:</span>
                <span>{{start_dic.describe}}</span>
                <span>--</span>
            </el-col>
        </el-row>

        <el-button v-if="start_dic.status=='未处理'" @click="makeSure" style="margin: 40px" type="primary">&nbsp&nbsp拉黑&nbsp&nbsp</el-button>
        <el-button v-if="start_dic.status=='未处理'" @click="cancleAction" style="margin: 40px"  type="info">&nbsp&nbsp忽略&nbsp&nbsp</el-button>
        <el-alert v-if="start_dic.status == '已拉黑'"
                title="已拉黑"
                type="info"
                center
                show-icon>
        </el-alert>
        <el-alert v-if="start_dic.status == '忽略'"
                  title="忽略"
                  type="info"
                  center
                  show-icon>
        </el-alert>
        <el-dialog title="拒绝原因" :visible.sync="dialogTableVisible">
            <el-input type="textarea"></el-input>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "EReport2",
        data(){
            return{
                dialogTableVisible: false,
                start_dic:{},
                defaultImg: 'this.src="' + require('../../../assets/img_moren.png') + '"',
            }
        },
        created(){
            this.getParams();
        },
        watch:{
            '$route':'getParams'
        },
        methods:{
            getParams(){
                this.start_dic= JSON.parse(sessionStorage.getItem('XXZ3'));
            },
            //忽略
            cancleAction(){
                var self = this;
                this.$confirm('是否确认忽略?', '提示', {
                    confirmButtonText: '忽略',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    self.hulueAction();
                }).catch(() => {});
            },
            hulueAction(){
                var self = this;
                this.$axios.post("/api/users/get_inform/0/0/",{'inform_id':this.start_dic.id},{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    self.$message.success('操作成功');
                    self.$router.go(-1);//返回上一层
                })
            },
            cancleFooter(){
            },
            makeSure(){
                var self = this;
                this.$confirm('是否确认忽略?', '提示', {
                    confirmButtonText: '忽略',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var user_id = this.start_dic.aim_id;
                    this.$axios.get('/api/users/black_list/'+user_id+'/',{headers:{
                            "Authorization":"JWT " + localStorage.getItem('token')
                        }}).then(res=>{
                        self.$message.success('操作成功');
                        self.$router.go(-1);//返回上一层
                    });

                }).catch(() => {});
            },
            getData(){
                var self = this;
                this.$axios.post("/api/users/get_inform/0/",{'inform_id':this.start_dic.id},{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    self.$message.success('操作成功');
                    self.$router.go(-1);//返回上一层
                })
            },

        }
    }
</script>

<style scoped>
    span{
        font-size: 15px;
        color: black;
    }
</style>
