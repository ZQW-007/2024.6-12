<template>
  <div class="header">
    <img style="width:100px;height:60px" src="../assets/image/logo1.png">
    <div class="menu">
      <div @click="toPage('index')" :class="$route.path == '/'?'active':''"><p class="title">首页</p></div>
      <div @click="toPage('vocabulary')" :class="$route.path == '/vocabulary'?'active':''"><p class="title">词汇</p></div>
      <div @click="toPage('syntax')" :class="$route.path == '/syntax'?'active':''"><p class="title">语法</p></div>
      <div @click="toPage('literature')" :class="$route.path == '/literature'?'active':''"><p class="title">文献</p></div>
      <div @click="toPage('spoken')" :class="$route.path == '/spoken'?'active':''"><p class="title">口语</p></div>
      <div @click="toPage('examine')" :class="$route.path == '/examine'?'active':''"><p class="title">自测</p></div>
      <div @click="toPage('record')" :class="$route.path == '/record'?'active':''"><p class="title">学习记录</p></div>
      <div @click="toPage('discuss')" :class="$route.path == '/discuss'?'active':''"><p class="title">讨论</p></div>
      <div @click="toPage('manage')"><p class="title">后台</p></div>
      <div @click="toPage('about')" :class="$route.path == '/about'?'active':''"><p class="title">关于</p></div>
    </div>
    <div class="icons">
      <i class="el-icon-user" @click="toCenter"></i>
      <span style="font-size:15px">fenghou</span>
      <div class="loginOut" @click="loginOut">
        退出
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        
      }
    },
    methods: {
      loginOut() {
        this.$store.dispatch('logout').then(() => {
          window.localStorage.removeItem("user_info")
          window.localStorage.removeItem("user_token")
          this.$message({
              message: '退出成功',
              type: 'success'
          });
          setTimeout(function(){
              window.location.reload()
          },1000)
        })
      },
      // toAdd() {
      //   this.$router.push("/addCommodity")
      // },
      toCenter() {
        this.$router.push("/center")
      },
      // toOrder() {
      //   this.$router.push("/order")
      // },
      // search() {
      //   if (!this.search) {
      //     this.$message({
      //       showClose: true,
      //       message: '请输入想要搜索的物品关键词',
      //       type: 'warning'
      //     });
      //   }
      // },
      toPage(name) {
        if (name == "index") {
          this.$router.push("/")
        } else if (name == "vocabulary") {
          this.$router.push("/vocabulary")
        } else if (name == "syntax") {
          this.$router.push("/syntax")
        } else if (name == "literature") {
          this.$router.push("/literature")
        } else if (name == "spoken") {
          this.$router.push("/spoken")
        } else if (name == "examine") {
          this.$router.push("/examine")
        } else if (name == "record") {
          this.$router.push("/record")
        } else if (name == "discuss") {
          this.$router.push("/discuss")
        }  else if (name == "manage") {
          window.open("http://localhost:3000")
        } else if (name == "about") {
          this.$router.push("/about")
        }
      }
    },
    // created() {
     
    // },
    // mounted() {
    //   this.user = JSON.parse(window.localStorage.getItem("user_info"))
    // }
 }
</script>

<style scoped>
  .loginOut {
    width: 70px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: #6C5CE7;
    font-family: '黑体';
    color: #ffffff;
    font-size: 14px;
  }
  .header {
      font-family: '黑体';
      width: 100%;
      height: 70px;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: space-around;
  }
  .header img{
    margin-left: 100px;
  }
  .menu {
    display: flex;
    width: 850px;
    height:70px;
    justify-content: center;
    align-items: center;
    overflow: auto;
    display: flex;
    scroll-snap-type: x mandatory;
    margin: 0 auto;
    padding: 0 15px;
  }
  .menu>div {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    border-radius: 10px;
    padding: 2px;
    margin-left: 5px;
    margin-right: 5px;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  }
  .menu:hover > :not(:hover) {
  opacity: 0.2;
}
.title {
  width: 100%;
  display: inline-block;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  margin: 1rem auto;
}
  .search {
    display: flex;
    width: 250px;
  }
  .icons {
    margin-right: 100px;
    display: flex;
    font-size: 25px;
    width: 150px;
    color: #305C74;
    justify-content: space-between;
    align-items: center;
  }
  .active {
      color: #6C5CE7;
  }
</style>