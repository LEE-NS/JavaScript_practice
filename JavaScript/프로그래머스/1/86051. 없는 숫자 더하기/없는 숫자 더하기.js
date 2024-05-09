function solution(numbers) {
    let full = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = 0;
    full.forEach(elem => {
        if(!numbers.includes(elem)) answer += elem
    })
    return answer;
}