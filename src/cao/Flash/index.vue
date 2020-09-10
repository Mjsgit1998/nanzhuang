<template>
    <div style="background: #eeeeee; height:100vh;">
        <van-nav-bar title="限时特惠" left-text="返回" left-arrow>
            <template #right>
                <van-icon name="ellipsis" size="18" />
            </template>
        </van-nav-bar>

        <div class="nav">
            <div>
                <p>08:00</p>
                <span>抢购中</span>
            </div>
            <div>
                <p>12:00</p>
                <span>即将开始</span>
            </div>
            <div>
                <p>16:00</p>
                <span>即将开始</span>
            </div>
            <div>
                <p>20:00</p>
                <span>即将开始</span>
            </div>
            <div>
                <p>00:00</p>
                <span>即将开始</span>
            </div>
        </div>

        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <img src="../../assets/限时特惠_02.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../../assets/限时特惠_02.jpg" alt="">
            </van-swipe-item>
        </van-swipe>

        <div class="qg">
            <div>
                抢购中<span>08:00</span>开抢
            </div>
            <div>
                距结束
                <span>00</span>:
                <span>36</span>:
                <span>12</span>
            </div>
        </div>

        <div class="banner">
            <div class="imgs">
                <img src="../../assets/评价_03.jpg" alt="">
            </div>
            <div class="banner_1">
                <p>春秋商务休闲加肥加大胖子<br />
                衬衣肥佬宽松中年正装场...</p>
                <span>￥199.00</span>
                <span style="text-decoration:line-through;color:#666666">￥2000.00</span>
            </div>
            <div class="banner_2">
                <p>去抢购</p>
                <a href="javascript:;"><img src="../../assets/我的订单-订单详情_03.jpg" alt=""></a>
            </div>
        </div>

        <div class="banner">
            <div class="imgs">
                <img src="../../assets/评价_03.jpg" alt="">
            </div>
            <div class="banner_1">
                <p>春秋商务休闲加肥加大胖子<br />
                衬衣肥佬宽松中年正装场...</p>
                <span>￥199.00</span>
                <span style="text-decoration:line-through;color:#666666">￥2000.00</span>
            </div>
            <div class="banner_2">
                <p>去抢购</p>
                <a href="javascript:;"><img src="../../assets/我的订单-订单详情_03.jpg" alt=""></a>
            </div>
        </div>

        <div class="banner">
            <div class="imgs">
                <img src="../../assets/评价_03.jpg" alt="">
            </div>
            <div class="banner_1">
                <p>春秋商务休闲加肥加大胖子<br />
                衬衣肥佬宽松中年正装场...</p>
                <span>￥199.00</span>
                <span style="text-decoration:line-through;color:#666666">￥2000.00</span>
            </div>
            <div class="banner_2">
                <p>去抢购</p>
                <a href="javascript:;"><img src="../../assets/我的订单-订单详情_03.jpg" alt=""></a>
            </div>
        </div>

        <div class="banner">
            <div class="imgs">
                <img src="../../assets/评价_03.jpg" alt="">
            </div>
            <div class="banner_1">
                <p>春秋商务休闲加肥加大胖子<br />
                衬衣肥佬宽松中年正装场...</p>
                <span>￥199.00</span>
                <span style="text-decoration:line-through;color:#666666">￥2000.00</span>
            </div>
            <div class="banner_2">
                <p>去抢购</p>
                <a href="javascript:;"><img src="../../assets/我的订单-订单详情_03.jpg" alt=""></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    /deep/ .van-nav-bar__text{
        color:#fff !important;
    }
    /deep/.van-nav-bar__title{
        color:#fff;
    }
    .van-icon-ellipsis::before{
        color:#fff;
    }
/deep/.van-icon-arrow-left::before{
    color:#fff;
}
.van-nav-bar{
    background:#1d1c22;
}
// 头部样式完

    .nav{
        display:flex;
        justify-content: center;
        align-items: center;
        div{
            flex:20%;
            height:55px;
            background:#2f2f2f;
            text-align: center;
            border-right: 1px solid #000;
            color:#fff;
            padding-top:15px;
            p{
                font-size:20px;
            }
            span{
                font-size:12px;
            }
        }
    }
     .my-swipe .van-swipe-item {
        color: #fff;
        text-align: center;
        img{
            width:100%;
        }
    }
    //轮播完

    .qg{
        display:flex;
        justify-content: space-between;
        padding:8px;
        background-color:rgb(225, 225, 225);
        :nth-child(2){
            span{
                display:inline-block;
                width:20px;
                height:20px;
                background:#000;
                color:#fff;
                line-height:20px;
                text-align:center;
                margin-right:3px;
            }
        }
    }

    //最后部分
    .banner{
        display:flex;
        justify-content: space-around;
        background:#fff;
        padding:10px;
        margin-top: 15px;
        background: url('../../assets/我的订单-订单详情_02.jpg') no-repeat;
        // width: 100%;
        // align-items: center;
        .imgs{
                img{
                width:80px;
            }
        }

        .banner_1{
            color:#666666;
                p{
                    font-size:14px;
                    margin-bottom:20px;
                }
                  span{
                        color:red;
                        margin-right:15px;
                    }
        }
        .banner_2{
            color:#234597;
            p{
                margin:20px 0 16px 0;
            }
            a{
                margin-left:30px;
                img{
                    width: 20px;
                }
            }
        }
    }
</style>
