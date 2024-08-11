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
                <div>{{index + 1}}.{{item.content}}</div>
                <el-radio-group style="margin-top:20px" v-model="item.result">
                    <!-- <el-radio v-for="(e,s) in JSON.parse(item.selects)" :label="e.select">{{e.select}}.{{e.content}}</el-radio> -->
                </el-radio-group>
            </div>
            <div class="yueduInfo5">
                <el-button @click="save()" size="small" type="primary" plain>提交</el-button>
            </div>
        </div>
    </div>
    <el-dialog
      title="结果"
      :visible.sync="dialogVisible"
      width="30%"
      >
      <span>
        <div>正确：{{right}}题 · 错误：{{wrong}}题</div>
        <div style="margin-top:20px;font-size:12px;color:red">详细信息请前往学习记录查看</div>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
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
</style>