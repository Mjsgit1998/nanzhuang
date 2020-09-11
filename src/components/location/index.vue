<template>
  <div style="background:#eeeeee;height:100vh;">
      <van-nav-bar title="我的地址" left-text="返回" left-arrow fixed
      @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>
   <div style="height:46px"></div>
      <div class="demo" v-for="item in address" :key="item.Id">
         <div>
              <p>{{item.name}} {{item.tel}}</p>
          <span>{{item.area}}<br />
           {{item.address}}</span>
         </div>
         <div style="margin:10px 0 0 20px;" @click="$router.push('/addlocation/'+item.Id)">
           <van-icon name="edit" />
         </div>
           <div class="demo1" @click="onDelet(item.Id)">
             删除
           </div>
           <div v-if="item.default==1">默认地址</div>

      </div>

      <van-button color="#234497" @click="onAddlocation">添加新地址</van-button>
  </div>
</template>

<script>
import { Dialog, Toast, Loading } from 'vant'

import Vue from 'vue'
Vue.use(Loading)
Vue.use(Toast)
export default {
  data () {
    return {
      address: []
    }
  },
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  created () {
    this.onload()
  },
  methods: {

    onDelet (index) {
      const user = window.localStorage.getItem('user-id')
      Dialog.confirm({
        title: '确认删除吗',
        message: ''
      })
        .then(() => {
          // on confirm
          this.$axios({
            method: 'post',
            url: 'http://fu.yimentu.com/bilang/api.php/address/delete',
            data: {
              user_id: user,
              id: index
            }
          }).then(res => {
            console.log(res)
            this.onload()
            Toast.success('删除成功')
          })
        })
        .catch(() => {
          // on cancel
        })
    },
    onload () {
      const user = window.localStorage.getItem('user-id')
      this.$axios({
        method: 'post',
        url: 'http://fu.yimentu.com/bilang/api.php/address/index',
        data: { user_id: user }
      }).then(res => {
        console.log(res)
        this.address = res.data.data
      })
    },
    onClickLeft () {
      this.$router.push('/home')
    },
    onAddlocation () {
      this.$router.push('/addlocation')
    }
    // onLocation () {
    //   this.$router.push('/addlocation')
    // }
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
