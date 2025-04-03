/**
 * [(lv.3)쿼리-스트링-파싱하기.js]
 *
 * 1) parseQueryString 함수는 "?search=apple&page=2" 형태의 쿼리스트링을 객체로 변환합니다.
 * 2) 값이 없으면 빈 문자열("")로 처리합니다.
 * 3) 쿼리 파라미터가 없거나 빈 문자열인 경우, 빈 객체({})를 반환합니다.
 * 4) 항상 "?"로 시작한다고 가정합니다.
 *
 * @param {string} queryString
 * @returns {object}
 */

function parseQueryString(queryString) {
  if (!queryString || queryString === "?") {
    return {};
  }

  // 2. 맨 앞의 '?' 제거
  const query = queryString.substring(1);

  // 3. 빈 문자열이면 빈 객체 반환
  if (query === "") {
    return {};
  }

  // 4. '&'로 각 파라미터 쌍 분리
  const pairs = query.split("&");

  // 5. 결과 객체 생성
  const result = {};

  // 6. 각 파라미터 쌍을 처리
  pairs.forEach((pair) => {
    // '='로 키와 값 분리
    const [key, value] = pair.split("=");
    // 값이 없으면 빈 문자열로 처리
    result[key] = value || "";
  });

  return result
}

export { parseQueryString };
