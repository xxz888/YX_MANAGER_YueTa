<template>
    <div>
        <el-row >
            <el-col :span="12">
                <div class="grid-content bg-purple">

                    <el-card class="box-card" :body-style="{ padding: '0px' }">
                        <div slot="header" class="clearfix">
                            <span>基本信息</span>
                        </div>
                        <el-row>
                            <el-col :span="10">
                                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                            </el-col>
                            <el-col :span="12">
                                <el-form  style="padding-top: 10px;" ref="form" :model="form" label-width="80px">
                                    <el-form-item class="el-form-item" label="活动名称">
                                        <span v-model="form.name">123</span>
                                    </el-form-item>
                                    <el-form-item class="el-form-item" label="活动名称">
                                        <span v-model="form.name">123</span>
                                    </el-form-item>
                                    <el-form-item class="el-form-item" label="活动名称">
                                        <span v-model="form.name">123</span>
                                    </el-form-item>
                                    <el-form-item class="el-form-item" label="活动名称">
                                        <span v-model="form.name">123</span>
                                    </el-form-item>
                                    <el-form-item class="el-form-item" label="活动名称">
                                        <span v-model="form.name">123</span>
                                    </el-form-item>
                                </el-form>

                            </el-col>
                        </el-row>


                        <div style="padding: 14px;">



                            <div class="bottom clearfix" style="text-align: center">
                                <time class="time">最后登录时间{{ currentDate }}</time>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "UserDetail",
        data() {
            return {
                currentDate: new Date(),
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            };
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        padding-left: 20px;
        padding-top: 20px;
        width: 70%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    .el-form-item{
        margin: 0;
        padding: 0;
    }
</style>
