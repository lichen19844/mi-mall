/**
 * vuex设置的触发方法
 */

export default {
  saveUserName (context, username) {
    context.commit('saveUserName', username)
  },
  saveCartCount (context, cartCount) {
    context.commit('saveCartCount', cartCount)
  }
}