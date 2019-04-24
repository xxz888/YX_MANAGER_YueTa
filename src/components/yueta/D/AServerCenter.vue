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
        <el-row v-for="item in 2" :key="item" style="margin-top: 20px;">
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
                        <p>笑笑(账号:152 0000 0000)</p>
                        <p>怎么约，有说明吗</p>
                        <p>回复：可以查看常见问题</p>
                    </el-col>
                    <el-col :span="4">
                        <p>2018.9.23 15:30</p>
                    </el-col>
                    <el-col :span="4">
                        <p>已回复</p>
                    </el-col>
                    <el-col :span="7">
                        <el-button @click="huifuAction" type="primary">回复</el-button>
                    </el-col>
                </div>

                <el-dialog title="回复" :visible.sync="dialogTableVisible">
                    <el-input type="textarea"></el-input>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogTableVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
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
                dialogTableVisible:false,
                form:{
                    data1:'',
                    data2:''
                },
            }
        },
        methods:{
            huifuAction(){
                this.dialogTableVisible = true;
            }
        }
    }
</script>

<style scoped>
p{
    font-size: 14px;
}
</style>
