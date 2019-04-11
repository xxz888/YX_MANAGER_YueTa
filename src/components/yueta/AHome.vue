<template>
    <div>
        <div style="margin: 40px 20px">
            <p>收益数据：</p>
            <el-row :gutter="12">
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>
        <div style="margin: 40px 20px">
            <p>活跃数据：</p>
            <el-row :gutter="12">
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>
        <div style="margin: 40px 20px">
            <p>约会数据：</p>
            <el-row :gutter="12">
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div v-for="o in 2" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </div>

    </div>
</template>

<script>
    export default {
        name: "AHome",
        data(){
            return{
                listData:[]
            }
        },
        created(){
          this.listData = [

          ]
        },
    }
</script>

<style scoped>
    .text {
        font-size: 15px;
    }

    .item {
        /*padding: 5px 0;*/
    }

    .box-card {
        width: 160px;
        height: 80px;
    }
</style>
