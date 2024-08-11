<template>
  <div class="yueduInfo">
    <headers></headers>
    <div class="yueduInfo1">
        <div class="yueduInfo2">
            <div style="margin-top:20px;font-weight:bold">{{info.name}}</div>
            <div style="margin-top:20px;margin-left:20px;margin-right:20px;margin-bottom:20px">
               <div>{{info.content}}</div>
            </div>
        </div>
    </div>
    <div class="yueduInfo1">
        <div class="yueduInfo3">
            <div style="margin-top:20px;margin-left:20px;font-weight:bold">题目：</div>
            <div class="yueduInfo4" v-for="(item,index) in items" :key="index">
                <div>{{index + 1}}.{{item.content}} - <span :class="item.answer == item.result?'green':'red'">答案：{{item.answer}}</span></div>
                <el-radio-group style="margin-top:20px" v-model="item.result">
                    <!-- <el-radio v-for="(e,s) in JSON.parse(item.selects)" :label="e.select">{{e.select}}.{{e.content}}</el-radio> -->
                </el-radio-group>
            </div>
            <div class="yueduInfo5">
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
  @import url('../../assets/css/yuedu.css');
  .green {
      color: green;
  }
  .red {
      color: red;
  }
</style>