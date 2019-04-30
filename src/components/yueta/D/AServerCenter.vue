<template>
    <div>
        <el-form style="margin-top: 20px" :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
                <el-col :span="6">
                    <el-form-item label-width="20px">
                        <el-input v-model="formInline.user" placeholder="请输入账号/昵称/订单号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="反馈时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="反馈时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="2">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">搜索</el-button>
                    </el-form-item>
                </el-col>





            </el-row>

        </el-form>
        <div>消息数据仅保留5天</div>
        <el-row v-for="item in tableData" :key="item.id" style="margin-top: 20px;">
            <el-card class="box-card" :body-style="{ padding: '0px'}">
                <div style="margin: 20px;height: 70px;">
                    <el-col :span="3">
                        <viewer style="width: 100%;text-align: center">
                            <img src="../../../assets/img/zw.png"
                                 style="width: 70px;height: 70px;
                                 margin-bottom: 10px;
                                 border-radius: 35px;">
                        </viewer>
                    </el-col>
                    <el-col :span="6">
                        <p >{{item.user_info.username}}&nbsp&nbsp(账号:{{item.user_info.mobile}})</p>
                        <p style="margin-top: 10px">{{item.problem}}</p>
                        <p style="margin-top: 10px">回复:{{item.answer}}</p>
                    </el-col>
                    <el-col :span="4">
                        <p>{{getLocalTime(item.submit_time)}}</p>
                    </el-col>
                    <el-col :span="4">
                        <p>{{item.status == 0 ? '未回复' : '已回复'}}</p>
                    </el-col>
                    <el-col  :span="7">
                        <el-button v-if="item.status == 0" @click="huifuAction(item.id)" type="primary">回复</el-button>
                        <el-button v-if="item.status == 1" disabled type="primary">已回复</el-button>

                    </el-col>
                </div>
                <el-row style="margin-top: 20px;margin-left: 130px;margin-bottom: 10px;width: 100%" :gutter="10">
                    <el-col :span="2" v-if="item.pic1 != 0">
                        <viewer>
                            <img :src="item.pic1"
                                 :onerror="defaultImg"
                                 style="width: 80px;height: 80px;margin-bottom: 10px;">
                        </viewer>
                    </el-col>
                    <el-col :span="2" v-if="item.pic2 != 0">
                        <viewer>
                            <img :src="item.pic2"
                                 :onerror="defaultImg"
                                 style="width: 80px;height: 80px;margin-bottom: 10px;">
                        </viewer>
                    </el-col>
                    <el-col :span="2" v-if="item.pic3 != 0">
                        <viewer>
                            <img :src="item.pic3"
                                 :onerror="defaultImg"
                                 style="width: 80px;height: 80px;margin-bottom: 10px;">
                        </viewer>
                    </el-col>
                </el-row>
                <el-dialog :close-on-click-modal="false" title="回复" :visible.sync="dialogTableVisible">
                    <el-input type="textarea" v-model="huifuInput"></el-input>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogTableVisible = false">取 消</el-button>
                        <el-button type="primary" @click="makeSure">确 定</el-button>
                    </div>
                </el-dialog>
            </el-card>

        </el-row>
    </div>

</template>

<script>
    export default {
        name: "AServerCenter",
        data(){
            return{
                formInline: {

                },
                defaultImg:'this.src="' + require('../../../assets/img_moren.png') + '"',
                huifuInput:'',
                huifuId:'',
                tableData:[],
                dialogTableVisible:false,
                form:{
                    data1:'',
                    data2:''
                },
            }
        },
        created(){
            this.getData();
        },
        watch:{
            '$route':'getData'
        },
        methods:{
            getData(){
                this.$axios.get("/api2/users/problem/1/",{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    this.tableData = res.data;
                })
            },
            huifuAction(val){
                this.dialogTableVisible = true;
                this.huifuId = val;

            },
            //回复确认
            makeSure(){
                var self = this;
                var dic = {
                    'problem_id':this.huifuId,
                    'answer':this.huifuInput,
                }
                this.$axios.post("/api2/users/problem/0/",dic,{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    self.$message.success('操作成功');
                    self.getData();
                })
                this.dialogTableVisible = false;
            },
            getLocalTime(nS) {
                return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
            },
            onSubmit(){

            }
        }
    }
</script>

<style scoped>
p{
    font-size: 14px;
}
</style>
