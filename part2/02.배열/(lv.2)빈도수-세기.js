/**
 * [(lv.2)빈도수 세기.js]
 *
 * 1) getFrequency(arr)는 주어진 배열 내 요소들의 등장 횟수를 객체로 반환합니다.
 *    예: getFrequency(["apple", "banana", "apple"]) -> { apple: 2, banana: 1 }
 * 2) reduce, forEach 등을 이용할 수 있습니다.
 * 3) 문자열, 숫자 등 어떤 타입이든 동작하도록 처리하세요.
 *
 * @param {any[]} arr
 * @returns {object} - key: 원소 값, value: 등장 횟수
 */

// TODO: 함수를 작성하세요.
function getFrequency(arr) {
    let newArr = new Map();
    arr.forEach((a) => {
        newArr.set(a, (newArr.get(a) || 0) + 1) // 초기값을 0으로 설정
    })
    return Object.fromEntries(newArr);  //키값쌍의 목록 객체로 변경
}


// export 를 수정하지 마세요.
export { getFrequency };
