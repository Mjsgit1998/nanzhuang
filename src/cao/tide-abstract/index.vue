<template>
  <div id="abstract">
    <van-nav-bar title="潮流资讯" left-text="返回" left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="25" />
        </template>
      </van-nav-bar>
    <van-swipe class="my-swipe">
      <van-swipe-item>
        <img src="../../assets/资讯简介_03.jpg" alt="">
        <div class="tex">碎花不是姑娘们的专享，男生也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</div>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/资讯简介_03.jpg" alt="">
        <div class="tex">碎花不是姑娘们的专享，男生也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</div>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/资讯简介_03.jpg" alt="">
        <div class="tex">碎花不是姑娘们的专享，男生也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</div>
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../assets/资讯简介_03.jpg" alt="">
        <div class="tex">碎花不是姑娘们的专享，男生也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</div>
      </van-swipe-item>
  </van-swipe>
  </div>
</template>

<script>

import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'

Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  data () {
    return {
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
body{
   min-width: 750px;
  max-width: 320px;
  margin: 0 auto;

}
#abstract{
  height: 100%;
  background-color: rgb(63, 63, 63);
}
.van-nav-bar{
  background: #1b1a20;
  /deep/.van-nav-bar__text{
    color: #fff;
    font-size: 18px;
  }
  /deep/.van-ellipsis{
    color: #fff;
    font-size: 20px;

  }
  /deep/.van-icon-arrow-left::before{
    color: #fff;
  }
  /deep/.van-icon-ellipsis::before{
    color: #fff;
  }
}

// .custom-indicator {
//     position: absolute;
//     right: 5px;
//     bottom: 5px;
//     padding: 2px 5px;
//     font-size: 12px;
//     background: rgba(0, 0, 0, 0.1);
//   }
.my-swipe {
    width: 100%;
    color: #fff;
    font-size: 20px;
    // text-align: center;
    padding-top: 50px;
      img{
        width: 100%;
    }
    .tex{
        margin: 30px;
        line-height: 30px;
    }
}
</style>
