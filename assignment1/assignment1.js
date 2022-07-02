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

const gradeOfAllStudents = studentObjects.map((student) => {
	return student.courses.reduce((sum, course) => sum = sum + course.grade, 0);
});

const totalGradesOfStudents = gradeOfAllStudents.reduce((sum, current) => sum = sum + current, 0);

// Individual Student Average
const individualStudentAverage = studentObjects.map((student) => {
	return student.courses.reduce((sum, course) => sum = sum + course.grade, 0) / student.courses.length;
});

// Overall Class Grade
const overallGradeOfClass = totalGradesOfStudents / studentObjects.map(item => item.courses).flat().length;

console.log(totalGradesOfStudents, "Total Grades Of Students");

console.log(individualStudentAverage, "Individual Student Average");

console.log(overallGradeOfClass, "Overall Grade Of Class");