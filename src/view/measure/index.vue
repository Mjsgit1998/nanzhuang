<template>
  <div>
      <div class="topnav">
               <van-nav-bar title="我的代言费" id="nav" left-text="返回"  fixed left-arrow @click-left="onClickLeft">
                   <template #right>
                        <van-icon color="white" name="ellipsis" size="18" />
                        </template>
                    </van-nav-bar>
            </div>
     <div style="height:46px"></div>
      <van-grid :border="false" :column-num="3" :gutter="10">
        <van-grid-item>
            <van-image :src="require('../../assets/leader.png')"  />
            <span class="measure">领围</span>
            <span class="size">180cm</span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/neck_line_03.png')" />
            <span class="measure">胸围</span>
            <span class="size">86.5cm</span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/waistline_03.png')" />
            <span class="measure">腰围</span>
            <span class="size">33.6cm</span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/shoulder_03.png')" />
            <span class="measure">肩宽</span>
            <span class="size">91.6cm</span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/outside_03.png')" />
            <span class="measure">袖长</span>
            <span class="size">91.6cm</span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/clothes_length_03.png')" />
            <span class="measure">衣长</span>
            <span class="size">176cm</span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/sleeve_width_03.png')" />
            <span class="measure">袖肥</span>
            <span class="size">33.6cm</span>
        </van-grid-item>
        <van-grid-item>
            <van-image :src="require('../../assets/cuff_03.png')" />
            <span class="measure">袖口</span>
            <span class="size">86.5cm</span>
        </van-grid-item>
      </van-grid>
      <div class="btn">
        <van-button plain type="info" style="width:40%;" to="/measurenone">重新测量</van-button>
        <van-button type="info" style="width:40%;" to="">确定尺寸</van-button>
      </div>
      <!-- <div style="width:100px;
      height:100px;
      border:1px solid #000;">
                <img src="" alt="">
                <div class="onimg" @click="onimg"></div>
            </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.go(-1)
      console.log(123)
    },
    onimg () {
      const token = window.localStorage.getItem('bilan-token')
      this.$axios({
        url: 'http://fu.yimentu.com/bilang/api.php/index/index',
        method: 'GET',
        header: {
          token: `Bearer ${token}`
        }
      }).then(res => {
        console.log(token)
        console.log(res, '成功')
      }).catch(err => {
        console.log(token)
        console.log(err, '失败')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.topnav{

              #nav{background-color: black; }
             /deep/.van-icon-arrow-left::before{color:#fff;}
            /deep/.van-icon-ellipsis::before{color:#fff;}
            /deep/.van-nav-bar__text{color:#fff!important;}
            /deep/.van-nav-bar__title{
                        color: white !important;
                        font-size: 20px;
                    }
  }
*{
    margin:0;
    padding:0;
}
.header{
    width:100%;
    height:88px;
    background: #1f1e24;
    position:fixed;
    z-index: 10;
}
.head{
    width:100%;
    height:88px;
}
.nav{
    position:relative;
    top: 42px;
    color:#fff;
}
/deep/ .van-ellipsis{
    color:#fff;
}
/deep/ .van-nav-bar__text{
    color:#fff;
}
/deep/ .van-nav-bar .van-icon{
    color:#fff;
}
/deep/ .van-image__img{
    width:50px;
    height:50px;
}
.measure{
    margin:10px 0;
    color:#999999;
}
.size{
    color:#234497;
    font-size: 20px;
}
.btn{
    width:100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin:30px 0;
}
.onimg{
     width:30px;
     height:30px;
     background:blue;
     border-radius: 50%;
 }
</style>
