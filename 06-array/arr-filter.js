let marks = [45, 60, 85, 90, 22, 83, 98];
// let marks2  = marks.filter( n => n >= 80);
let marks2 = myFilter(marks);
console.log(marks2);

function myFilter(marks) {
    let newMarks = [];
    for (const mark of marks) {
        if (mark >= 80) {
            newMarks.push(mark);
        }
    }
    return newMarks;
}