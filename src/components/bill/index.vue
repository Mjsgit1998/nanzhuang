<template>
   <div style="height:100vh; background:#f3f4f5;">
       <van-nav-bar title="账单" left-text="返回" left-arrow
      @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

      <div class="fen">
            <span>积分余额</span>
            <span style="color:red">￥2000.00</span>
        </div>

        <div class="demo">
          <div class="demo1">
            <span>在线支付</span>
            <span style="font-size:14px; color:#b6b6b6;">微信支付</span>
          </div>
          <div class="demo2">
            <span style="color:red">+￥548.58</span>
            <span style="font-size:14px; color:#b6b6b6;">2016.01.25</span>
          </div>
        </div>

         <div class="demo">
          <div class="demo1">
            <span>在线支付</span>
            <span style="font-size:14px; color:#b6b6b6;">微信支付</span>
          </div>
          <div class="demo2">
            <span>-￥548.58</span>
            <span style="font-size:14px; color:#b6b6b6;">2016.01.25</span>
          </div>
        </div>
   </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.go(-1)
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
.fen{
    display:flex;
    justify-content: space-between;
    padding:15px;
    background:#fff;
    margin-top:12px;
    padding-top:30px;
    padding-bottom:30px;
    margin-bottom:16px;
}
.demo{
  display:flex;
  justify-content: space-between;
  padding:20px;
  background:#fff;
  margin-bottom:1px;
  .demo1{
    display:flex;
    flex-direction: column;
    span{
      margin-top:8px;
    }
  }
  .demo2{
    display:flex;
    flex-direction: column;
    span{
      margin-top:8px;
    }
  }
}
</style>
