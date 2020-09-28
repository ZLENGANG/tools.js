/*
 * @Author: 曾浪
 * @Date: 2020-09-28 23:38:10
 * @LastEditTime: 2020-09-29 00:36:23
 * @LastEditors: Please set LastEditors
 * @Description: 工具函数
 * @FilePath: \tool.js\array\array.js
 */
export const myArray = {
  /**
   * @description: 将数组切割成n等分
   * @param {type} (Array,Number)
   * @return {type} Array
   */
  sliceArr (arr = [], size = 0) {
    if (!Array.isArray(arr)) return '请输入正确的数组'
    let result = []
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
      let start = i * size
      let end = i * size + size
      result.push(arr.slice(start, end))
    }
    return result
  },

  /**
   * @description: 数组扁平化（多维数组转为一维数组）
   * @param {type} Array
   * @return {type} Array
   */
  manyD2OneD (arr = []) {
    let arr1 = (arr + '').split(',');
    let arr2 = arr1.map(function (x) {
      return Number(x);
    });
    return arr2;
  }
}