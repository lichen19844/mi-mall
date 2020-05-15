<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a><span> | </span>
          <a href="javascript:;">MIUI</a><span> | </span>
          <a href="javascript:;">IoT</a><span> | </span>
          <a href="javascript:;">云服务</a><span> | </span>
        </div>
        <div class="topbar-user">
          <a href="javascript:;">登录</a><span> | </span>
          <a href="javascript:;">注册</a><span> | </span>
          <a href="javascript:;" class="my-cart"
            ><span class="icon-cart"></span>购物车</a
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
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10 青春版 5G</div>
                    <div class="pro-price">2099元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10 青春版 5G</div>
                    <div class="pro-price">2099元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10 青春版 5G</div>
                    <div class="pro-price">2099元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10 青春版 5G</div>
                    <div class="pro-price">2099元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10 青春版 5G</div>
                    <div class="pro-price">2099元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img
                        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png"
                        alt=""
                      />
                    </div>
                    <div class="pro-name">小米10 青春版 5G</div>
                    <div class="pro-price">2099元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
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
export default {
  name: "nav-header",
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
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 114px;
          height: 55px;
          &:before {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.4s;
            border: 1px solid green;
          }
          &:after {
            content: "";
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
            transition: margin 0.4s;
            border: 1px solid red;
          }
          &:hover:before {
            margin-left: -55px;
          }
        }
      }
      .header-menu {
        display: inline-block;
        // 在flex布局中靠宽度来控制显示位置
        width: 643px;
        padding-left: 209px;
        border: 1px solid;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          line-height: 60px;
          margin-right: 20px;
          border: 1px solid red;
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
