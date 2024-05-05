function solution(num) {
    let count = 0;
    let answer = null;

    while(count < 500) {
        if(num % 2 === 0 || num === 0) {
            num = num / 2
        } else if(num === 1) {
            num = 1;
            break
        } else {
            num = num * 3 + 1
        }
        count++;
    };
    
    answer = count;
    if(count >= 500) answer = -1 ; 
    
    return answer;
};