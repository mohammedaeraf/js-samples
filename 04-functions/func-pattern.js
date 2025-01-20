function printPattern(numLines, char){
    let str = '';
    for (let i = 0; i < numLines; i++) {
        str = str + char;
        console.log(str);
    }
}

printPattern(5,3);

