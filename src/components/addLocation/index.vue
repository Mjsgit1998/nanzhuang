<template>
  <div>
      <van-nav-bar title="添加收货地址" left-text="返回" left-arrow
      @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

      <van-address-edit
         :area-list="areaList"
          show-set-default
        show-search-result
        :search-result="searchResult"
        :area-placeholder="placeholder"
        :address-info = "addressInfo"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"

        />
<!-- import { Toast } from 'vant'; -->
  </div>
</template>

<script>
import Vue from 'vue'
import { AddressEdit, Toast, Area } from 'vant'

Vue.use(Toast)
Vue.use(AddressEdit)
Vue.use(Area)
export default {
  data () {
    return {
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市',
          130000: '山西省'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县',
          130100: '太原市',
          130200: '大同市'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
          130101: '小店区'
          // ....
        }
      },
      searchResult: [],
      addressInfo: {
        name: '',
        tel: '',
        addressDetail: '',
        province: '',
        city: '',
        county: '',
        isDefault: ''
      },
      placeholder: '',
      add: {}
    }
  },
  created () {
    this.oncurrent()
  },
  methods: {
    // 修改渲染已有地址
    oncurrent () {
      this.$axios({
        method: 'post',
        url: 'http://fu.yimentu.com/bilang/api.php/address/edit',
        data: { id: this.$route.params.addId }
      }).then(res => {
        console.log(res)
        this.add = res.data.data
        console.log(this.add)
        this.addressInfo = {
          name: this.add.name,
          tel: this.add.tel,
          addressDetail: this.add.address,
          province: this.add.area.substring(0, 3),
          city: this.add.area.substring(3, 6),
          county: this.add.area.substring(6, 9),
          isDefault: this.add.default
        }

        this.placeholder = `${this.addressInfo.province}/${this.addressInfo.city}/${this.addressInfo.county}`
        // console.log(this.addressInfo.isDefault)
      })
    },
    // 点击保存地址（包括新地址和修改过的地址）
    onSave (val) {
      // console.log(val)
      // console.log(val.name)
      if (this.$route.params.addId) {
        this.onRenew(val)
      } else {
        // 请求添加
        this.onNew(val)
      }
    },
    // 修改过后的地址
    onRenew (val) {
      // const user = window.localStorage.getItem('user-id')
      this.$axios({
        method: 'post',
        url: 'http://fu.yimentu.com/bilang/api.php/address/update',
        data: {
          // user_id: user,
          id: this.$route.params.addId,
          name: val.name,
          tel: val.tel,
          address: val.addressDetail,
          area: `${val.province}${val.city}${val.county}`,
          default: val.isDefault
        }
      }).then(res => {
        console.log(res)
        this.$router.push('/location')
        Toast.success('修改成功')
      })
    },
    // 新创建的地址
    onNew (val) {
      // const user = window.localStorage.getItem('user-id')
      this.$axios({
        method: 'post',
        url: 'http://fu.yimentu.com/bilang/api.php/address/add',
        data: {
          name: val.name,
          tel: val.tel,
          // user_id: user,
          address: val.addressDetail,
          area: `${val.province}${val.city}${val.county}`,
          default: val.isDefault
        }
      }).then(res => {
        console.log(res)
        this.$router.push('/location')
        Toast.success('添加成功')
      })
    },
    onClickLeft () {
      this.$router.push('/location')
    },
    onDelete () {
      Toast('delete')
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
</style>
