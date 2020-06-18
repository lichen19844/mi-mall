<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{title}}<slot name="tip"></slot></h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "nav-header",
  props: {
    title: String,
  },
  computed: {
    ...mapState(['username', 'cartCount'])
  }
};
</script>

<style lang="scss">
  .order-header {
    padding: 30px 0;
    border-bottom: 2px solid #FF6600;
    // height: 112px;
    // line-height: 112px;
    .header-logo {
      float: left;
    }
    .title, .username {
      display: inline-block;
      height: 52px;
      line-height: 52px;
    }
    .title {
      font-size: 28px;
      color: #333333;
      float: left;
      margin-left: 54px;
      h2 {
        font-size: 28px;
        color: #333333;
      }
      span {
        font-size: 14px;
        margin-left: 17px;
        color: #999999;
        font-weight: 200;
      }
    }
    .username {
      float: right;
      a {
        color: #666666;
        font-size: 16px;
      }
    }
  }
</style>
