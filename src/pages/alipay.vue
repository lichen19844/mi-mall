<template>
  <div class="order-alipay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from './../components/Loading'
export default {
  name: "alipay",
  components: {
    Loading
  },
  data () {
    return {
      orderId: this.$route.query.orderId,
      content: '',
      loading: true
    }
  },
  mounted () {
    this.paySubmit()
  },
  methods: {
    paySubmit () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName:' Vue高仿小米商城',
        amount: 0.01,//单位元
        payType: 1 //1请求支付宝，2请求微信
      }).then((res) => {
        // 支付宝支付：content是请求支付宝后返回的html源码，渲染到页面上后通过submit提交表单生成支付二维码再自动跳转到支付页面
        // this.content = "<h1>jaja</h1>";
        this.content = res.content;
        setTimeout(() => {
          this.loading = false;
          // 获取表单并提交表单
          document.forms[0].submit();
        }, 100);
      })
    }
  }
};
</script>

<style></style>
