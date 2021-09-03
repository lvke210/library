/*
 * @Description:各种方法
 * @Author: owen
 * @Date: 2021-09-03 17:16:05
 * @LastEditTime: 2021-09-03 17:20:14
 */

/**
 * 防抖
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
function debounce(fn, delay = 500) {
  let timer = null;
  return function() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

/**
 * 节流
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
function throttle(fn, delay = 500) {
  let flag = true;
  return function() {
    if (flag) {
      setTimeout(() => {
        fn();
        flag = true;
      }, delay);
    }
    flag = false;
  };
}

export { debounce, throttle };
