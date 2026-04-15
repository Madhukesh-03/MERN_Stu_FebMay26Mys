const readline = require('readline');

const courses = require('./data/courses');
const { enrollCourse, enrolledCourses, getUserEnrollments } = require('./modules/enroll');
const { completeLesson, getProgress } = require('./modules/progress');

// CLI setup
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    // console.log("=== LMS CLI ===");

    const userName = await askQuestion("Enter your name: ");
    console.log(`Welcome ${userName}!\n`);

    while (true) {
        console.log(`
1. View Courses
2. Enroll in Course
3. My Courses
4. Complete Lesson
5. View Progress
6. Exit
`);

        const choice = await askQuestion("Choose: ");

        switch (choice) {

            // View courses
            case "1":
                console.log("\nAvailable Courses:");
                courses.forEach(c => {
                    console.log(`${c.id}. ${c.title}`);
                });
                break;

            // Enroll
            case "2":
                const id = await askQuestion("Enter Course ID: ");
                const course = courses.find(c => c.id == id);

                if (!course) {
                    console.log("Invalid Course ID");
                    break;
                }

                try {
                    const msg = await enrollCourse(userName, course);
                    console.log(msg);
                } catch (err) {
                    console.log(err);
                }
                break;

            //  My courses
            case "3":
                const myCourses = getUserEnrollments(userName);

                if (myCourses.length === 0) {
                    console.log("No enrolled courses");
                } else {
                    console.log("\nMy Courses:");
                    myCourses.forEach(c => {
                        console.log(`- ${c.title}`);
                    });
                }
                break;

            case "4":
                const cId = await askQuestion("Enter Course ID: ");
                const lesson = await askQuestion("Enter Lesson Name: ");

                try {
                    const msg = await completeLesson(enrolledCourses, userName, Number(cId), lesson);
                    console.log(msg);
                } catch (err) {
                    console.log(err);
                }
                break;

            case "5":
                const progress = getProgress(enrolledCourses, userName);

                if (progress.length === 0) {
                    console.log("No enrolled courses");
                } else {
                    console.log("\nYour Progress:");
                    progress.forEach(p => {
                        console.log(`
Course: ${p.title}
Completed: ${p.completedLessons.join(", ") || "None"}
Pending: ${p.pendingLessons}
Progress: ${p.progress}
`);
                    });
                }
                break;


            //  Exit
            case "5":
                console.log("Goodbye!");
                rl.close();
                return;

            default:
                console.log("Invalid choice");
        }
    }
}

main();