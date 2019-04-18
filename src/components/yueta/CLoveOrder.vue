
<template>
    <div>
        <el-form  :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
                <el-col :span="4">
                    <el-form-item label-width="20px">
                        <el-input v-model="formInline.user" placeholder="请输入账号/昵称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-select v-model="formInline.region" placeholder="性别">
                            <el-option label="男" value="shanghai"></el-option>
                            <el-option label="女" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="请选择" value="shanghai"></el-option>
                            <el-option label="VIP" value="shanghai"></el-option>
                            <el-option label="非VIP" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-select v-model="formInline.region" placeholder="请选择">
                            <el-option label="请选择" value="shanghai"></el-option>
                            <el-option label="已认证" value="shanghai"></el-option>
                            <el-option label="未认证" value="beijing"></el-option>
                        </el-select>
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

        <div style="text-align: left">
            <span class="span1">发布中:</span><span class="span1">12344</span>
            <span class="span1">约会成功:</span><span class="span1">12344</span>
            <span class="span1">约会失效:</span><span class="span1">12344</span>

        </div>

        <el-row v-for="item in 10" :key="item" style="margin-top: 20px;">
            <el-card class="box-card" :body-style="{ padding: '0px'}">
                <div style="margin: 20px;height: 100px;">
                    <el-col :span="3">
                        <viewer style="width: 100%;text-align: center">
                            <img src="../../assets/img/zw.png"
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
                                                    <img src="../../assets/img/zw.png" style="width: 35px;height: 35px;border-radius: 35px;">
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
                                <img src="../../assets/img/zw.png"
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

        <div class="block">
            <el-pagination
                    style="margin: 50px auto;"
                    align="center"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="100"
                    layout="prev, pager, next, jumper"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CLoveOrder",
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
                }],
                currentPage3: 5,
                formInline: {
                    user: '',
                    region: ''
                },
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
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
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                },{
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
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                },{
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
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: 200333
                }]
            }
        },
        methods: {
            clickUserInfoButton(){
                this.$router.push({
                    path:'/UserDetail',
                    query:{

                    }
                })
            },
            onSubmit() {
                console.log('submit!');
            },
            handleClick(row) {
                console.log(row);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>
    span {
        font-size: 6px
    }
    span1{
        font-size: 16px;
    }
</style>
