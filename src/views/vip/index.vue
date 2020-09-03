<template>
  <div style="width:100%;">
      <van-nav-bar title="我的私享卡" left-text="返回" left-arrow
      @click-left="onClickLeft">
        <template #right>
          <van-icon @click="onWeixin" name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

      <div class="banner">
          <img src="../../assets/我的私享卡_02.jpg" alt="">
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar{
    background: #1b1a20;
  }
  /deep/ .van-nav-bar__text {
  color: #fff !important;
}
/deep/ .van-nav-bar__title{
  color:#fff;
}
/deep/ .van-icon-arrow-left::before{
  color:#fff;
}
/deep/ .van-icon-ellipsis::before{
  color:#fff;
}
.banner img{
    width:100%;
    text-align:center;
}
</style>
