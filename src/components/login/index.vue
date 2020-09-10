<template>
  <div>

      <van-nav-bar title="比郎" left-text="返回" left-arrow

       >
       <template  #right>
       <van-icon  name="ellipsis" size="18" />
       </template>
    </van-nav-bar>

    <!-- 图标 -->
       <div class="img">
       <!-- <img src="../../assets/img/登录_01.png" alt=""> -->
       </div>
   <!-- from表单 -->
     <van-form   validate-first >
        <!-- 手机号 -->
         <van-field

          type="tel"
          left-icon="contact"
          v-model="usename"
          placeholder="邮箱"
          :rules="[{ required: true, message: '邮箱' },
                { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.com)+$/, message: '邮箱错误'}]"
          >

          </van-field>

         <!-- 密码 -->
        <van-field
         v-model="password"
         type="password"

         left-icon="closed-eye"
         placeholder="请输入密码"

         :rules="[{ required: true, message: '输入密码6-25位' },
                  { pattern:  /\w{6,25}$/, message: '请输入正确密码'}]"
         >
         </van-field>

            <van-button  block type="info"  @click="oninter">
                  登录
           </van-button>
            <van-button  to="/zhuce" block   type="info"

            >
                  注册账号
           </van-button>
              <van-divider
               :style="{ color: 'cccc', borderColor: '#1989fa', padding: '35px 16px' }"
              >
                         第三方登录
            </van-divider>
            <div class="toi">
               <!-- <img src="../../assets/img/微信_3.png" alt="">微信登录 -->
            </div>

     </van-form>
  </div>
</template>

<script>

import { Toast } from 'vant'
export default {
  data () {
    return {
      usename: '',
      password: ''

    }
  },

  methods: {
    oninter () {
      this.$axios({
        method: 'post',
        url: 'http://fu.yimentu.com/bilang/api.php/login/login',
        data: {
          username: this.usename,
          password: this.password
        }
      }).then(res => {
        console.log(res)
        window.localStorage.setItem('token', res.data.data.token)
        this.$router.push('/home')
      })
    },

    validator (val) {
      return /^13[0-9]\d{8}$/.test(val)
    },
    // 异步校验函数返回 Promise
    asyncValidator (val) {
      return new Promise((resolve) => {
        Toast.loading('验证中...')

        setTimeout(() => {
          Toast.clear()
          resolve(/\d{6}/.test(val))
        }, 1000)
      })
    }
  }
}

</script>

<style lang='less' scoped>

.van-nav-bar{
   background: #252429;
   width: 100%;

}

.img{
  margin: 40px  30px 0 30px;
  img{
    width: 300px;
    height: 40px;
  }
}
.van-button{
   margin-top:10px ;
  //  background: #234497;
}
.van-field{
   background:#e6e8ea;

}
 .van-divider{

    /* background: #cccccc; */
    color: #cccccc;
 }
 .toi{
    width: 300px;
    height: 70px;
    border: 1px solid #e8e5e5;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
 }
</style>
>
