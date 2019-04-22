<template>
    <div style="background-color: white">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="待处理" name="1"></el-tab-pane>
            <el-tab-pane label="已处理" name="2"></el-tab-pane>
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
                    prop="date"
                    label="序号"
                    width="50"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="被举报账号"
                    width="100"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="province"
                    label="被举报人"
                    width="100">
            </el-table-column>

            <el-table-column
                    align="center"
                    prop="address"
                    label="性别"
                    width="50">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="address"
                    label="被举报次数"
                    width="100">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="city"
                    label="举报账号"
                    width="100">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="city"
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
                    prop="city"
                    label="举报时间"
                    width="100">
            </el-table-column>
            <el-table-column
                    v-if="showOtherItemBOOL"
                    align="center"
                    prop="city"
                    label="状态"
                    width="50">
            </el-table-column>
            <el-table-column
                    align="center"
                    fixed="right"
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.row)" type="text" size="small">查看</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "EReport1",
        data () {
            return {
                formInline: {

                },
                form:{
                    data1:'',
                    data2:''
                },
                activeName: '1',
                showOtherItemBOOL:false,
                tableData: [{
                    date: '1',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '男',
                    zip: 200333
                }]
            };
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
                if (tab.name == 1){
                    this.showOtherItemBOOL = false
                } else {
                    this.showOtherItemBOOL = true
                }
            }
        }
    }
</script>

<style scoped>

</style>
