<template>
  <div id="message">
    <van-nav-bar title="潮流资讯" left-text="返回" @click-left="onClickLeft" left-arrow >
        <template #right>
          <van-icon name="ellipsis" size="25" />
        </template>
      </van-nav-bar>
    <router-link to="/abstract">
      <van-row type="flex" justify="space-between">
      <van-col span="24">
        <img src="../../assets/潮流资讯_01.jpg" alt="">
      </van-col>
      </van-row>
    </router-link>
    <router-link to="/abstract">
      <van-row type="flex" justify="space-between">
      <van-col span="24">
        <img src="../../assets/潮流资讯_01.jpg" alt="">
      </van-col>
      </van-row>
    </router-link>
    <router-link to="/abstract">
      <van-row type="flex" justify="space-between">
      <van-col span="24">
        <img src="../../assets/潮流资讯_01.jpg" alt="">
      </van-col>
      </van-row>
    </router-link>
    <router-link to="/abstract">
      <van-row type="flex" justify="space-between">
      <van-col span="24">
        <img src="../../assets/潮流资讯_01.jpg" alt="">
      </van-col>
      </van-row>
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import { Col, Row } from 'vant'

Vue.use(Col)
Vue.use(Row)
export default {
  methods: {
    onClickLeft () {
      this.$router.push('/home')
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
img{
  margin-bottom: 20px;
  width: 100%;
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
</style>
