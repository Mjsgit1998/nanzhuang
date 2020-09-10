<template>
   <div style="height:100vh; background:#f3f4f5;">
       <van-nav-bar title="粉比订单" left-text="返回" left-arrow
      @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

      <van-tabs v-model="active">
        <van-tab title="一级粉比">
          <div class="box">

            <div class="tu">
              <span>1</span>
              <img src="../../assets/images/1.jpg" alt="">
            </div>
            <div class="demo1">
              <span>昵称</span>
              <span>消费金额</span>
            </div>
            <div class="demo2">
               <span>董大伟</span>
                <span style="color: #234497;">￥1000000.00</span>
            </div>

          </div>

           <div class="box">

            <div class="tu">
              <span>2</span>
              <img src="../../assets/images/1.jpg" alt="">
            </div>
            <div class="demo1">
              <span>昵称</span>
              <span>消费金额</span>
            </div>
            <div class="demo2">
               <span>董大伟</span>
                <span style="color: #234497;">￥1000000.00</span>
            </div>

          </div>

           <div class="box">

            <div class="tu">
              <span>3</span>
              <img src="../../assets/images/1.jpg" alt="">
            </div>
            <div class="demo1">
              <span>昵称</span>
              <span>消费金额</span>
            </div>
            <div class="demo2">
               <span>董大伟</span>
                <span style="color: #234497;">￥1000000.00</span>
            </div>

          </div>
        </van-tab>

        <van-tab title="二级粉比">
           <div class="box">

            <div class="tu">
              <span>1</span>
              <img src="../../assets/images/1.jpg" alt="">
            </div>
            <div class="demo1">
              <span>昵称</span>
              <span>消费金额</span>
            </div>
            <div class="demo2">
               <span>董大伟</span>
                <span style="color: #234497;">￥1000000.00</span>
            </div>

          </div>
        </van-tab>
      </van-tabs>
   </div>
</template>

<script>
export default {
  data () {
    return {
      active: ''
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
.box{
  display:flex;
  align-items: center;
  justify-content: space-around;
  margin-top:30px;
  background: #fff;
  padding:20px;
  .tu{
    img{
      width:50px;
      height:50px;
      border-radius:50%;
      vertical-align: middle;
      padding-left:10px;
    }
  }
  .demo1{
    display:flex;
    flex-direction: column;
    font-size:14px;
    color:#999999;
  }
   .demo2{
    display:flex;
    flex-direction: column;
    font-size:14px;

  }
}
</style>
