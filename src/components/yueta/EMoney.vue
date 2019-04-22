<template>
    <div>
        <div style="margin-top: 20px;">
            <p>财务数据：</p>
            <el-row :gutter="12" style="height: 200px">
                <el-col :span="4">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div style="text-align: center">
                            <p class="text item">昨日约币收益</p>
                            <p class="text item">12345</p>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="4">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div style="text-align: center">
                            <p class="text item">累计约币收益</p>
                            <p class="text item">12345</p>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="4">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div style="text-align: center">
                            <p class="text item">昨日金额收益(元)</p>
                            <p class="text item">12345</p>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="4">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div style="text-align: center">
                            <p class="text item">累计金额收益(元)</p>
                            <p class="text item">12345</p>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="4">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div style="text-align: center">
                            <p class="text item">已提现金额(元)</p>
                            <p class="text item">12345</p>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <div>
            <el-radio-group v-model="radio1" @change="selectGroup">
                <el-radio-button label="资金流水"></el-radio-button>
                <el-radio-button label="约币流水"></el-radio-button>
            </el-radio-group>
        </div>

        <el-form style="margin-top: 20px" :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
                <el-col :span="5">
                    <el-form-item label-width="20px">
                        <el-input v-model="formInline.user" placeholder="请输入账号/昵称/订单号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
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

        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="date"
                    label="序号"
                    width="50"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="订单号"
                    width="120"
                    align="center"

            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="province"
                    label="账号"
                    width="120">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="city"
                    label="用户昵称"
                    width="120">
            </el-table-column>
            <el-table-column
                    v-if="showOtherItemBOOL"
                    align="center"
                    prop="address"
                    label="支付金额"
                    width="80">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="address"
                    label="约币"
                    width="80">
            </el-table-column>
            <el-table-column
                    v-if="showOtherItemBOOL"
                    prop="zip"
                    label="平台分成"
                    width="80">
            </el-table-column>
            <el-table-column
                    v-if="showOtherItemBOOL"
                    align="center"
                    prop="zip"
                    label="用户分成"
                    width="80">
            </el-table-column>
            <el-table-column
                    v-if="showOtherItemBOOL"
                    align="center"
                    prop="zip"
                    label="类型"
                    width="60">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="zip"
                    label="支付内容"
            >
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="zip"
                    label="支付时间"
                    width="100"
                    >
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "EMoney",
        data () {
            return {
                radio1: '资金流水',
                formInline: {

                },
                form:{
                    data1:'',
                    data2:''
                },
                showOtherItemBOOL:true,
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: 200333
                }]
            };
        },
        methods:{
            selectGroup(val){
                if (val == '资金流水'){
                  this.showOtherItemBOOL = true;
                } else {
                  this.showOtherItemBOOL = false;
                }
            },
            onSubmit(){

            },
        }
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }
    span {
        font-size: 6px
    }
    span1{
        font-size: 16px;
    }
    .item {
        /*padding: 5px 0;*/
    }
    .box-card {
        width: 160px;
        height: 80px;
    }
</style>
