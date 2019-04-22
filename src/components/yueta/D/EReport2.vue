<template>
    <div style="background-color: white">
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>举报时间:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>201803101308</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>被举报账号:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>152000000000</span>
            </el-col>
            <el-col :span="8">
                <span>被举报人:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>小小</span>
            </el-col>
            <el-col :span="8">
                <span>被举报次数:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>2</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>举报账号:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>张三</span>
            </el-col>
            <el-col :span="8">
                <span>举报人:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>笑笑</span>
            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="24">
                <span>相关图片:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <div style="width: 100%;margin-top: 20px">
                    <viewer>
                        <el-row :gutter="80">
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

            </el-col>
        </el-row>
        <el-row style="margin: 40px">
            <el-col :span="8">
                <span>补充描述:</span>
                <span>&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                <span>--</span>
            </el-col>
        </el-row>


        <el-button @click="makeSure" style="margin: 40px" type="primary">&nbsp&nbsp拉黑&nbsp&nbsp</el-button>
        <el-button @click="cancleAction" style="margin: 40px"  type="info">&nbsp&nbsp忽略&nbsp&nbsp</el-button>


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
            }
        },
        methods:{
            cancleAction(){

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
