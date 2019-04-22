<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="问题标题">
                <el-input style="width: 40%" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="归属分类">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="常见问题" value="shanghai"></el-option>
                    <el-option label="分类问题" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item  label="问题解答">
                <el-input rows="5"  style="width: 40%" type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "BQuestion2",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    desc: ''
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
