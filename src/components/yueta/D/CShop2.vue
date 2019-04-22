<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="时间类型" prop="resource" >
                <el-radio-group v-model="form.resource">
                    <el-radio label="天"></el-radio>
                    <el-radio label="月"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="热销" value="shanghai"></el-option>
                    <el-option label="推荐" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="有限时间" prop="region">
                <el-input style="width: 30%" v-model="form.name"></el-input>
                天/月
            </el-form-item>
            <el-form-item label="排序">
                <el-input style="width: 30%" v-model="form.name"></el-input>
                (数值越大，越靠前)
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "CShop2",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    desc: '',
                    resource:'',
                    region:''
                }
            }
        },
        methods:{
            onSubmit(){

            }
        }
    }
</script>

<style scoped>

</style>
