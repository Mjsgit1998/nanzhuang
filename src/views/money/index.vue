<template>
  <div style="height:100vh;">
      <van-nav-bar title="我的钱包" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

      <div class="user fl">
        <van-icon name="manager" />
      </div>

      <div class="demo1 fl">
        <p >账户余额</p>
        <p>累计积分收益</p>
      </div>

      <div class="demo2 fl">
        <p style="color:red;">￥0.00</p>
        <p style="margin-left:13px;">1000</p>
      </div>

      <div class='demo3'>
        <a href="">余额提现<span>></span></a>
      </div>

      <div class="demo_1">
        <div class="demo_2">
          <a href="javascript:;" @click="onMyfans">
            <span>
              <van-icon name="friends-o" />
            </span>
            <span>我的粉比</span>
          </a>
        </div>
        <div class="demo_2">
          <a href="javascript:;" @click="onIndent">
            <van-icon name="orders-o" />
            <span>粉比订单</span>
          </a>
        </div>
       <div class="demo_2">
          <a href="javascript:;" @click="onEndorse">
            <van-icon name="balance-list-o" />
            <span>我的代言费</span>
          </a>
        </div>
        <div class="demo_2">
          <a href="javascript:;" @click="onVip">
            <van-icon name="vip-card-o" />
            <span>我的私享卡</span>
          </a>
        </div>
        <div class="demo_2">
          <a href="javascript:;" @click="onFen">
            <van-icon name="award-o" />
            <span>我的积分</span>
          </a>
        </div>
        <div class="demo_2">
          <a href="javascript:;" @click="onDiscount">
            <van-icon name="notes-o" />
            <span>我的优惠券</span>
          </a>
        </div>
        <div class="demo_2">
          <a href="javascript:;" @click="onBill">
            <van-icon name="records" />
            <span>账单查询</span>
          </a>
        </div>
        <div class="demo_2">
          <a href="">
            <van-icon name="description" />
            <span>粉比权益</span>
          </a>
        </div>
        <div class="demo_2">
          <a href="javascript:;" @click="onLocation">
            <van-icon name="medal-o" />
            <span>比朗学院</span>
          </a>
        </div>
      </div>

  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    onMyfans () {
      this.$router.push('/myfans')
    },
    onIndent () {
      this.$router.push('/indent')
    },
    onEndorse () {
      this.$router.push('/endorse')
    },
    onVip () {
      this.$router.push('/vip')
    },
    onFen () {
      this.$router.push('/fen')
    },
    onDiscount () {
      this.$router.push('/discount')
    },
    onBill () {
      this.$router.push('/bill')
    },
    onLocation () {
      this.$router.push('/location')
    }
  }
}
</script>

<style lang="less" scoped>
a{
  color:#000;
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
.demo_1{
  display:flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.demo_2{
  flex: 30%;
  border:1px solid #ccc;
  a{
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:3px;
    height:80px;
    margin-top:30px;
    .van-icon{
      font-size:35px;
      padding-bottom:5px;
      color: #234497;
    }
    span{
      font-size:14px;
    }
  }
}
  .van-nav-bar{
    background: #1b1a20;
  }
  .user{
    color: #ccc;
    border: 4px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    width:80px;
    height:80px;
    border-radius: 50%;
    line-height: 80px;
    text-align: center;
    margin:30px;
    margin-bottom:20px;
    .van-icon-manager::before {
      color:#ccc;
    }
  }

.demo1{
  margin-right:30px;
}
  .demo1, .demo2{
    margin-top:48px;
    p{
    padding-bottom:8px;
    font-size:14px;
    }
  }
  .demo3{
    a{
      color:#234497;
    }
  }
  .demo3{
    height:60px;
    background:#ccc;
    clear: both;
    line-height:60px;
    padding-left:150px;
    // text-align: center;
    font-size:14px;
  span{
    padding-left:120px;
    font-size:15px;
  }
  }

</style>
