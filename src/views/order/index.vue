<template>
  <div id="order">
    <!-- 标题 -->
    <van-nav-bar title="全部订单" left-text="返回" left-arrow >
        <template #right>
          <van-icon name="ellipsis" size="25" />
        </template>
    </van-nav-bar>
      <van-tabs v-model="active">
        <!-- 全部订单状态 -->
        <van-tab title="全部">
          <van-card
              tag="热卖"
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              @click-thumb="onclkthubm"
            >
            <!-- 状态按钮 -->
              <template #footer>
                <van-button round type="info" size="small">删除订单</van-button>
                <van-button round type="info" size="small">加入购物车</van-button>
              </template>
          </van-card>
          <van-card
              tag="热卖"
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              @click-thumb="onclkthubm"
            >
            <!-- 状态按钮 -->
              <template #footer>
                <van-button round type="info" size="small">删除订单</van-button>
                <van-button round type="info" size="small">加入购物车</van-button>
              </template>
          </van-card>
        </van-tab>

        <van-tab title="待付款" class="pay">
          <van-cell value="待付款">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
              <span class="custom-title">订单号：</span>
              <span class="custom-title">1000500651635163</span>
            </template>
          </van-cell>
          <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="src\assets\评价_03.jpg"
            >
            <template #footer>
              <van-button type="default" size="large">取消订单</van-button>
              <van-button type="default" size="large">去支付<van-icon name="cash-back-record" size="20" /></van-button>
            </template>
          </van-card>
        </van-tab>

        <van-tab title="待收货">
          <van-cell value="待付款">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
              <span class="custom-title">订单号：</span>
              <span class="custom-title">1000500651635163</span>
            </template>
          </van-cell>
          <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="src\assets\评价_03.jpg"
            >
            <template #footer>
              <van-button type="default" size="large" width="100%">
              <van-icon name="cash-back-record" size="20" />确认收货</van-button>
            </template>
          </van-card>
        </van-tab>

        <van-tab title="待评价">
          <van-cell value="待付款">
            <!-- 使用 title 插槽来自定义标题 -->
            <template #title>
              <span class="custom-title">订单号：</span>
              <span class="custom-title">1000500651635163</span>
            </template>
          </van-cell>
          <van-card
              num="2"
              price="2.00"
              desc="描述信息"
              title="商品标题"
              thumb="src\assets\评价_03.jpg"
            >
            <template #footer>
              <van-button type="default" size="large" width="100%" to="/evaluate">
              <van-icon name="cash-back-record" size="20" />评价&晒单</van-button>
            </template>
          </van-card>
        </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs, Card, Button, Icon, GoodsAction, GoodsActionIcon, GoodsActionButton, AddressList, Cell, CellGroup, AddressEdit, NavBar, Toast } from 'vant'

Vue.use(NavBar)
Vue.use(AddressEdit)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(AddressList)
Vue.use(GoodsAction)
Vue.use(GoodsActionButton)
Vue.use(GoodsActionIcon)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Card)
Vue.use(Tab)
Vue.use(Tabs)
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    onclkthubm () {
      this.$router.push('/details')
    },
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style  lang="less" scoped>

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

.van-tab__text{
  font-size: 24px;
}
.van-icon{
  vertical-align: middle;
  color: rgb(35, 68, 151);
}

// .van-card{
//   margin: 0;
// }
.pay{
    .van-card__footer {
      display: flex;
      flex: 1;
      text-align: right;
  }
}

.van-cell{
  margin-top: 20px;
}
  a{
      // font-size: 24px;
      color: rgb(35, 68, 151);
}
// 订单状态
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
// 状态按钮
.van-button--info {
    color: #000000;
    background-color: #fff;
    border: 1px solid #cccccc;
}
// 测量尺寸
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
