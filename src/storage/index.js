/**
 * storage封装
 */

const STORAGE_KEY = 'mall';

export default {

  // 获取整个数据，假设浏览器已有的缓存信息是
  // key: mall    value: { "user": { "username": "jack", "age": 18, "sex": 1 } }
  // 在别的文件里 import storage from './storage'
  //            storage.setItem('a',1);
  //            storage.setItem('b',{a:1});
  //            storage.setItem('c',10,'b');
  //            this.a = storage.getItem('b');
  //            storage.clear('a');
  //            storage.clear('a', 'b');

  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },

  // 存储值
  setItem(key, value, module_key) {
    if (module_key) {
      let val = this.getItem(module_key);
      val[key] = value;
      this.setItem(module_key, val);
    } else {
      // 需要知道storage存的数据结构
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
  },

  // 提取值，针对{ "user": { "username": "jack", "age": 18, "sex": 1 } }
  // 一级key是user，返回user的值
  // 二级key是username
	getItem(key, module_key) {
    if (module_key) {
      let val = this.getItem(module_key) // 开始递归，getItem('user') 返回{ "username": "jack", "age": 18, "sex": 1 }
      if (val) return val[key] // 这里的key是'username',返回'jack'
    }
    // 需要知道数据结构
    return this.getStorage()[key]
  },

  // 清空某一个值
  clear(key, module_key) {
    let val = this.getStorage();
    if (module_key) {
      delete val[module_key][key]
    } else {
      delete val[key]
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}
