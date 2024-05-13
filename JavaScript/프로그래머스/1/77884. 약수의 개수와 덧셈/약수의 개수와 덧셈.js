function solution(left, right) {
    let arr = [];
    for(let i = left; i <= right; i++) {
        arr.push(i);
    }
    let answer = arr.reduce((acc, cur) => {
        let curArr = [];
        for(let i = 1; i <= cur; i++) {
            if(cur % i === 0) {
                curArr.push(i)
            }
        }
        if(curArr.length % 2 === 0) {
            return acc + cur
        } else {
            return acc - cur
        }
    }, 0) 
    return answer;
};