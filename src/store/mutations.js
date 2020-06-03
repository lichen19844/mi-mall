/**
 * vuex设置的方法
 */

export default {
  saveUserName (state, username) {
    state.username = username
  },
  saveCartCount (state, cartCount) {
    state.cartCount = cartCount
  }
}