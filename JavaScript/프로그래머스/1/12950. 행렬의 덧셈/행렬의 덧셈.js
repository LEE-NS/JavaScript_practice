function solution(arr1, arr2) {
    const m = arr1.length
    const n = arr1[0].length
    const d0 = []
    
    for(let i = 0; i < m; i++) {
        const d1 = [];
        for(let j = 0; j < n; j++) {
            d1.push(arr1[i][j] + arr2[i][j])
        }
        d0.push(d1)
    }
    
    return d0;
}