process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const arr = [];
    for(let j = 0; j < a; j++) {
         arr.push('*')
    }
    const str = arr.join('')
    for(let i = 0; i < b; i++) {
        console.log(
            str
        )   
    }
});