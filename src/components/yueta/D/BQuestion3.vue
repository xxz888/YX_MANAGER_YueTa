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
                    width="300px"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="类别名称"
                    width="300px"
                    align="center"
            >
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


        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="editForm" :model="editForm.fenlei" label-width="70px">
                <el-form-item label="类别名称">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>




    </div>
</template>

<script>
    export default {
        name: "BQuestion3",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    desc: ''
                },
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
                },

            }
        },
        methods:{
            handleEdit(){
                this.editVisible = true;
            },
            saveEdit(){
                this.editVisible = false;
            },
            handleDelete() {
                this.$confirm('删除该分类，当前归属分类下的, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>

<style scoped>

</style>
