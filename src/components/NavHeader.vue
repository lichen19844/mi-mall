<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">IoT</a>
          <a href="javascript:;">云服务</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{this.username}}</a>
          <a href="javascript:;" v-else @click="login">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"
            ><span class="icon-cart"></span>购物车({{this.cartCount}})</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) of phoneList" :key="index">
                  <a :href="`/#/product/${item.id}`" target="_blank">
                    <div class="pro-img">
                      <!-- <img :src="item.mainImage" :alt="item.subtitle" /> -->
                      <img v-lazy="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-1.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98''</div>
                    <div class="pro-price">19999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-2.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸 R70A</div>
                    <div class="pro-price">2999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-3.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1749元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-5.jpg"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="/imgs/nav-img/nav-3-6.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1699元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "nav-header",
  data () {
    return {
      // username: 'jack',
      // username: this.$store.state.stateInfo.username,
      phoneList: []
    }
  },
  computed: {
    // username () {
    //   return this.$store.state.username
    // },
    // cartCount () {
    //   return this.$store.state.cartCount
    // },
    ...mapState(['username', 'cartCount'])
  },
  filters: {
    currency (val) {
      if(!val) return 0.00
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProductList()
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    getProductList () {
    this.axios.get('/products', {
      params: {
        categoryId: '100012', // 服务端的手机商品分类代码100012
        pageSize: 6
      }
    }).then((res) => {
      // Math.max(res.list, 6) > 6
      if (res.list.length >= 6) {
        this.phoneList = res.list.slice(0, 6)
      }
    })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      // display: flex;
      // justify-content: space-between;
      // align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
        &:last-child {
          margin-right: 0;
        }
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      position: relative;
      @include flex();
      // display: flex;
      // justify-content: space-between;
      // align-items: center;

      .header-menu {
        display: inline-block;
        // 在flex布局中靠宽度来控制显示位置
        width: 643px;
        padding-left: 209px;
        // border: 1px solid;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-size: 16px;
          // font-weight: bold;
          height: 60px;
          line-height: 60px;
          padding-right: 20px;
          // border: 1px solid red;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            border-top: 1px solid #e5e5e5;
            z-index: 10;
            border-color: #ffffff;
            transition: all .6s;
            background-color: $colorG;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
                .pro-img {
                  height: 137px; // 111px + 26px
                  img {
                    height: 111px;
                    width: auto;
                    margin-top: 26px;
                  }
                }
                .pro-name {
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price {
                  color: $colorA;
                }
              }
              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-right: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 318px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          // justify-self: ;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            box-sizing: border-box;
            padding-left: 14px;
            width: 264px;
            height: 50px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            // display: inline-block;
            // width: 18px;
            // height: 18px;
            // background: url('/imgs/icon-search.png') no-repeat center;
            // background-size: contain;
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
