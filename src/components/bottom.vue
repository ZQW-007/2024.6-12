<template>
  <div>
    <div class="bottom">
      <div style="display:flex">
        <div class="cards">
              <div class="card-red">
                  <p class="tip">联系我们</p>
                  <div class="cdd">
                  <div class="cd">
                    <p class="cd-title">联系我们</p>
                    <div class="c1">作者：zqw</div>
                    <div class="c1"> Q Q: 3112931437</div>
                    <div class="c1">微信: 19835145220</div>
                    <div class="c1">电话: 19835145220</div>
                    <div class="c1">地址：山西省太原市小店区龙城大街81号</div>
                    <div class="go-corner">
                      <div class="go-arrow">→</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-blue">
                  <p class="tip">网站简介</p>
                  <div class="cdd">
                  <div class="cd">
                    <p class="cd-title">网站简介</p>
                    <div class="c1">基于Vue的英语单词学习的网站，帮助大家学习英语单词，提升自身能力。</div>
                    <div class="go-corner">
                      <div class="go-arrow">→</div>
                    </div>
                  </div>
                </div>
                  
              </div>
              <div class="card-green">
                  <p class="tip">使用体验</p>
                  <div class="cdd">
                    <div class="cd">
                      <p class="cd-title">使用体验</p>
                      <!-- 五星好评 -->
                      <div class="rating">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label title="Excellent!" for="star5">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>
                          </svg>
                        </label>
                        <input value="4" name="rate" id="star4" type="radio" />
                        <label title="Great!" for="star4">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>
                          </svg>
                        </label>
                        <input value="3" name="rate" id="star3" type="radio" />
                        <label title="Good" for="star3">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>
                          </svg>
                        </label>
                        <input value="2" name="rate" id="star2" type="radio" />
                        <label title="Okay" for="star2">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>
                          </svg>
                        </label>
                        <input value="1" name="rate" id="star1" type="radio" />
                        <label title="Bad" for="star1">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                            <path
                              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                            ></path>
                          </svg>
                        </label>
                      </div>
                      <div class="go-corner">
                        <div class="go-arrow">→</div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>

    </div>
    <div class="bottom1">
      Copyright © 2024.ZQW All rights reserved.
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
      
    },
 }
</script>

<style scoped>
@import url('../assets/css/card1.css');
@import url('../assets/css/high-vague.css');
@import url('../assets/css/five-star.css');

  .bottom1 {
    width: 100%;
    height: 50px;
    display: flex;
    align-items:end;
    justify-content: center;
  }
  .bottom {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 20px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: rgba(100, 100, 111, 0.2);
    align-items: center;
    font-family: '黑体';
  }
</style>