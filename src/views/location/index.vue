<template>
  <div style="background:#eeeeee;height:100vh;">
      <van-nav-bar title="我的地址" left-text="返回" left-arrow
      @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

      <div class="demo">
         <div>
              <p>李先生 13423433424</p>
          <span>广东省佛山市禅城区印象购物中心5号楼b-101122<br />
           1902室</span>
         </div>
         <div style="margin:10px 0 0 20px;" @click="onLocation">
           <van-icon name="edit" />
         </div>
           <div class="demo1">
               默认
           </div>
      </div>

      <div class="demo" style="margin-top:6px;">
         <div>
              <p>李先生 13423433424</p>
          <span>广东省佛山市禅城区印象购物中心5号楼b-101122<br />
           1902室</span>
         </div>
        <div style="margin:10px 0 0 20px;" >
           <van-icon @click="onLocation" name="edit" />
         </div>
      </div>

      <van-button color="#234497" @click="onAddlocation">添加新地址</van-button>
  </div>
</template>

<script>
export default {

  methods: {
    onClickLeft () {
      this.$router.push('/')
    },
    onAddlocation () {
      this.$router.push('/addlocation')
    },
    onLocation () {
      this.$router.push('/addlocation')
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
.demo{
    background: #fff;
    display:flex;
    align-items:center;
    height:90px;
    padding-left:8px;
    margin-top:20px;
    p{
        margin-bottom:5px;
    }
    span{
        font-size:14px;
        color:#666666;
    }
    .demo1{
        width:30px;
        height:30px;
        border:2px solid #ff4242;
        border-radius:50%;
        background:#ffa1a1;
        font-size:12px;
        line-height:30px;
        text-align:center;
        color:#fff;
        margin-left:18px;
    }
}
.van-button{
    width:92%;
    margin:4% !important;
}

</style>
