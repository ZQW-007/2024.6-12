<template>
  <div class="index">
    <headers></headers>
    <div class="carousel">
      <div class="banner-img-container" height="600px">
			<img src="../../assets/image/1.jpg" alt="">
			<img src="../../assets/image/2.jpg" alt="">
			<img src="../../assets/image/3.jpg" alt="">
		</div>
      <div class="desc">
        <div class="desc1">Believe in yourself!</div>
        <div class="desc1">相信你自己！</div>
        <div class="desc2">Keep on going never give up!</div>
        <div class="desc2">勇往直前，决不放弃!</div>
        <div class="desc3">Get started with online Study</div>
        <div class="desc3">开始学习吧</div>
        <!-- <div class="desc4">_____</div> -->
      </div>
    </div>
    
    <div class="page-content">
    <div class="card">
            <div class="content">
                <h2 class="title">Vocabulary词汇</h2>
                <p class="copy">Rich vocabulary list</p>
                <button class="btn" @click="toPage('syntax')">View Trips</button>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">Examine自测</h2>
                <p class="copy">Learning self-test</p>
                <button class="btn" @click="toPage('examine')">View Trips</button>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">Record学习记录</h2>
                <p class="copy">Learning records</p>
                <button class="btn" @click="toPage('record')">View Trips</button>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">Discuss讨论</h2>
                <p class="copy">Comment social</p>
                <button class="btn" @click="toPage('discuss')">View Trips</button>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">Manage后台</h2>
                <p class="copy">Backend management</p>
                <button class="btn" @click="toPage('manage')">View Trips</button>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <h2 class="title">About关于</h2>
                <p class="copy">About English System</p>
                <button class="btn" @click="toPage('about')">View Trips</button>
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
  @import url('../../assets/css/index.css');
  @import url('../../assets/css/card.css');
  .carousel .banner-img-container {
	width:300%;
	height:400px;
  overflow: hidden;
	position: absolute;
	/* 开启弹性盒，让图片横向排列 */
	display: flex;
	animation: run 20s ease infinite alternate;
}

.carousel .banner-img-container img{
	width:100%;
	height:400px;
}


/* 轮播图关键帧 */
/* 自动轮播 */
@keyframes run {
	0%{
		margin-left: 0;
		/* transform: translateX(0); */
	}
	25%{
		margin-left: -100%;;
		/* transform: translateX(-1200px); */
	}
	50%{
		margin-left: -200%;
		/* transform: translateX(-2400px); */
	}
	75%{
		margin-left: -100%;
		/* transform: translateX(-3600px); */
	}
	100%{
		margin-left: 0%;
  }}

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 600px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  i {
    cursor: pointer;
  }
</style>