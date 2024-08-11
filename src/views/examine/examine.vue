<template>
  <div class="examine">
    <headers></headers>
    <div class="examine1">
        <div class="examine2">
            <el-tabs v-model="active" @tab-click="handleClick">
                <el-tab-pane name="first">
                    <span slot="label"><i class="el-icon-reading"></i> 阅读理解</span>
                    <div class="yuedu">
                        <div class="yuedu-item" v-for="(item,index) in tableYD" :key="index" @click="toYueDuInfo(item.id)">
                            <div class="yuedu1">
                                <img style="width:65%;margin-top:20px" src="../../assets/image/阅读.png">
                            </div>
                            <div class="yuedu2">
                                <div class="yuedu3">{{item.name}}</div>
                                <div class="yuedu4">{{item.introduction}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                        background
                        :page-size="pageSizeYD"
                        layout="prev, pager, next"
                        @current-change="handleCurrentChangeYD"
                        :total="totalYD">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="second">
                    <span slot="label"><i class="el-icon-service"></i> 听力训练</span>
                    <div class="yuedu">
                        <div class="yuedu-item" v-for="(item,index) in tableTL" :key="index" @click="toTingLiInfo(item.id)">
                            <div class="yuedu1">
                                <img style="width:65%;margin-top:20px" src="../../assets/image/英语听力.png">
                            </div>
                            <div class="yuedu2">
                                <div class="yuedu3">{{item.name}}</div>
                                <div class="yuedu4">{{item.introduction}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                        background
                        :page-size="pageSizeTL"
                        layout="prev, pager, next"
                        @current-change="handleCurrentChangeTL"
                        :total="totalTL">
                        </el-pagination>
                    </div>
                </el-tab-pane>
                <el-tab-pane name="third">
                    <span slot="label"><i class="el-icon-open"></i> 选词填空</span>
                    <div class="yuedu">
                        <div class="yuedu-item" v-for="(item,index) in tableWX" :key="index" @click="toXuanCiInfo(item.id)">
                            <div class="yuedu1">
                                <img style="width:65%;margin-top:20px" src="../../assets/image/选词助手 查找.png">
                            </div>
                            <div class="yuedu2">
                                <div class="yuedu3">{{item.name}}</div>
                                <div class="yuedu4">{{item.introduction}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="page">
                        <el-pagination
                        background
                        :page-size="pageSizeWX"
                        layout="prev, pager, next"
                        @current-change="handleCurrentChangeWX"
                        :total="totalWX">
                        </el-pagination>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>

<script>

  import headers from '@/components/header'
  import bottoms from '@/components/bottom'
  export default {
    data() {
      return{
        
      }
    },
    components: {
      headers,
      bottoms
    },
    methods: {
      
    },
    created() {
     
    },
    mounted() {
      
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/examine.css');
</style>