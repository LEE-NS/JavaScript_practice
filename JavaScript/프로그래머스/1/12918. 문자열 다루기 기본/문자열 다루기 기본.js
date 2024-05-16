function solution(s) {
    if ((s.length === 4 || s.length === 6) && !s.includes("e")) {
        if(!isNaN(+s)) {
            return true
        }
    }
    return false
}