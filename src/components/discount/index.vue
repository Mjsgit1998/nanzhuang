<template>
  <div style="width:100%; background:#f3f4f6; height:100vh;">
      <van-nav-bar title="优惠券" left-text="返回" left-arrow
      @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

    <van-tabs>
        <van-tab title="有效">
        <img style="width:100%;
        vertical-align: top;" src="../../assets/images/优惠卷_03.jpg" alt="">
        <a href="javascript:;"
        style="padding-left:140px;
        background:#fff;
        display:block;
         color:#000;
         height:30px;
         line-height:30px;
         font-size:14px;
         color:#737373;">马上使用
        <span style="margin-left:120px;">=></span></a>
        </van-tab>
        <van-tab title="失效">
             <img style="width:100%;" src="../../assets/images/优惠卷_06.jpg" alt="">
        </van-tab>
        <van-tab title="全部">
            <div class="tu">
        <img src="../../assets/images/优惠卷_03.jpg" alt="">
        <a href="javascript:;"
        style="padding-left:140px;
        background:#fff;
        display:block;
         color:#000;
         height:30px;
         line-height:30px;
         font-size:14px;
         color:#737373;">马上使用
        <span style="margin-left:120px;">=></span></a>
        <img style="width:100%;" src="../../assets/images/优惠卷_06.jpg" alt="">
    </div>
        </van-tab>
    </van-tabs>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/money')
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
.tu{
    margin-top:15px;
}
.tu img{
    width:100%;
    vertical-align: top;
}
</style>
