<template>
  <div class="nav-bar" :class="{ is_fixed: isFixed }">
    <div class="container">
      <div class="product-title">
        {{title}}
      </div>
      <div class="product-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  props: {
    title: String
  },
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  // 页面销毁时移除window全局事件，否则会在其它页面一样加载
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, true);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    }
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  background-color: $colorG;
  z-index: 10;
  &.is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
  }
  .container {
    border-top: 1px solid $colorH;
    @include flex();

    .product-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .product-param {
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>
