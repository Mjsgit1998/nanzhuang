<template>
    <div class="shop">
        <div class="topnav">
                <van-nav-bar title="我的代言费" id="nav" left-text="返回"  fixed left-arrow @click-left="onClickLeft">
                    <template #right>
                            <van-icon color="white" name="ellipsis" size="18" />
                            </template>
                        </van-nav-bar>
        </div>
        <div style="height:46px"></div>
        <div class="goods" v-if="look">
            <van-checkbox v-model="checked"></van-checkbox>
            <van-card
                 centered
                price="2.00"
                desc="描述信息"
                title="商品标题"
            >
                    <template #thumb>
                        <img style="width:80%;height:80%;margin-top:10px" src="../../assets/images/图文-01.jpg" alt="">
                    </template>
                    <template #bottom>
                        <van-stepper v-model="value" />
                    </template>
                    <template #footer>
                            <van-button icon="delete" size="small" @click="delet" ></van-button>
                    </template>
            </van-card>
        </div>
        <div class="goods" v-if="look">
            <van-checkbox v-model="checked"></van-checkbox>
            <van-card
                 centered
                price="2.00"
                desc="描述信息"
                title="商品标题"
            >
                    <template #thumb>
                        <img style="width:80%;height:80%;margin-top:10px" src="../../assets/images/图文-01.jpg" alt="">
                    </template>
                    <template #bottom>
                        <van-stepper v-model="value" />
                    </template>
                    <template #footer>
                            <van-button icon="delete" size="small" @click="delet" ></van-button>
                    </template>
            </van-card>
        </div>

        <div class="submit">
                <van-submit-bar :price="pp" button-text="去结算" @submit="$router.push('/shopcar/jiesuan')" text-align="left" button-color="blue" >
                    <van-checkbox v-model="checked">全选</van-checkbox>

                </van-submit-bar>
        </div>
     </div>
</template>

<script>
export default {
  name: 'aaa',
  data () {
    return {
      show: false,
      look: true,
      value: 1,
      checked: true,
      pp: 2222

    }
  },
  methods: {
    onClickLeft () {
      // Toast('返回')
      this.$router.go(-1)
    },
    onClickRight () {
    //   Toast('按钮')
    },
    delet () {
      this.look = false
    }
  }
}
</script>

<style lang="less" scoped>
 *{
       margin: 0;
      padding: 0;
   }
   body{
        max-width: 750px;
       min-width: 375px;
       margin: 0 auto;
   }
   .home{
       width: 100%;
       height: 100%;
      overflow: hidden;
   }
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
    .goods{
        display: flex;
        // position: relative;
        width: 100%;
        background-color: rgb(250,250,250);
        .van-checkbox{
            width: 10%;

            // float: left;
            // position: absolute;
            // top: 40px;
            // left: 5%;
        }
       .van-card{
           width: 90%;
            // float: right;
       }
    }
</style>
