function getListStudents() {
  return [
    { id: 1, firstName: "Guillaume", location: "San Francisco" },
    { id: 2, firstName: "James", location: "Columbia" },
    { id: 5, firstName: "Serena", location: "San Francisco" },
  ];
}
function getListStudentIds(arrayObjects) {
  if (Array.isArray(arrayObjects)) {
    return arrayObjects.map((student) => student.id);
  }
  return [];
}

function getStudentsByLocation(arrayObjects, city) {
  return arrayObjects.filter((student) => student.location === city);
}

function getStudentIdsSum(arrayObjects) {
  return arrayObjects.reduce((sum, student) => sum + student.id, 0);
}

function updateStudentGradeByCity(students, city, newGrades) {
  // Get students from the specified city
  const studentsInCity = students.filter(
    (student) => student.location === city
  );
  // Combine student and matching grade (or set N/A)
  return studentsInCity.map((student) => {
    const matchingGrade = newGrades.find(
      (grade) => grade.studentId === student.id
    );
    return {
      ...student, // Spread existing student properties
      grade: matchingGrade?.grade ?? "N/A", // Use grade if found, otherwise "N/A"
    };
  });
}

function createInt8TypedArray(length, position, value) {}

console.log("Hello");
const students = getListStudents();
console.log(students);
console.log(students.length);
console.log(getListStudentIds("hello"));
console.log(getListStudentIds(students));
console.log(getStudentsByLocation(students, "San Francisco"));
console.log(getStudentIdsSum(students));

console.log(
  updateStudentGradeByCity(students, "San Francisco", [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 },
  ])
);

console.log(
  updateStudentGradeByCity(students, "San Francisco", [
    { studentId: 5, grade: 97 },
  ])
);
