<template>
  <div class="discuss">
    <headers></headers>
    <div class="discuss1">
        <div class="discuss2">
            <div class="discuss3">
                <el-input type="textarea" rows="10" v-model="content" placeholder="请输入评论内容"></el-input>
            </div>
            <el-button size="small" style="margin-top:20px" type="primary" plain @click="saveApeDiscussItem">发布评论</el-button>
        </div>
    </div>
    <div class="discuss1">
        <div class="discuss4">
            <div class="discuss5">
                <div class="discuss6" v-for="(item,index) in table" :key="index">
                    <img class="discuss8" :src="$store.state.HOST + item.avatar">
                    <span class="discuss7">{{item.createBy}}-{{item.createTime}}</span>
                    <span class="discuss7">{{item.content}}</span>
                </div>
            </div>
            <div class="page">
                <el-pagination
                background
                :page-size="pageSize"
                layout="prev, pager, next"
                @current-change="handleCurrentChange"
                :total="total">
                </el-pagination>
            </div>
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
  @import url('../../assets/css/discuss.css');
  .discuss8 {
      width: 30px;
      height: 30px;
      border-radius: 50%;
  }
</style>