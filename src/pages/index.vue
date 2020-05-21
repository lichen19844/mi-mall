<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) of menuList" :key="index">
                  <li v-for="(sub, sub_index) of item" :key="sub_index">
                    <a :href="sub ? '/#/product/'+sub.id : ''">
                      <img :src="sub ? sub.img : 'imgs/item-box-1.png'" alt="">
                      {{sub ? sub.name : '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 显示器 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">健康 儿童</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音箱</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper
          ref="mySwiper"
          :options="swiperOptions"
          class="swiper-scrollbar"
        >
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/#/product/' + item.id"><img :src="item.img"/></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <!-- <div class="swiper-scrollbar"></div> -->
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/'+item.id" v-for="(item, index) of adsList" :key="index">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt="">
        </a>
      </div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "index",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
        autoplay: true,
        // mousewheel: {
        //   invert: false,
        // },
        // spaceBetween: 30,
        // effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "47",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "48",
          img: "/imgs/slider/slide-5.jpg",
        },
      ],
      menuList: [
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米CC9'
          },{
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米8青春版'
          },{
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },{
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          },
        ],
        [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/imgs/ads/ads-4.jpg'
        }
      ]
    };
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper;
  //   },
  // },
  // mounted() {
  //   console.log("Current Swiper instance object", this.swiper);
  //   this.swiper.slideTo(3, 1000, false);
  // },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      padding: 20px 0;
      z-index: 2;
      box-sizing: border-box;
      background-color: #55585A6A;
      // opacity: 0.6;
      .menu-wrap {
        position: relative;
        .menu-item {
          height: 41px;
          line-height: 41px;
          a {
            position: relative;
            display: block;
            font-size: 14px;
            color: $colorG;
            padding-left: 30px;
            &:after {
              content: '';
              @include bgImg(10px, 15px, '/imgs/icon-arrow.png');
              position: absolute;
              right: 30px;
              top: 13px;  // (41px-15px)/2
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 960px;
            height: 449px;
            background-color: $colorG;
            position: absolute;
            top: -20px;
            left: 264px;
            border: 1px solid $colorH;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            ul {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                // width: 240px;
                flex: 1;
                padding-left: 23px;
                a {
                  color: $colorB;
                  font-size: 14px;
                  img {
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
                
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      .swiper-slide.swiper-slide-active img {
        opacity: 1;
        transition-delay: 0.3s;
      }
      img {
        width: 100%;
        height: 100%;
        opacity: 0.5;
        transition: opacity 1.2s;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .banner {
    margin-bottom: 50px;
    img {
      width: 100%;
    }
  }
}
</style>
