// Array of student objects
const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 42 },
    { name: "Charlie", marks: 65 },
    { name: "David", marks: 58 },
    { name: "Eve", marks: 90 }
  ];
  
  // 1. Filter students who scored more than 60 marks
  const filteredStudents = students.filter(student => student.marks > 60);

  // Filter students whose name starts with 'A'
  // const filteredStudents = students.filter(student => student.name.startsWith('A'));

  
  // 2. Calculate the average marks of the filtered students
  const averageMarks = filteredStudents.reduce((sum, student) => sum + student.marks, 0) / filteredStudents.length;
  // Print the original array
  console.log("Original Students:", students);
  
  // Print the filtered array
  console.log("Filtered Students (marks > 60):", filteredStudents);
  
  // Print the calculated average marks
  console.log("Average Marks of Filtered Students:", averageMarks.toFixed(2));
  


  const studentMarks1 = [50,40,30,35,20,34];
  const totalMarks1 = studentMarks1.reduce( (sum, mark) => sum + mark, 0);
  const avgMarks1 = Math.round(totalMarks1/studentMarks1.length);
  console.log(avgMarks1);

  const studentMarks2 = [80,70,90,95,85,70];
  const totalMarks2 = studentMarks2.reduce( (sum, mark) => sum + mark, 0);
  const avgMarks2 = (totalMarks2/studentMarks2.length).toFixed();

  console.log(avgMarks2);