// import * as assignmentsDao from "./dao.js";
// export default function AssignmentRoutes(app) {
//   app.put("/api/assignments/:assignmentId", (req, res) => {
//     const { assignmentId } = req.params;
//     const assignmentUpdates = req.body;
//     assignmentsDao.updateModule(assignmentId, assignmentUpdates);
//     res.sendStatus(204);
//   });

//   app.delete("/api/assignments/:assignmentId", (req, res) => {
//     const { assignmentId } = req.params;
//     assignmentsDao.deleteAssignment(assignmentId);
//     res.sendStatus(204);
//   });
// }

// Assignments/routes.js
import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  // Existing routes
  app.put("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.sendStatus(204);
  });

  app.delete("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    assignmentsDao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  });

  // New route: Get assignments for a course
  app.get("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });

  // New route: Create a new assignment for a course
  app.post("/api/courses/:courseId/assignments", (req, res) => {
    const { courseId } = req.params;
    const assignment = { ...req.body, course: courseId };
    const newAssignment = assignmentsDao.createAssignment(assignment);
    res.json(newAssignment);
  });

  // New route: Get a specific assignment by ID
  app.get("/api/assignments/:assignmentId", (req, res) => {
    const { assignmentId } = req.params;
    const assignment = assignmentsDao.findAssignmentById(assignmentId);
    if (assignment) {
      res.json(assignment);
    } else {
      res.sendStatus(404);
    }
  });
}
