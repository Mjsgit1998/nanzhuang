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
       <img src="../../assets/登录_01.png" alt="">
       </div>
   <!-- from表单 -->
     <van-form  validate-first>
        <!-- 手机号 -->
         <van-field

          type="tel"
          left-icon="contact"
          v-model="usemame"
          placeholder="用户名"

          >

          </van-field>

         <!-- 密码 -->
        <van-field
         v-model="password"
         type="password"

         left-icon="closed-eye"
         placeholder="请输入密码"

         :rules="[{ required: true, message: '输入密码6位' },
                { pattern:  /^[1-6]\d{1,6}$/, message: '请输入正确密码'}]"
         >
         </van-field>

            <van-button  block type="info" @click="login">
                  登录
           </van-button>
            <van-button  block   type="info"
             to="/enroll"
            >
                  注册账号
           </van-button>
              <van-divider
               :style="{ color: 'cccc', borderColor: '#1989fa', padding: '35px 16px' }"
              >
                         第三方登录
            </van-divider>
            <div class="toi">
               <img src="../../assets/微信_3.png" alt="">微信登录
            </div>

     </van-form>
  </div>
</template>

<script>

import { Toast } from 'vant'
export default {
  data () {
    return {
      usemame: '',
      password: ''
    }
  },

  methods: {
    login () {
      this.$axios({
        url: 'http://fu.yimentu.com/bilang/api.php/login/login',
        data: {
          username: this.usemame,
          password: this.password
        },
        method: 'POST'
      }).then(res => {
        window.localStorage.setItem('user-token', res.data.data.token)
        console.log(res)
        this.$router.push('/')
      }).catch(err => {
        console.log(err, '失败')
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
