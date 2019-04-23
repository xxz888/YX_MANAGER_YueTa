<template>
    <div>
        <el-card style="margin: 20px" class="box-card">
            <div slot="header" class="clearfix">
                <span>VIP权限:</span>
            </div>
            <div>
                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form :label-position="positionValue" label-width="180px">
                            <el-form-item label="查看微信次数:">
                                <el-input style="width: 180px" type="text"></el-input><span>&nbsp&nbsp次/月</span>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form :label-position="positionValue" label-width="180px">
                            <el-form-item label="报名约会+邀请约会:">
                                <el-input style="width: 180px" type="text"></el-input><span>&nbsp&nbsp次/月</span>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form :label-position="positionValue" label-width="180px">
                            <el-form-item label="查看照片、视频:">
                                <span>免费</span>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form :label-position="positionValue" label-width="180px">
                            <el-form-item label="发布约会广播:">
                                <span>免费</span>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

            </div>
        </el-card>
        <el-card style="margin: 20px" class="box-card">
            <div slot="header" class="clearfix">
                <span>收费设置:</span>
            </div>
            <div>
                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form :label-position="positionValue" label-width="180px">
                            <el-form-item label="查看微信费用:">
                                <el-input style="width: 180px" type="text"></el-input><span>&nbsp&nbsp约豆/次</span>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form :label-position="positionValue" label-width="180px">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="发布约会广播费用:">
                                        <el-input style="width: 180px" type="text"></el-input><span>&nbsp&nbsp约豆/次</span>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="特殊:">
                                        <el-checkbox v-model="checked">女性认证后免费发布广播</el-checkbox>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                        </el-form>
                    </el-col>
                </el-row>

                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form :label-position="positionValue" label-width="180px">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="查看照片:">
                                        <el-input style="width: 180px" type="text"></el-input><span>&nbsp&nbsp元/次</span>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="平台分成:">
                                        <el-input style="width: 180px" type="text"></el-input><span>&nbsp&nbsp%</span>
                                    </el-form-item>
                                </el-col>
                            </el-row>

                        </el-form>
                    </el-col>
                </el-row>

            </div>
        </el-card>
        <!--约豆扣费设置(报名约会、邀请约会扣约豆)-->
        <el-card style="margin: 20px" class="box-card">
            <div slot="header" class="clearfix">
                <span>约豆扣费设置(报名约会、邀请约会扣约豆):</span>
            </div>
            <div>
                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form :label-position="positionValue" label-width="0px">
                            <el-form-item label=" " v-for="(item,index) in yuehuiArray" :key="item" >
                                <el-input style="width: 180px" type="text"></el-input><span>&nbsp&nbsp打赏金额，扣&nbsp&nbsp</span>
                                <el-input style="width: 180px" type="text"></el-input><span>&nbsp&nbsp约豆/次&nbsp&nbsp</span>
                                <el-button v-if="!(index == 0)" @click="delItem(index)" size="mini" type="danger" icon="el-icon-delete" circle></el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>

                <el-button @click="addItem" type="text">新增</el-button>
            </div>
        </el-card>

        <el-card style="margin: 20px" class="box-card">
            <div>
                <el-row>
                    <el-col :span="24">
                        <el-form :label-position="positionValue" label-width="180px">
                            <el-form-item label="认证联系微信号:">
                                <el-input style="width: 180px" type="text"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </div>
        </el-card>


        <el-button style="margin: 30px" type="primary">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp确认&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</el-button>


    </div>

</template>

<script>
    export default {
        name: "FOther1",
        data() {
            return {
                positionValue:'left',
                checked: true,
                yuehuiArray:['','','','','','']
            };
        },
        methods:{
            delItem(index){
                this.yuehuiArray.splice(index,1);
            },
            addItem(){
                this.yuehuiArray.push('');
            }
        }
    }
</script>

<style scoped>
    p{
        width: 180px;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 100%;
    }
</style>
