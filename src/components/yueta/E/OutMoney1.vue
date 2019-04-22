
<template>
    <div>
        <el-form style="margin-top: 20px" :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="3">
                <el-col :span="5">
                    <el-form-item label-width="20px">
                        <el-input v-model="formInline.user" placeholder="请输入账号/昵称/订单号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item>
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="未打款" value="1"></el-option>
                            <el-option label="拒绝" value="2"></el-option>
                            <el-option label="已打款" value="3"></el-option>

                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="申请时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="申请时间" v-model="form.date1" style="width: 100%;"></el-date-picker>
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
                    label="ID"
                    width="50"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="流水号"
                    width="120"
                    align="center"

            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="province"
                    label="申请账号"
                    width="120">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="city"
                    label="提现金额"
                    width="120">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="address"
                    label="持卡人"
                    width="80">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="address"
                    label="提现类型"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="提现账号"
                    width="80">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="zip"
                    label="申请时间"
                    width="80">
            </el-table-column>
            <el-table-column
                    v-if="showOtherItemBOOL"
                    align="center"
                    prop="zip"
                    label="处理时间"
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
                    label="状态"
                    width="100"
            >
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "OutMoney1",
        data () {
            return {
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
