// Enrollments/routes.js
import * as enrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app) {
  // Enroll a user in a course
  app.post("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    const newEnrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(newEnrollment);
  });

  // Unenroll a user from a course
  app.delete("/api/enrollments", (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(204);
  });

  // Get enrollments for a user
  app.get("/api/users/:userId/enrollments", (req, res) => {
    const { userId } = req.params;
    const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  });

  // Get enrollments for a course
  app.get("/api/courses/:courseId/enrollments", (req, res) => {
    const { courseId } = req.params;
    const enrollments = enrollmentsDao.findEnrollmentsForCourse(courseId);
    res.json(enrollments);
  });
}
