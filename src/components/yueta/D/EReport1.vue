<template>
    <div style="background-color: white">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="待处理" name="0"></el-tab-pane>
            <el-tab-pane label="已处理" name="1"></el-tab-pane>
        </el-tabs>


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
                    prop="id"
                    label="序号"
                    width="50"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="aim_info.mobile"
                    label="被举报账号"
                    width="120"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="aim_info.username"
                    label="被举报人"
                    width="100">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="aim_gender"
                    label="性别"
                    width="50"
                    :formatter="sexFormatter"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="inform_times"
                    label="被举报次数"
                    width="90">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="own_info.mobile"
                    label="举报账号"
                    width="120">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="own_info.username"
                    label="举报人"
                    width="100">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="city"
                    label="图片"
                    width="50">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="publish_time"
                    label="举报时间"
                    width="100">
            </el-table-column>
            <el-table-column
                    v-if="showOtherItemBOOL"
                    align="center"
                    prop="status"
                    label="状态"
                    width="100">
            </el-table-column>
            <el-table-column
                    align="center"
                    fixed="right"
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button @click="seeDetailInfo(scope.$index,scope.row)"  type ='primary' size="small">详情</el-button>
                </template>
            </el-table-column>
        </el-table>

        <div class="block">
            <el-pagination
                    style="margin: 50px auto;"
                    align="center"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="20"
                    layout="prev, pager, next, jumper"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EReport1",
        data () {
            return {
                currentPage:1,
                formInline: {

                },
                form:{
                    data1:'',
                    data2:''
                },
                activeName: '0',
                showOtherItemBOOL:false,
                tableData: []
            };
        },
        created(){
            this.getData(this.activeName);
        },
        watch:{
            '$route':'getData'
        },
        methods:{
            sexFormatter(val){
                var sex = val.aim_info.gender;
                return sex == 0 ? '男' : sex == 1 ? '女' : '不详';
            },
            getData(val){
                this.$axios.get("/api2/users/get_inform/" + this.currentPage.toString() + '/' + val + '/',{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    this.tableData = res.data;
                })
            },
            handleClick(tab, event) {
                console.log(tab, event);
                if (tab.name == 0){
                    this.showOtherItemBOOL = false;
                } else {
                    this.showOtherItemBOOL = true
                }
                this.getData(this.activeName);
            },
            onSubmit(){

            },
            //分页
            handleCurrentChange(val) {
                this.currentPage = val.toString();
                this.getData(this.activeName);
            },
            //查看用户详细信息
            seeDetailInfo(index,item){
                sessionStorage.setItem('XXZ3', JSON.stringify(this.tableData[index]))
                this.$router.push({
                    path:'/EReport2',
                })
            },
        }
    }
</script>

<style scoped>

</style>
