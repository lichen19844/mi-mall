<template>
  <!-- 底部内容 -->
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">河畔一角主页</a><span>|</span>
      <a href="javascript:;">Vue全栈课程</a><span>|</span>
      <a href="javascript:;">React全家桶课程</a><span>|</span>
      <a href="javascript:;">微信支付专项课程(H5+小程序+Node+Mongo)</a>
    </div>
    <div class="copyright">Copyright © 2019 <span class="domain">mi.51purse.com</span> All Rights Reserved</div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
.footer {
  height: 234px;
  background-color: $colorB;
  border-top: 4px solid $colorA;
  color: $colorD;
  font-size: $fontI;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      height: 36px;
      width: 53px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: $colorA
    }
  }
}
</style>
