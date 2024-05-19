function solution(n, m) {
    const answer = [];
    const gcf = [];
    const lcm = [];
    
    if(n === m) {
        answer.push(n);
        answer.push(m);
        return answer
    }
    
    if(n < m) {
        for(let i = 1; i <= m; i++) {
            if(n % i === 0 && m % i === 0) {
                gcf.push(i)
            }
        }
        for(let i = n; i <= n * m; i++) {
            if(i % n === 0 && i % m === 0) {
                lcm.push(i)
            }
        }
    }
    
    if(n > m) {
        for(let i = 1; i <= n; i++) {
            if(n % i === 0 && m % i === 0) {
                gcf.push(i)
            }
        }
        for(let i = m; i <= n * m; i++) {
            if(i % n === 0 && i % m === 0) {
                lcm.push(i)
            }
        }    
    }
    
    answer.push(Math.max(...gcf))
    answer.push(Math.min(...lcm))
     
    return answer;
}