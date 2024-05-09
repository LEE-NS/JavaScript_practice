function solution(arr) {
    let answer = null;
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    arr.length > 0 ? answer = arr : answer = [-1];
    return answer;
}