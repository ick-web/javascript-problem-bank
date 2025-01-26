/**
 * [(lv.2)객체와-loop.js]
 *
 * countProperties 함수를 작성하세요:
 * - 파라미터 obj
 * - for...in 루프를 사용하여 obj 객체의 소유 키 개수를 반환하세요.
 *
 * @param {object} obj
 * @returns {number}
 */
function countProperties(obj) {
  if (Object.keys(obj).length === 0) {
    return 0;
  }
  let count = 0;
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      count++;
    }
  }
  return count;
}

export { countProperties };
