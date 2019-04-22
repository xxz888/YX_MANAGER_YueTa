<template>
    <div>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>流水号:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>201803101308</span>
            </el-col>
            <el-col :span="8">
                <span>当前状态:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>未打款</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>申请账号:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>152000000000</span>
            </el-col>
            <el-col :span="8">
                <span>申请人:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>陈先生</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>持卡人:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>张三</span>
            </el-col>
            <el-col :span="8">
                <span>提现类型:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>支付宝</span>
            </el-col>
            <el-col :span="8">
                <span>提现账号:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>15200000000</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>提现金额:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>¥1000.00</span>
            </el-col>
            <el-col :span="8">
                <span>申请时间:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>2018.5.13 12:30</span>
            </el-col>
            <el-col :span="8">
                <span>处理时间:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>2018.5.13 12:30</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>备注:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>--</span>
            </el-col>
        </el-row>


        <el-button @click="makeSure" style="margin: 40px" type="primary">&nbsp&nbsp确认打款&nbsp&nbsp</el-button>
        <el-button @click="cancleAction" style="margin: 40px" type="primary">&nbsp&nbsp拒绝&nbsp&nbsp</el-button>


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
        name: "OutMoney2",
        data(){
         return{
             dialogTableVisible: false,
         }
        },
        methods:{
            cancleAction(){
                this.dialogTableVisible = true;
            },
            cancleFooter(){
            },
            makeSure(){

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
