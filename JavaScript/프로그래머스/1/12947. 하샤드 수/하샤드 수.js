function solution(x) {
    let answer = null;
    let arr = String(x).split("");
    let sum = 0;
    arr.forEach(elem => sum += elem*1)
    x % sum ? answer = false : answer = true; 
    return answer;
}