<template>
  <div >

       <van-nav-bar title="比郎" left-text="返回"   @click-left="onClickLeft"
  @click-right="onClickRight" left-arrow
   class="tex"
    >
     <template #right>
    <van-icon name="ellipsis" size="18" />
       </template>
    </van-nav-bar>
       <!-- 图标 -->
       <div class="img">
       <!-- <img src="../../assets/img/登录_01.png" alt=""> -->
       </div>
        <!-- from表单 -->
       <van-form   validate-first>
         <!-- 手机号 -->
              <!-- <div>
                  <svg t="1599116467892" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6134" width="32" height="32"><path d="M651.296021 545.977859c63.557548-42.814108 105.358583-115.235534 105.358583-197.532889 0-133.333728-110.364597-241.9761-245.813498-241.9761-135.451972 0-244.160859 108.642372-244.160859 240.322437 0 82.297354 41.821501 154.739247 105.35756 197.530842-143.80522 55.979966-244.135276 191.069687-244.135276 350.748433l0 0 68.561515 0 0 0c0-158.026106 122.06815-288.197818 277.581016-306.303174 1.674129 0 43.476187-3.284813 78.595033 0l3.350304 0 0 0C708.17445 610.18009 825.215096 738.574319 825.215096 894.946762l0 0 70.239737 0 0 0C893.779681 736.921679 793.447579 600.303138 651.296021 545.977859L651.296021 545.977859zM510.841106 527.85613c-102.008278 0-183.930079-80.644715-183.930079-181.063799 0-100.419084 81.921801-181.062775 183.930079-181.062775 102.007255 0 183.929056 80.643692 183.929056 181.062775C694.770162 447.211415 612.848361 527.85613 510.841106 527.85613L510.841106 527.85613zM510.841106 527.85613" p-id="6135"></path></svg>
              </div> -->
             <van-field
                placeholder="请输入邮箱号"
                v-model="username"
                left-icon="contact"
                :rules="[ { required: true, message: '请输入邮箱号' },
                        { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.com)+$/, message: '邮箱格式错误！'}
                      ]"
              >

               <template #button>
                  <van-button @click="getcode" type="info">发送验证码</van-button>
              </template>
             </van-field>
            <!-- 验证码 -->
            <van-field
                placeholder="请输入验证码"
                v-model="code"
                 left-icon="certificate"
                :rules="[{ required: true, message: '输入验证码' },
                      { pattern: /\w{4}/, message: '请输入正确验证码'}]"
              />

            <!-- 密码 -->
            <van-field
              label="密码"
              placeholder="请示入密码"
              v-model="password"
              right-icon="eye-o"
              left-icon="closed-eye"
              :rules="[{ required: true, message: '输入密码6位' },
                      { pattern: /\w{6,25}$/, message: '请输入正确密码'}]"

            />
     <!-- ------------------------------------------------- -->
        <div class="box">
           <p>请阅读   <a>《注册需知》</a></p>
        </div>
         <van-button  block type="info"  @click="onload">
                 注册
         </van-button>
    </van-form>
  </div>
</template>

<script>
// import func from '../../../vue-temp/vue-editor-bridge'
// import { Toast } from 'vant'
export default {
  name: 'aaa',
  data () {
    return {

      username: '', // 邮箱
      password: '', // 密码
      code: '', // 验证码
      pattern: ''
    }
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      console.log(1)
    },
    onload () {
      this.$axios({
        method: 'post',
        url: 'http://fu.yimentu.com/bilang/api.php/registe/addinfo',
        data: {
          code: this.code,
          username: this.username,
          password: this.password
        }
      }).then(res => {
        console.log(res)
        this.$router.push('/login')
      })
    },
    getcode () {
      this.$axios.post('http://fu.yimentu.com/bilang/api.php/login/getcode', {
        username: this.username
      })
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>

<style lang='less' scoped>

.van-field{
   display: flex;
   align-items: center;
   background:#e6e8ea;
    width:100%;
}
.box{
   p{
     font-size: 14px;
     color: #d6d6d6;
   }
  a{
    font-size: 15px;
    color: #234497;
   }
}
.pos{
  width: 100%;
  height: 40px;
  display: flex;
  box-sizing: border-box;

}
.img{
  img{
    width: 300px;
    height: 40px;
  }
}

</style>
