/**
 * [(lv.4)복잡한-데이터-필터링.js]
 *
 * filterComplexData 함수는 아래 형태의 복잡한 객체 배열을 입력받습니다:
 * [
 *   {
 *     id: 1,
 *     tags: ["React", "JavaScript"],
 *     info: { likes: 100, active: true },
 *   },
 *   {
 *     id: 2,
 *     tags: ["Node.js", "TypeScript"],
 *     info: { likes: 50, active: false },
 *   },
 *   ...
 * ]
 *
 * 두 번째 파라미터로 조건 객체(conditions)를 받습니다.
 * 조건 객체의 키는 'tags'처럼 배열 요소를 요구할 수도 있고,
 * "info.active"처럼 중첩된 프로퍼티를 '.' 문법으로 가리킬 수도 있습니다.
 *
 * 조건에 맞는 데이터만 필터링하여 반환하세요.
 * - 예: { tags: "JavaScript", "info.active": true }
 *   => tags 배열에 "JavaScript"를 포함하고, info.active가 true 인 요소만 반환
 *
 * @param {{
 *   id: number,
 *   tags: string[],
 *   info: {
 *     likes: number,
 *     active: boolean
 *   }
 * }[]} data
 * @param {Object} conditions
 * @returns {Array}
 */

function filterComplexData(data, conditions) {
  // 중첩된 프로퍼티 값을 가져오는 도우미 함수
  function getNestedProperty(obj, path) {
    // '.' 기준으로 경로를 나누어 배열로 만듦
    const keys = path.split(".");
    // 초기값은 객체 자체
    let value = obj;

    // 각 키를 순회하며 중첩된 값을 찾음
    for (const key of keys) {
      // 해당 키가 없으면 undefined 반환
      if (value === undefined || value === null) {
        return undefined;
      }
      value = value[key];
    }

    return value;
  }

  // 주어진 데이터를 조건에 따라 필터링
  return data.filter((item) => {
    // 모든 조건에 대해 검사
    for (const [key, conditionValue] of Object.entries(conditions)) {
      const itemValue = getNestedProperty(item, key);

      // 배열인 경우 (tags와 같은)
      if (Array.isArray(itemValue)) {
        // 조건값이 배열에 포함되어 있는지 확인
        if (!itemValue.includes(conditionValue)) {
          return false;
        }
      }
      // 일반 값인 경우 (info.active와 같은)
      else if (itemValue !== conditionValue) {
        return false;
      }
    }

    // 모든 조건을 통과한 경우
    return true;
  });
}

export { filterComplexData };
