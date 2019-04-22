<template>

    <div style="background-color: white">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="VIP设置" name="1"></el-tab-pane>
            <el-tab-pane label="约豆设置" name="2"></el-tab-pane>
        </el-tabs>

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
                    v-if="!showOtherItemBOOL"
                    prop="name"
                    label="时间（天/月）"
                    width="200"
                    align="center"

            >
            </el-table-column>
            <el-table-column
                    v-if="!showOtherItemBOOL"
                    align="center"
                    prop="province"
                    label="类型"
                    width="200">
            </el-table-column>

            <el-table-column
                    v-if="showOtherItemBOOL"
                    align="center"
                    prop="address"
                    label="约豆数"
                    width="200">
            </el-table-column>
            <el-table-column
                    v-if="showOtherItemBOOL"
                    align="center"
                    prop="address"
                    label="价格"
                    width="200">
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="city"
                    label="排序"
                    width="200">
            </el-table-column>
            <el-table-column
                    align="center"
                    fixed="right"
                    label="操作"
            >
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        name: "CShop1",
        data () {
            return {
                activeName: '1',
                showOtherItemBOOL:false,
                tableData: [{
                    date: '1',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
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
