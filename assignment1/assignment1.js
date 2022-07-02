console.log('script has been loaded');
// QUESTIONS:
// How can we calculate 
// 1. individual grade 175/2  
// 2. overall class grade 345/4

// Solution code:
const studentsReports = `[
	{
		"name": "John",
		"age": 21,
		"courses": [
			{
				"name": "JavaScript",
				"grade": 90
			},
			{
				"name": "Database",
				"grade": 85
			}
		]
	},
	{
		"name": "Alice",
		"age": 20,
		"courses": [
			{
				"name": "JavaScript",
				"grade": 92
			},
			{
				"name": "Database",
				"grade": 80
			}
		]
	}
]`;

const studentObjects = JSON.parse(studentsReports);

console.log(studentObjects, "STUDENT OBJECT");

const AllStudentsGrade = studentObjects.map((student) => {
	return student.courses.reduce((sum, course) => sum = sum + course.grade, 0);
});

const totalGradesOfStudents = AllStudentsGrade.reduce((sum, current) => sum = sum + current, 0);

// Individual Student Average
const individualStudentAverage = studentObjects.map((student) => {
	return student.courses.reduce((sum, course) => sum = sum + course.grade, 0) / student.courses.length;
});

// Overall Class Grade
const overAllClassGrade = totalGradesOfStudents / studentObjects.map(item => item.courses).flat().length;

console.log(totalGradesOfStudents, "totalGradesOfStudents");

console.log(individualStudentAverage, "individualStudentAverage");

console.log(overAllClassGrade, "overAllClassGrade");