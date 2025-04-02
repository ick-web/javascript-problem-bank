/**
 * [(lv.3)지정된-key-추출하기.js]
 *
 * 1) pickKeys 함수를 작성하세요.
 * 2) 첫 번째 파라미터 obj에서, 두 번째 파라미터로 받은 배열(keys)에 해당하는 키만 추출한 새 객체를 반환하세요.
 * 3) 존재하지 않는 키는 무시하며, obj의 다른 키는 포함되지 않아야 합니다.
 *    - 예) pickKeys({ a:1, b:2, c:3 }, ["b", "d"]) => { b:2 }
 *
 * @param {object} obj
 * @param {string[]} keys
 * @returns {object}
 */

function pickKeys(obj, keys) {
  // 결과를 저장할 새 객체 생성
  const result = {};

  // keys 배열의 각 키에 대해 반복
  for (const key of keys) {
    // 키가 obj에 존재하는 경우에만 result에 추가
    if (key in obj) {
      result[key] = obj[key];
    }
  }

  return result;
}

// export 를 수정하지 마세요.
export { pickKeys };
