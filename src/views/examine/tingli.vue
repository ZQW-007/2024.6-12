<template>
  <div class="yueduInfo">
    <headers></headers>
    <div class="yueduInfo1">
        <div class="tingliInfo1" style="min-height:60px;">
            <div style="font-weight:bold">{{info.name}}</div>
            <i @click="play()" itle="播放听力音频" style="font-size:25px;margin-left:20px;cursor: pointer;" class="el-icon-headset"></i>
        </div>
        <audio style="display:none" ref="audio" controls>
          <source :src="$store.state.HOST + info.audio">
        </audio> 
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
  .tingliInfo1 {
    display: flex;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
</style>