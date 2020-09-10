<template>
  <div>
      <van-nav-bar title="添加收货地址" left-text="返回" left-arrow
      @click-left="onClickLeft">
        <template #right>
          <van-icon name="ellipsis" size="18" />
        </template>
      </van-nav-bar>

      <van-address-edit

        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
        />
<!-- import { Toast } from 'vant'; -->
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  data () {
    return {
    //   areaList,
      searchResult: []
    }
  },
  methods: {
    onSave () {
      Toast('save')
    },
    onClickLeft () {
      this.$router.push('/location')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
        //   {
        //     name: '黄龙万科中心',
        //     address: '杭州市西湖区'
        //   }
        ]
      } else {
        this.searchResult = []
      }
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
