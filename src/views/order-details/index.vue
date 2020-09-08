<template>
  <div id="details">
      <van-nav-bar title="订单详情" left-text="返回" left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="25" />
        </template>
    </van-nav-bar>
      <div class="everys">
            <div class="every">
              <div>订单状态：<span class="shipped">已发货</span></div>
              <div>订单单号：<span class="odd">51313131</span></div>
              <div>订单金额：<span class="price">￥2000</span></div>
            </div>
            <div class="icon">
              <van-icon name="logistics"  size="50" />
              <div>
                <router-link to="javascript:;">确认收货</router-link>
              </div>
            </div>
          </div>
          <!-- 订单具体信息 -->
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          />
          <!-- 订单地址 -->
          <van-cell title="曹先生：17635349481" size="large" label="山西省太原市小店区经济开发区景祥大厦" icon="location-o" center />
          <!-- 支付配送方式 -->
          <div class="big_payment">
            <div class="payment">
              <div class="mode_payment">支付方式</div>
              <div class="wechat">
                <router-link to="javascript:;">微信支付</router-link>
              </div>
            </div>
            <div class="distribution">
              <div class="mode_distribution">配送方式
                <p>工作日、双休日与假日均可送货</p>
              </div>
              <div class="wechat">
                <router-link to="javascript:;">快递</router-link>
              </div>
            </div>
          </div>
          <!-- 测量尺寸 -->
          <div class="measurement">
            <div class="size">测量尺寸</div>
            <div class="taglia">SS-37-A
              <span>
                <router-link to="javascript:;">
                  <img src="../../assets/我的订单-订单详情_03.jpg" alt="">
                </router-link>
              </span>
            </div>

          </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft () {
      this.$router.push('/order')
    }
  }
}
</script>

<style scoped lang="less">
body
.van-tab__text{
  font-size: 24px;
}
.van-icon{
  vertical-align: middle;
  color: rgb(35, 68, 151);
}
.van-card{
  margin: 0;
}
.van-card__footer {
    display: flex;
    flex: 1;
    text-align: right;
    // .van-button--large {
    //     width: 50%;
    //     height: 50px;
    // }
}
.van-cell{
  margin-top: 20px;
}
  a{
      // font-size: 24px;
      color: rgb(35, 68, 151);
}
.van-nav-bar{
  background: #1b1a20;
  /deep/.van-nav-bar__text{
    color: #fff;
    font-size: 18px;
  }
  /deep/.van-ellipsis{
    color: #fff;
    font-size: 20px;

  }
  /deep/.van-icon-arrow-left::before{
    color: #fff;
  }
  /deep/.van-icon-ellipsis::before{
    color: #fff;
  }
}
.everys{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background-image: url('../../assets/我的订单-订单详情_02.jpg');
    .every{
    display: flex;
    flex-direction: column;
    // background-color: #ffffff;
    // font-size: 22px;
    div{
      display: flex;
      margin-left: 30px;
      margin-top: 10px;
      margin-bottom: 5px;
      // padding: 10px;
      .shipped{
        color: rgb(255, 129, 129);
      }
      .odd{
        padding-top: 3px;
      }
    }
  }
  .icon{
    padding-top: 30px;
    padding-right: 20px;
    text-align: center;
    color: rgb(35, 68, 151);
    // font-size: 22px;
  }

}
// 订单信息
.van-card{
  margin-top: 20px;
  // font-size: 24px;
  .van-card__desc {
      max-height: 60px;
      color: #646566;
      line-height: 50px;
  }
  .van-card__title {
    max-height: 32px;
    font-weight: 500;
    line-height: 30px;
  }

}
// 地址信息
.van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    overflow: hidden;
    color: #323233;
    // font-size: 15px;
    line-height: 40px;
    // background-color: #fff;
}
.van-cell__left-icon, .van-cell__right-icon {
    min-width: 1em;
    height: 24px;
    // font-size: 24px;
    line-height: 24px;
  }
  // .van-cell--large .van-cell__title {
  //   // font-size: 30px;
  // }
  // .van-cell--large .van-cell__label {
  //   // font-size: 24px;
  // }
// 支付配送方式
  .big_payment{
    // font-size: 28px;
      .payment{
        display: flex;
        justify-content: space-between;
        padding: 30px 25px 30px 25px;
        background-color: #fff;
        margin-top: 20px;
        a{
          // font-size: 24px;
          color: rgb(35, 68, 151);
        }
    }

  }
  // 配送
.distribution{
  display: flex;
  justify-content: space-between;
  padding: 0 25px 30px 25px;
  background-color: #fff;
  p{
    color: #cccccc;
  }
}
.measurement{
  // font-size: 28px;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  background-color: #fff;
  margin-top: 20px;
  a{
    vertical-align: middle;
  }
}
</style>
