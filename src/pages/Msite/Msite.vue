<template>
    <div class="msite">
        <!-- 首页头部 -->
        <HeaderTop title="南昌市华东交通大学南区">
            <router-link slot="search" to="/search" class="header_search">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
            <router-link slot="login" to="/login" class="header_login">
                <span class="header_login_text">登录|注册</span>
            </router-link>
        </HeaderTop>
        <!-- 首页导航 -->
        <nav class="msite_nav border-1px">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/3.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/4.jpg">
                            </div>
                            <span>简餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/5.jpg">
                            </div>
                            <span>新店特惠</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/6.jpg">
                            </div>
                            <span>准时达</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/7.jpg">
                            </div>
                            <span>预定早餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/8.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/9.jpg">
                            </div>
                            <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/10.jpg">
                            </div>
                            <span>商超便利</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/11.jpg">
                            </div>
                            <span>美食</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/12.jpg">
                            </div>
                            <span>简餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/13.jpg">
                            </div>
                            <span>新店特惠</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/14.jpg">
                            </div>
                            <span>准时达</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/1.jpg">
                            </div>
                            <span>预定早餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                            <div class="food_container">
                                <img src="./images/nav/2.jpg">
                            </div>
                            <span>土豪推荐</span>
                        </a>
                    </div>
                </div>
                <!-- 需要分页 -->
                <div class="swiper-pagination"></div>
            </div>
        </nav>
        <!-- 首页附近的商家 -->
        <div class="msite_shop_list border-1px">
            <div class="shop_header">
                <i class=""></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <ShopList/>
        </div>
    </div>
</template>
<script>
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  components: {
    HeaderTop,
    ShopList
  }
//   mounted () {
//     /* eslint-disable no-new */
//     new Swiper('.swiper-container', {
//       pagination: {
//         el: '.swiper-pagination'
//       },
//       loop: true
//     })
//   }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .msite
      width 100%
      .header
        background-color #0090ff
        position fixed
        z-index 100
        left 0
        top 0
        width 100%
        height 45px
        .header_search
          position absolute
          left 15px
          top 50%
          transform translateY(-50%)
          width 10%
          height 50%
          .icon-sousuo
            font-size 25px
            color #fff
        .header_title
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
          width 50%
          color #fff
          text-align center
          .header_title_text
            font-size 20px
            color #ffffff
            display block
        .header_login
          font-size 14px
          color #ffffff
          position absolute
          right 15px
          top 50%
          transform translateY(-50%)
          .header_login_text
            color #ffffff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #ffffff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span .swiper-pagination-billet-active
            background #02a774
</style>
