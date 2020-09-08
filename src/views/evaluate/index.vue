<template>
  <div id="evaluate">
      <!-- 顶部标题 -->
        <van-nav-bar title="全部订单" left-text="返回" left-arrow @click-left="onClickLeft">
            <template #right>
            <van-icon name="ellipsis" size="25" />
            </template>
        </van-nav-bar>
        <!-- 商品信息区域 -->
        <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
        <div class="upimg">
            <van-field
            lazy-load
            rows="2"
            autosize
            type="textarea"
            placeholder="请说说你的评价..."
            style="height: 100px"
            />
            <van-uploader v-model="fileList" multiple />
        </div>
        <!-- 商品评价区域 -->
        <div class="rate">
            <h3>给商品评价</h3>
            <div>
                <span>产品质量</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)" />
            </div>
            <div>
                <span>服务态度</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)" />
            </div>
            <div>
                <span>尺寸合适</span>
                <van-rate v-model="value"
                void-icon="star"
                void-color="#ccc"
                color="rgb(35,68,151)" />
            </div>
        </div>
        <!-- 提交按钮区域 -->
        <van-button type="primary" size="large" color="rgb(35,68,151)" to="/evaluation" >提交</van-button>
  </div>
</template>

<script>
import { Uploader, Field, Rate, Button } from 'vant'
import Vue from 'vue'

Vue.use(Button)
Vue.use(Rate)
Vue.use(Uploader)

Vue.use(Field)
export default {
  data () {
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' }
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
      value: 3 // rate
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/order')
    }
  }
}
</script>

<style lang="less" scoped>

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

.van-tab__text{
  font-size: 24px;
}
.van-icon{
  vertical-align: middle;
  color: rgb(35, 68, 151);
}
.van-card{
  margin-top: 20px;
}
// 上传图片区域
.upimg{
    margin-top: 20px;
    position: relative;
    width: 100%;
    height: 400px;
    background-color: #fff;
}
.van-uploader {
    display: inline-block;
    position: absolute;
    bottom: 0;
    padding-left: 20px;
}
// 给商品评价
.rate{
    // width: 100%;
    background-color: #fff;
    margin-top: 20px;
    padding-left: 20px;
    margin-bottom: 20px;
    h3{
        padding-top: 10px;
    }
    span{
        margin-right: 20px;
    }
    .van-rate{
        margin: 15px 20px;
    }
}

</style>
