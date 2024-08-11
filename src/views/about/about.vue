<template>
  <div class="about">
    <headers></headers>
    <div class="about1">
      <div class="about2">关于我</div>
      <div class="about3">小小世界，开心至上</div>
    </div>
    <div class="about4">
      <div class="about5">
        <img class="about6" src="../../assets/image/bg.jpg">
        <div class="about7">Fenghou</div>
        <div>_______________________________________</div>
        <div class="about8">基于Vue的英语单词学习系统</div>
        <div class="about8">作者：zqw</div>
        <div class="about8">学校：山西农业大学</div>
        <div class="about8">院系：软件工程</div>
        <div class="about8">专业：软件工程</div>
        <div class="about8">QQ：3112931437</div>
        <div class="about8">微信：19835145220</div>
        <div class="about8">电话：19835145220</div>
        <div class="about8">邮箱：3112931437@qq.com</div>
        <div class="about8">地址：山西省太原市小店区龙城大街81号</div>
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
 }
</script>

<style scoped>
  @import url('../../assets/css/about.css');
</style>