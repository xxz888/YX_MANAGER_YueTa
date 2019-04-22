<template>
    <div>
        <el-form style="margin-top: 20px" ref="form" :model="form" label-width="80px">
            <el-form-item label="约豆数" prop="region">
                <el-input style="width: 30%" v-model="form.name"></el-input>
                个
            </el-form-item>
            <el-form-item label="金额:">
                <el-input style="width: 30%" v-model="form.name"></el-input>
                元
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
        name: "CShop3",
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
