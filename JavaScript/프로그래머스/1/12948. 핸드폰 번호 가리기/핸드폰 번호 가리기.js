function solution(phone_number) {
    let hide = '';
    for(let i = 0; i < phone_number.length - 4; i++) {
        hide += '*'
    };
    const answer = hide + phone_number.slice(-4);
    return answer;
}