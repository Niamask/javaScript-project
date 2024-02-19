// // 0. Basic list of objects
// function getListStudents() {
//   return [
//     { id: 1, firstName: "Guillaume", location: "San Francisco" },
//     { id: 2, firstName: "James", location: "Columbia" },
//     { id: 5, firstName: "Serena", location: "San Francisco" },
//   ];
// }
// console.log(getListStudents());
// const students = getListStudents();

// // 1. More mapping
// function getListStudentIds(listObject) {
//   if (!Array.isArray(listObject) || !listObject) {
//     return [];
//   }
//   return listObject.map((studentId) => (studentId = studentId.id));
// }
// console.log(getListStudentIds("hello"));
// console.log(getListStudentIds(students));

// // 2. Filter
// function getStudentsByLocation(std, city) {
//   return std.filter((obj) => obj.location === city);
// }
// console.log(getStudentsByLocation(students, "San Francisco"));

// // 3. Reduce
// function getStudentIdsSum(listObject) {
//   if (!Array.isArray(listObject) || !listObject) return [];

//   return listObject.reduce((sum, obj) => sum + obj.id, 0);
// }
// console.log(getStudentIdsSum(students));

// // 4. Combine
// function updateStudentGradeByCity(students, city, newGrades) {
//   if (!Array.isArray(students) || !students) return [];

//   return students
//     .filter((obj) => obj.location === city)
//     .map((obj) => ({
//       ...obj,
//       grade:
//         newGrades
//           .filter((g) => g.studentId === obj.id)
//           .map((g) => g.grade)[0] || "N/A",
//     }));
// }

// console.log(
//   updateStudentGradeByCity(getListStudents(), "San Francisco", [
//     { studentId: 5, grade: 97 },
//     { studentId: 1, grade: 86 },
//   ])
// );

// console.log(
//   updateStudentGradeByCity(getListStudents(), "San Francisco", [
//     { studentId: 5, grade: 97 },
//   ])
// );

// 0. Basic list of objects
function getListStudents(params) {
  return [
    {
      id: 1,
      firstName: "Guillaume",
      location: "San Francisco",
    },
    {
      id: 2,
      firstName: "James",
      location: "Columbia",
    },
    {
      id: 5,
      firstName: "Serena",
      location: "San Francisco",
    },
  ];
}

const students = getListStudents();
console.log(students);

// 1. More mapping
function getListStudentIds(ArrayObject) {
  if (!Array.isArray(ArrayObject) || !ArrayObject) return [];

  return ArrayObject.map((obj) => obj.id);
}

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

// 2. Filter
function getStudentsByLocation(listStudents, city) {
  if (!Array.isArray(listStudents) || !listStudents) return [];

  return listStudents.filter((obj) => obj.location === city);
}
console.log(getStudentsByLocation(students, "San Francisco"));

// 3. Reduce
function getStudentIdsSum(listStudents) {
  if (!Array.isArray(listStudents) || !listStudents) return [];

  return listStudents.reduce((sum, obj) => (sum += obj.id), 0);
}
const value = getStudentIdsSum(students);

console.log(value);

// 4. Combine
function updateStudentGradeByCity(listStudents, city, newGrade) {
  if (!Array.isArray(listStudents) || !listStudents) return [];

  return listStudents
    .filter((obj) => obj.location === city)
    .map((obj) => ({
      ...obj,
      grade:
        newGrade.filter((f) => f.studentId === obj.id).map((g) => g.grade)[0] ||
        "N/A",
    }));
}

console.log(
  updateStudentGradeByCity(getListStudents(), "San Francisco", [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 },
  ])
);

console.log(
  updateStudentGradeByCity(getListStudents(), "San Francisco", [
    { studentId: 5, grade: 97 },
  ])
);

// 6. Set data structure
function setFromArray(array) {
  return new Set(array);
}
console.log(setFromArray([12, 32, 15, 78, 98, 15]));

// 7. More set data structure
function hasValuesFromArray(set, array) {}
