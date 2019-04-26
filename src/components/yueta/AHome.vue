<template>
    <div>
        <div style="margin: 40px 20px">
            <p>收益数据：</p>
            <el-row :gutter="12">
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div class="text item" style="text-align: center">
                            {{'昨日约币收益 ' + '1000' }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div class="text item" style="text-align: center">
                            {{'累计约币收益(元) ' + '1000' }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div class="text item" style="text-align: center">
                            {{'昨日金额收益(元) ' + '1000' }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div class="text item" style="text-align: center">
                            {{'累计金额收益(元) ' + '1000' }}
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
                        <div class="text item" style="text-align: center">
                            {{'昨日活跃人数 ' + '1000' }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div class="text item" style="text-align: center">
                            {{'周活跃人数 ' + '1000' }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div class="text item" style="text-align: center">
                            {{'月活跃人数 ' + '1000' }}
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
                        <div class="text item" style="text-align: center">
                            {{'昨日发布约会数 ' + '1000' }}
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="5">
                    <el-card style="margin-top: 20px;" class="box-card">
                        <div class="text item" style="text-align: center">
                            {{'昨日约会成功数 ' + '1000' }}
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
