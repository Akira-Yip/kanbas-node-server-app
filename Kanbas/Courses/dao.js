// import Database from "../Database/index.js";
import model from "./model.js";

export function findAllCourses() {
  return model.find();
  // return Database.courses;
}
export function createCourse(course) {
  delete course._id;
  return model.create(course);

  // const newCourse = { ...course, _id: Date.now().toString() };
  // Database.courses = [...Database.courses, newCourse];
  // return newCourse;
}

export function findCoursesForEnrolledUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === userId && enrollment.course === course._id
    )
  );
  return enrolledCourses;
}
export function deleteCourse(courseId) {
  // const { courses, enrollments } = Database;
  // Database.courses = courses.filter((course) => course._id !== courseId);
  // Database.enrollments = enrollments.filter(
  //   (enrollment) => enrollment.course !== courseId
  // );
  return model.deleteOne({ _id: courseId });
}
export function updateCourse(courseId, courseUpdates) {
  const { courses } = Database;
  const course = courses.find((course) => course._id === courseId);
  Object.assign(course, courseUpdates);
  return course;
}
