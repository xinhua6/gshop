<template>
    <div class="msite">
        <!-- 首页头部 -->
        <header class="header">
            <a class="header_search">
                <i class="iconfont icon-sousuo"></i>
            </a>
            <a class="header_title">
                <span class="header_title_text ellipsis">南昌市华东交通大学南区</span>
            </a>
            <a class="header_login">
                <span class="header_login_text">登录|注册</span>
            </a>
        </header>
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
            <div class="shop_container">
                <ul class="shop_list">
                    <li class="shop_li border-1px">
                        <a>
                            <div class="shop_left">
                                <img class="shop_img" src="#">
                            </div>
                            <div class="shop_right">
                                <section class="shop_detail_header">
                                    <h4 class="shop_title"></h4>
                                    <ul class="shop_detail_ul">
                                        <li class="supports">保</li>
                                        <li class="supports">准</li>
                                        <li class="supports">票</li>
                                    </ul>
                                </section>
                                <section class="shop_rating_order">
                                    <section class="shop_rating_order_left">
                                        <div class="star star-24">
                                            <span class="star-item on"></span>
                                            <span class="star-item on"></span>
                                            <span class="star-item on"></span>
                                            <span class="star-item half"></span>
                                            <span class="star-item off"></span>
                                        </div>
                                        <div class="rating_section"></div>
                                        <div class="order_section">月售单</div>
                                    </section>
                                    <section class="shop_rating_order_right">
                                        <span class="delivery_style delivery_left">菜鸟专送</span>
                                        <span class="delivery_style delivery_right">准时达到</span>
                                    </section>
                                </section>
                                <section class="shop_distance">
                                    <p class="shop_delivery_msg">
                                        <span>起</span>
                                        <span class="segmentation"></span>
                                        <span>配送费¥</span>
                                    </p>
                                </section>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true
    })
  }
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
