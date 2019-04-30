<template>
    <div>
        <el-button @click="handleNewAdd()" style="margin:20px 0 20px 0" type="primary">新增</el-button>
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
                    prop="name"
                    label="归类"
                    width="120"
                    align="center"
                    :formatter="guileiFormatter"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="problem"
                    label="问题标题"
            >
            </el-table-column>
            <el-table-column
                    align="center"
                    prop="answer"
                    label="回答"
            >
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <!-- 编辑弹出框 -->
        <el-dialog :close-on-click-modal="false" title="编辑" :visible.sync="editVisible" width="70%">
            <el-form ref="editForm" :model="editForm" label-width="70px">
                <el-form-item label="问题标题">
                    <el-input rows="5" type="textarea" v-model="editForm.problem"></el-input>
                </el-form-item>
                <el-form-item label="回答">
                    <el-input rows="5" type="textarea" v-model="editForm.answer"></el-input>
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
        name: "BQuestion1",
        data(){
            return{
                tableData: [],
                delVisible:false,
                editVisible:false,
                editForm:{
                    type:'',
                    problem_id:'',
                    problem:'',
                    pic1:'',
                    pic2:'',
                    pic3:'',
                    answer:''
                },
                idx:''
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
            console.log(localStorage.getItem('token'));
            this.getData();
        },
        watch:{
            '$route':'getData'
        },
        methods:{
            getData(){
                this.$axios.get("/api2/users/problem/2/",{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    this.tableData = res.data;
                })
            },
            guileiFormatter(val){
                return val.type == 1 ? '用户提交' : '常见问题';
            },
            //单个删除,弹出框
            handleDelete(index, row) {
                const item = this.tableData[index];
                this.editForm.type = '2';
                this.editForm.problem_id = item.id;
                var  self = this;
                this.$confirm('是否删除', '提示', {
                    confirmButtonText: '确认删除',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    self.$axios.post("/api2/users/adu_problem/",self.editForm,{headers:{
                            "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{

                        self.$message.success('操作成功');
                        self.getData();
                    })
                }).catch(() => {});

                this.delVisible = false;
            },
            //编辑问题
            handleEdit(index, row){
                const item = this.tableData[index];
                this.editForm.type = '3';
                this.editForm.problem_id = item.id;
                this.editForm.problem = item.problem;
                this.editForm.answer = item.answer;
                this.editVisible = true;
            },
            //新增问题
            handleNewAdd(){
                this.editForm.type = '1';
                this.editForm.problem = '';
                this.editForm.answer = '';
                this.editVisible = true;
            },
            saveEdit(){
                var self = this;
                this.$axios.post("/api2/users/adu_problem/",this.editForm,{headers:{
                        "Authorization":"JWT " + localStorage.getItem('token')}}).then((res)=>{
                    self.$message.success('操作成功');
                    self.getData();
                })
                this.editVisible = false;
            },

        }
    }
</script>

<style scoped>

</style>
