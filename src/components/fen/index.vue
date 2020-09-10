<template>
  <div class="big">
      <van-nav-bar title="我的积分" left-text="返回" left-arrow
      @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

    <div class="bigfen">
        <div class="fen">
            <span>积分余额</span>
            <span style="color:red">200000</span>
        </div>
        <div class="xiaofen">
            <a href="javascript:;" @click="onFenchange">积分兑换</a>
            <i></i>
            <a href="javascript:;">积分规则</a>
        </div>
    </div>

    <van-row type="flex" justify="space-around">
        <van-col span="6">2016.01.11</van-col>
        <van-col span="6">分享积分</van-col>
        <van-col span="6" style="color:red">+5</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
        <van-col span="6">2016.01.11</van-col>
        <van-col span="6">分享积分</van-col>
        <van-col span="6" style="color:red">+5</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
        <van-col span="6">2016.01.11</van-col>
        <van-col span="6">分享积分</van-col>
        <van-col span="6" style="color:red">+5</van-col>
    </van-row>
    <van-row type="flex" justify="space-around">
        <van-col span="6">2016.01.11</van-col>
        <van-col span="6">分享积分</van-col>
        <van-col span="6" style="color:red">+20</van-col>
    </van-row>

  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.push('/money')
    },
    onFenchange () {
      this.$router.push('/fenchange')
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
.big{
    height:100vh;
    background:#f3f4f6;
    // background:pink;

}
.van-row {
    background:#fff;
    height:60px;
    line-height:60px;
    text-align:center;
    padding-left:18px;
    font-size:14px;
}
.bigfen{
    background:#fff;
    margin-bottom:40px;
    .xiaofen{
        display:flex;
        justify-content: space-around;
        padding-bottom:16px;
        a{
            color:#234497;
            font-size:15px;
        }
        i{
            border-right:1px solid #234497;
        }
    }
}
.fen{
    display:flex;
    justify-content: space-between;
    padding:15px;
    margin-top:12px;
    padding-top:30px;
    padding-bottom:30px;
    margin-bottom:16px;
    border-bottom:1px solid #ccc;
}
</style>
