function solution(arr, divisor) {
    let answer = arr.filter(elem => {
        if(elem % divisor === 0) {
            return elem
        };
    });
    if(answer.length === 0) {
        answer.push(-1)
    } else {
        for(let i = 0; i < answer.length; i++) {
            for(let j = i; j < answer.length; j++) {
                if(answer[i] > answer[j]) {
                    let temp = answer[i];
                    answer[i] = answer[j];
                    answer[j] = temp;
                };
            }
        }
    }
    return answer;
}