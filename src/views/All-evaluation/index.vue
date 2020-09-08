<template>
  <div id="evaluation">
      <!-- 顶部标题 -->
        <van-nav-bar title="全部订单" left-text="返回" left-arrow @click-left="onClickLeft">
            <template #right>
            <van-icon name="ellipsis" size="25" />
            </template>
        </van-nav-bar>
        <div class="All_evaluation">
            <div class="imgs">
                <img src="../../assets/全部评价_03.jpg" alt="">
                <span>曹先生</span>
            </div>
            <div class="appraise">产品很不错，衣服尺寸很合适，下次还会再来!</div>
            <!-- <van-button  @click="show = true" /> -->
            <!-- 图片区域 -->
            <div>
                <van-image class="imges" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="show = true" />
                <van-overlay :show="show" @click="show = false">
                    <div class="wrapper">
                        <div class="block">
                            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        </div>
                    </div>
                </van-overlay>
                <van-image class="imges" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="show = true" />
                <van-overlay :show="show" @click="show = false">
                    <div class="wrapper">
                        <div class="block">
                            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        </div>
                    </div>
                </van-overlay>
                <van-image class="imges" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="show = true" />
                <van-overlay :show="show" @click="show = false">
                    <div class="wrapper">
                        <div class="block">
                            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        </div>
                    </div>
                </van-overlay>
            </div>
            <div class="rate">
                <span>产品质量:</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)"
                size="10" />
                <span>产品质量:</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)"
                size="10" />
                <span>产品质量:</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)"
                size="10" />
            </div>
        </div>
        <div class="All_evaluation">
            <div class="imgs">
                <img src="../../assets/全部评价_03.jpg" alt="">
                <span>曹先生</span>
            </div>
            <div class="appraise">产品很不错，衣服尺寸很合适，下次还会再来!</div>
            <!-- <van-button  @click="show = true" /> -->
            <!-- 图片区域 -->
            <div>
                <van-image class="imges" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="show = true" />
                <van-overlay :show="show" @click="show = false">
                    <div class="wrapper">
                        <div class="block">
                            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        </div>
                    </div>
                </van-overlay>
                <van-image class="imges" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="show = true" />
                <van-overlay :show="show" @click="show = false">
                    <div class="wrapper">
                        <div class="block">
                            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        </div>
                    </div>
                </van-overlay>
                <van-image class="imges" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="show = true" />
                <van-overlay :show="show" @click="show = false">
                    <div class="wrapper">
                        <div class="block">
                            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        </div>
                    </div>
                </van-overlay>
            </div>
            <div class="rate">
                <span>产品质量:</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)"
                size="10" />
                <span>产品质量:</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)"
                size="10" />
                <span>产品质量:</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)"
                size="10" />
            </div>
        </div>
        <div class="All_evaluation">
            <div class="imgs">
                <img src="../../assets/全部评价_03.jpg" alt="">
                <span>曹先生</span>
            </div>
            <div class="appraise">产品很不错，衣服尺寸很合适，下次还会再来!</div>
            <!-- <van-button  @click="show = true" /> -->
            <!-- 图片区域 -->
            <div>
                <van-image class="imges" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="show = true" />
                <van-overlay :show="show" @click="show = false">
                    <div class="wrapper">
                        <div class="block">
                            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        </div>
                    </div>
                </van-overlay>
                <van-image class="imges" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="show = true" />
                <van-overlay :show="show" @click="show = false">
                    <div class="wrapper">
                        <div class="block">
                            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        </div>
                    </div>
                </van-overlay>
                <van-image class="imges" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" @click="show = true" />
                <van-overlay :show="show" @click="show = false">
                    <div class="wrapper">
                        <div class="block">
                            <van-image width="100%" height="100%" src="https://img.yzcdn.cn/vant/cat.jpeg" />
                        </div>
                    </div>
                </van-overlay>
            </div>
            <div class="rate">
                <span>产品质量:</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)"
                size="10" />
                <span>产品质量:</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)"
                size="10" />
                <span>产品质量:</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)"
                size="10" />
            </div>
        </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Overlay, Image as VanImage, Rate } from 'vant'

Vue.use(Rate)
Vue.use(VanImage)
Vue.use(Overlay)
export default {
  data () {
    return {
      show: false,
      value: 5 // rate
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/evaluate')
    }
  }
}
</script>

<style lang="less" scoped>
// 图片区域
.imges{
    margin-left: 15px;
    border: 1px solid #cccccc;
}
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 80%;
    height: 50%;
    background-color: #fff;
  }
// 顶部导航
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
.All_evaluation{
    padding: 10px;
    background-color: #fff;
    height: 100%;
    border-bottom: 1px solid #cccccc;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .appraise{
        padding: 15px;
    }
}
.rate{
    // width: 100%;
    background-color: #fff;
    font-size: 10px;
    span{
        margin-left: 15px;
        vertical-align: middle;
    }
    .van-rate{
        margin-left: 5px;
        vertical-align: middle;
    }
}
</style>
