/**
 * vuex设置的方法
 */

export default {
  saveUserName (state, username) {
    state.stateInfo.username = username
  },
  saveCartCount (state, cartCount) {
    state.stateInfo.cartCount = cartCount
  }
}