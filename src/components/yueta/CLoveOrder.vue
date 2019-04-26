<template>
    <div>
        <el-card v-for="(item,index) in tableData" :key="item.id" class="box-card" :body-style="{ padding: '0px'}">
            <el-row  style="margin-top: 20px;">
                <el-col :span="3">
                    <viewer style="width: 100%;text-align: center">
                        <img :src="item.photo"
                             :onerror="defaultImg"
                             style="width: 70px;height: 70px;
                                 margin-bottom: 10px;
                                 border-radius: 35px;">
                    </viewer>
                    <div style="width: 100%;text-align: center;font-size: 14px">
                        <p>{{item.name}}</p>
                    </div>
                </el-col>
                <el-col :span="6">
                    <el-form>
                        <el-form-item label="发布时间:">
                            <p>{{getLocalTime(item.publish_time)}}</p>
                        </el-form-item>
                    </el-form>
                    <el-form>
                        <el-form-item label="约会方式:">
                            <p>{{item.reward_type==0?'打赏':'求打赏'}}</p>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="6">
                    <el-form>
                        <el-form-item label="约会时间:">
                            <p>{{getLocalTime(item.date_time)}}</p>
                        </el-form-item>
                    </el-form>
                    <el-form>
                        <el-form-item label="打赏赏金:">
                            <p style="color: red">¥{{item.reward}}</p>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="5">
                    <el-form>
                        <el-form-item label="约会地点:">
                            <p>{{item.site}}</p>
                        </el-form-item>
                    </el-form>
                    <el-form>
                        <el-form-item label="约会内容:">
                            <p>{{item.program_str}}</p>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="3">
                    <el-form>
                        <el-form-item label="状态:">
                            <p style="color: red">{{item.type==5?'约会失效':item.agree_number>0?'约会成功':'发布中'}}</p>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="3">
                    <div style="text-align: left;">
                        <el-popover
                                placement="right"
                                width="440"
                                trigger="click">
                            <el-table :data="applyList[index]">
                                <el-table-column width="70" prop="photo">
                                    <template slot-scope="scope">
                                        <div style="width: 100%;text-align: center">
                                            <viewer >
                                                <img  :onerror="defaultImg"
                                                      :src="scope.row.photo" style="width: 35px;height: 35px;border-radius: 35px;">
                                            </viewer>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column width="70" prop="username"></el-table-column>
                                <el-table-column width="70" prop="vip" :formatter = 'vip_formatter'></el-table-column>
                                <el-table-column width="70" prop="auth_status" :formatter = 'auth_status_formatter'> </el-table-column>
                                <el-table-column width="160" prop="apply_id">
                                    <template slot-scope="scope">
                                        <div style="width: 100%;text-align: right">
                                            <el-button @click="clickUserInfoButton(scope.row.apply_id)" size="small" type="primary">查看</el-button>
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-button @click="" slot="reference" type="primary">查看报名</el-button>
                        </el-popover>
                        <div style="width: 100%;text-align: left;margin-top: 20px;color: darkgrey;">
                            <span>报名人数:{{item.apply_number}}</span>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!--四张图片-->
            <el-row style="margin-left: 120px;margin-bottom: 20px;width: 100%" :gutter="10">
                <el-col :span="2" v-if="item.show1 != 0">
                    <viewer>
                        <img :src="item.show1"
                             :onerror="defaultImg"
                             style="width: 80px;height: 80px;margin-bottom: 10px;">
                    </viewer>
                </el-col>
                <el-col :span="2" v-if="item.show2 != 0">
                    <viewer>
                        <img :src="item.show2"
                             :onerror="defaultImg"
                             style="width: 80px;height: 80px;margin-bottom: 10px;">
                    </viewer>
                </el-col>
                <el-col :span="2" v-if="item.show3 != 0">
                    <viewer>
                        <img :src="item.show3"
                             :onerror="defaultImg"

                             style="width: 80px;height: 80px;margin-bottom: 10px;">
                    </viewer>
                </el-col>
                <el-col :span="2" v-if="item.show4 != 0">
                    <viewer>
                        <img :src="item.show4"
                             :onerror="defaultImg"
                             style="width: 80px;height: 80px;margin-bottom: 10px;">
                    </viewer>
                </el-col>
            </el-row>
        </el-card>

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
        name: "CLoverOrder",
        data() {
            return {
                id:'',
                defaultImg:'this.src="' + require('../../assets/img_moren.png') + '"',
                currentPage:1,
                tableData:[],
                applyList:[]
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
        watch:{
            '$route':'getData'
        },
        methods:{
            getData(){
                this.$axios.get("/api/users/publish_date/" + this.currentPage.toString() + '/',{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    this.tableData = res.data;
                    this.seeAllApplyListAction();
                })
            },
            handleCurrentChange(val) {
                this.currentPage = val.toString();
                this.getData();
            },
            vip_formatter(val){
                return val.VIP ? 'VIP': '非VIP';
            },
            auth_status_formatter(val){
                return val.auth_status ? '已认证': '未认证';
            },
            //获取id
            getParams(){

            },
            //报名列表
            seeAllApplyListAction(){
                var self = this;
                this.applyList = [];
                for (var i = 0 ; i < this.tableData.length ; i++){
                    (function () {
                        self.$axios.post('/api/store/apply_list/',{'date_id':self.tableData[i].id},{headers:{
                                "Authorization":"JWT " + localStorage.getItem('token')
                            }}).then(res=>{
                                self.applyList.push(res.data);
                        });
                    })(i)

                }
            },
            //点击头像跳转详情
            clickUserInfoButton(val){
                this.$router.push({
                    path:'/UserDetail',
                    query:{
                        'user_id':val,
                    }
                })
            },
            getLocalTime(nS) {
                return new Date(parseInt(nS) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
            },
        }
    }
</script>

<style scoped>
    span {
        font-size: 6px
    }
</style>
