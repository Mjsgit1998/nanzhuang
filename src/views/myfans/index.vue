<template>
   <div style="height:100vh; background:#f3f4f6;">
       <van-nav-bar title="我的粉比" left-text="返回" left-arrow
      @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

      <van-tabs v-model="active">
        <van-tab title="一级粉比(8)">
             <div class="tu">
        <a href="javascript:;">
          <img src="../../assets/1.jpg" alt="">
          <span>董大伟</span>
        </a>
        <a href="javascript:;">
          <img src="../../assets/1.jpg" alt="">
          <span>董大伟</span>
        </a>
        <a href="javascript:;">
          <img src="../../assets/1.jpg" alt="">
          <span>董大伟</span>
        </a>
        <a href="javascript:;">
          <img src="../../assets/1.jpg" alt="">
          <span>董大伟</span>
        </a>
        <a href="javascript:;">
          <img src="../../assets/1.jpg" alt="">
          <span>董大伟</span>
        </a>
        <a href="javascript:;">
          <img src="../../assets/1.jpg" alt="">
          <span>董大伟</span>
        </a>
        <a href="javascript:;">
          <img src="../../assets/1.jpg" alt="">
          <span>董大伟</span>
        </a>
        <a href="javascript:;">
          <img src="../../assets/1.jpg" alt="">
          <span>董大伟</span>
        </a>
      </div>
        </van-tab>

        <van-tab title="二级粉比">

          <van-cell is-link @click="showPopup">展示弹出层</van-cell>
<van-popup v-model="show">

   <van-datetime-picker
            v-model="currentDate"
            type="year-month"
            title="选择年月"
            :min-date="minDate"
            :max-date="maxDate"
            :formatter="formatter"
          />
</van-popup>

        </van-tab>
      </van-tabs>

   </div>
</template>

<script>
export default {
  data () {
    return {
      active: '',

      show: false,

      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/')
    },

    showPopup () {
      this.show = true
    },

    formatter (type, val) {
      if (type === 'year') {
        return `${val}年`
      } else if (type === 'month') {
        return `${val}月`
      }
      return val
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
.tu{
  display:flex;
  justify-content: space-between !important;
  flex-wrap: wrap;
  margin-top:15px;
  background:#fff;
  padding:30px;
  padding-left:45px;

  a{
    display:flex;
    flex-direction: column;
    align-content: center;
    flex:22%;
    color:#000;
    font-size:14px;
    span{
      margin-bottom:10px;
    }
     img{
      width:50px;
      height:50px;
      border-radius:50%;
      margin-bottom:10px;
  }
  }

}
</style>
