<template>
  <div class="shoulder">
      <div class="topnav">
               <van-nav-bar title="我的代言费" id="nav" left-text="返回"  fixed left-arrow @click-left="onClickLeft">
                   <template #right>
                        <van-icon color="white" name="ellipsis" size="18" />
                        </template>
                    </van-nav-bar>
            </div>
     <div style="height:46px"></div>
      <div class="bj">
          <img src="../../assets/my_weights.jpg" alt="">
      </div>
      <div class="text">
          <h5>测 量 方 法</h5>
          <p>将卷尺放在髋骨上部和胸腔下部中间的地方，贴紧皮肤<br>但不要勒紧。在呼气状态下读取测量值，精确到O.1cm</p>
      </div>
      <div class="foot">
         <p>添加体重</p>
         <div class="inp">
              <van-field v-model="number" type="number" placeholder="单位:cm"/>
         </div>
         <div class="next">
             <span @click="changenext">下一步 </span>
             <img src="../../assets/next.png" alt="">
         </div>
         <div class="ruler">
             <img src="../../assets/ruler.png" alt="">
         </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    //   console.log(123)
    },
    onClickRight () {
    //   Toast('按钮')
    },
    changenext () {
      this.$router.push('/myshoulder')
      console.log(123)
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
    // background:#f9f9f9;
}
.shoulder{
    height:100vh;
    background:#f9f9f9;
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
/deep/ .van-field__control{
    padding-left:8px;
}
/deep/ .van-image__img{
    width:50%;
}
/deep/.van-nav-bar__title{
    color:#fff;
}
/deep/.van-nav-bar__text{
    color:#fff;
}
/deep/.van-nav-bar .van-icon{
    color:#fff;
}

.text{
    h5{
        text-align: center;
        color:#999999;
        margin-bottom: 5px;
        margin-top:15px;
    }
    p{
      text-align: center;
        color:#999999;
        font-size: 14px;
    }
}
.foot{
    width:100%;
    height:178px;
    margin-top:30px;
    background:url('../../assets/crry.jpg') no-repeat;
    background-size: cover;
    overflow: hidden;
    p{
        text-align: center;
        padding-top:20px;
    }
    .inp{
        width:100px;
        height:26px;
        position:relative;
        left:38%;
        margin-top:20px;
    }
    .next{
        display:flex;
        justify-content: center;
        align-items: center;
        position:relative;
        left:33%;
        span{
            color:#234497;
            font-size: 14px;
            margin-right:5px;
        }
        img{
            width:25px;
            height:22px;
        }
    }
    .ruler{
        margin-top:20px;
        img{
            width:100%;
            height:40px;
        }
    }
}
.bj{
    img{
        width:100%;
    }
}
</style>
