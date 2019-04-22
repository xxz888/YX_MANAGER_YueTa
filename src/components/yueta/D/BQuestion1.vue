<template>
    <div>
        <el-button @click="handleEdit()" style="margin:20px 0 20px 0" type="primary">新增</el-button>
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
                    label="归类"
                    width="120"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="province"
                    label="问题标题"
                    >
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="editForm" :model="editForm" label-width="50px">
                <el-form-item label="分类">
                    <el-input v-model="editForm.fenlei"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input rows="5" type="textarea" v-model="editForm.neirong"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancleBtn">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "BQuestion1",
        data(){
            return{
                tableData: [{
                    date: '01',
                    name: '常见问题',
                    province: '提现需要多久到账',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
                delVisible:false,
                editVisible:false,
                editForm:{
                    fenlei:'',
                    neirong:''
                }
            }
        },
        methods:{
            //单个删除,弹出框
            handleDelete(index, row) {
                // this.idx = index;
                this.delVisible = true;
            },
            handleEdit(){
              this.editVisible = true;
            },

            cancleBtn(){
                this.delVisible = false;
            },
            deleteRow(){
                this.delVisible = false;
            },
            saveEdit(){

            }
        }
    }
</script>

<style scoped>

</style>
