// Enrollments/dao.js
import Database from "../Database/index.js";

export function enrollUserInCourse(userId, courseId) {
  const newEnrollment = {
    _id: Date.now().toString(),
    user: userId,
    course: courseId,
  };
  Database.enrollments.push(newEnrollment);
  return newEnrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  Database.enrollments = Database.enrollments.filter(
    (enrollment) =>
      !(enrollment.user === userId && enrollment.course === courseId)
  );
}

export function findEnrollmentsForUser(userId) {
  return Database.enrollments.filter(
    (enrollment) => enrollment.user === userId
  );
}

export function findEnrollmentsForCourse(courseId) {
  return Database.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
}
