
<template>
    <div>
        <el-form  :inline="true" :model="formInline" class="demo-form-inline">
            <el-row>
                <el-col :span="3">
                    <el-form-item label-width="20px">
                        <el-input v-model="formInline.user_name" placeholder="请输入账号/昵称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-select v-model="formInline.gender" placeholder="请选择性别">
                            <el-option label="男" value="1"></el-option>
                            <el-option label="女" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="3">
                    <el-form-item>
                        <el-select v-model="formInline.is_vip" placeholder="是否为超级管理员">
                            <el-option label="VIP" value="1"></el-option>
                            <el-option label="非VIP" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="2">
                    <el-form-item>
                        <el-select v-model="formInline.is_auth" placeholder="认证">
                            <el-option label="已认证" value="1"></el-option>
                            <el-option label="未认证" value="0"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item>
                        <el-col :span="10">
                            <el-date-picker value-format="timestamp" type="date" placeholder="选择日期" v-model="formInline.finally_on_line_min" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="10">
                            <el-date-picker value-format="timestamp" type="date" placeholder="选择日期" v-model="formInline.finally_on_line_max" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                    <el-form-item>
                        <el-button type="primary" @click="onSearch">搜索</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button  @click="resetForm">重置</el-button>
                    </el-form-item>
                </el-col>





            </el-row>

        </el-form>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    align="center"
                    prop="id"
                    label="序号"
                    width="50">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="mobile"
                    label="手机"
                    width="110">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="username"
                    label="昵称"
                    width="70">
            </el-table-column>
            <el-table-column prop="photo" label="头像" align="center" width="70">
                <!-- 图片的显示 -->
                <template  slot-scope="scope">
                    <img :src="scope.row.photo"
                         :onerror="defaultImg"
                         style="width: 35px;height:35px;border-radius:50%" class="pre-img"/>
                </template>
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="gender"
                    label="性别"
                    width="50"
                    :formatter="sexFormatter"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="age"
                    label="年龄"
                    width="50"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="VIP"
                    label="VIP"
                    width="50"
                    :formatter="isVipFomatter"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="is_active"
                    label="是否认证"
                    width="80"
                    :formatter="isActiveFomatter"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="date_joined"
                    label="注册时间"
                    width="100"
                    :formatter="data_formatter"
            >
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="last_login"
                    label="最后登录时间"
                    width="100"
                    :formatter="data_formatter_lastLogin"
            >
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="is_black"
                    label="状态"
                    width="60"
                    :formatter="statusFormatter"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    fixed="right"
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button @click="seeDetailInfo(scope.row)"  type ='primary' size="small">查看</el-button>
                    <el-button @click="blackThisRow(scope.row)" :type="scope.row.is_black ? 'success' : 'danger'" size="small"
                               v-html="scope.row.is_black ? '恢复' : '拉黑'"></el-button>
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
        name: "BUser",
        data() {
            return {
                currentPage: 1,
                defaultImg:'this.src="' + require('../../assets/img_moren.png') + '"',
                isSearchBool:false,
                laheiButton:'拉黑',
                formInline: {
                    user_name: '',
                    gender: '',
                    is_vip:'',
                    is_auth:'',
                    finally_on_line_max:'',
                    finally_on_line_min:'',
                    page:''
                },
                form: {
                    id: '',
                    mobile: '',
                    birthday: '',
                    gender: '',
                    username: '',
                    photo: '',
                    age: '',
                    VIP: '',
                    is_active:'',
                    date_joined: '',
                    last_login:'',
                    is_black: '',

                },
                tableData:[]
            }
        },
        computed: {
            data() {
                return this.tableData.filter((d) => {
                    return d;
                })
            }
        },
        created(){
            this.getData();
        },
        methods: {
            isVipFomatter(val){
                return val.VIP ?  '是' : '否';
            },
            isActiveFomatter(val){
                return val.is_active ?  '已认证' : '未认证';
            },
            sexFormatter(val){
                var sex = val.gender;
                return sex == 0 ? '女' : sex == 1 ? '男' : '不详';
            },
            chaoguanFormatter(val){
                var sex = val.is_vip;
                return sex ? '是' : '否';
            },
            statusFormatter(val){
                var sex = val.is_black;
                return sex ? '已拉黑' : '正常';
            },
            getData(){
                this.$axios.get("/api/users/user/" + this.currentPage + '/',{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    this.tableData = res.data;
                })
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                if (this.isSearchBool){
                    this.postData();
                } else {
                    this.getData();
                }
            },
            //搜索用户
            onSearch() {
                this.currentPage = 1;
                this.postData();


            },
            //搜索用户
            postData(){
                var self = this;
                var dic = {
                    user_name: this.formInline.user_name,
                    gender: this.formInline.gender,
                    is_vip:this.formInline.is_vip,
                    is_auth:this.formInline.is_auth,
                    finally_on_line_max:this.formInline.finally_on_line_max/1000,
                    finally_on_line_min:this.formInline.finally_on_line_min/1000,
                    page:this.currentPage
                }
                this.$axios.post('/api/users/search_user/',dic,{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')
                    }}).then(res=>{
                    self.tableData = res.data;
                });
            },
            resetForm(){
                this.formInline = {
                    user_name: '',
                    gender: '',
                    is_vip:'',
                    is_auth:'',
                    finally_on_line_max:'',
                    finally_on_line_min:'',
                    page:''
                }
            },
            //拉黑
            blackThisRow(item){
                var user_id = item.id;
                var username = item.username;
                var self = this;
                var status = item.is_black ? '恢复' : '拉黑' ;
                this.$confirm('是否' + status  + '此用户'+ '【'+username+'】',{
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    self.$axios.get('/api/users/black_list/'+user_id+'/',{headers:{
                            "Authorization":"JWT " + localStorage.getItem('token')
                        }}).then(res=>{
                        this.$message.success('操作成功');
                        self.getData();
                    });
                }).catch(() => {

                });

            },
            //查看用户详细信息
            seeDetailInfo(item){
                var user_id = item.id;
                this.$router.push({
                    path:'/UserDetail',
                    query:{
                        'user_id':user_id,
                    }
                })
            },
            data_formatter(val){
                return val.date_joined.toString().split('T')[0];
            },
            data_formatter_lastLogin(val){
                if(val.last_login == null){
                    return '';
                }
                return val.last_login.toString().split('T')[0];

            },

        }
    }
</script>

<style scoped>

</style>
