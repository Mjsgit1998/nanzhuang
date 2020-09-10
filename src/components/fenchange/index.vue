<template>
  <div class="big">
      <van-nav-bar title="积分兑换" left-text="返回" left-arrow
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
    </div>

    <div style="display:flex;
    background:#fff;padding:10px 0">
        <div style="width:60px; height:60px;
        line-height:60px;
        text-align:center;
        background:#ccc;
        border-radius:50%;
        margin-right:25px;
        margin-left:8px;
        "><span
        style="font-weight:700; color:#fff;">￥200</span></div>
        <div style="display:flex;
            flex-direction:column;
            margin-right:114px;
            margin-top:10px;">
            <span>200元储蓄卡抵用券</span>
            <span
            style="color:#ccc;
            font-size:14px;margin-top:5px;">需要积分：100</span>
        </div>
        <div style="margin-top:20px;">
            <a href="javascript:;">
              <svg t="1599011675896" class="icon" viewBox="0 0 1025 1024"
              version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1139"
              width="25" height="25"><path d="M516.22268 160.461856l418.045361 347.315464-418.045361 348.371134zM89.731959 376.874227h426.490721V633.402062H89.731959z" fill="#1296db" p-id="1140"></path></svg>
            </a>
        </div>
    </div>

     <div style="display:flex; margin-top:5px;
    background:#fff;padding:10px 0">
        <div style="width:60px; height:60px;
        line-height:60px;
        text-align:center;
        background:#ccc;
        border-radius:50%;
        margin-right:25px;
        margin-left:8px;
        "><span
        style="font-weight:700; color:#fff;">￥200</span></div>
        <div style="display:flex;
            flex-direction:column;
            margin-right:114px;
            margin-top:10px;">
            <span>200元储蓄卡抵用券</span>
            <span
            style="color:#ccc;
             font-size:14px;margin-top:5px;">需要积分：100</span>
        </div>
        <div style="margin-top:20px;">
            <a href="javascript:;">
              <svg t="1599011675896" class="icon" viewBox="0 0 1025 1024"
              version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1139"
              width="25" height="25"><path d="M516.22268 160.461856l418.045361 347.315464-418.045361 348.371134zM89.731959 376.874227h426.490721V633.402062H89.731959z" fill="#1296db" p-id="1140"></path></svg>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.push('/fen')
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
}

.bigfen{
    background:#fff;
    margin-bottom:40px;

}
.fen{
    display:flex;
    justify-content: space-between;
    padding:15px;
    margin-top:12px;
    padding-top:30px;
    padding-bottom:30px;
    margin-bottom:16px;
    // border-bottom:1px solid #ccc;
}
</style>
