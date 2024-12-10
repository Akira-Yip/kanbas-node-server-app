// // import * as assignmentsDao from "./dao.js";
// // export default function AssignmentRoutes(app) {
// //   app.put("/api/assignments/:assignmentId", (req, res) => {
// //     const { assignmentId } = req.params;
// //     const assignmentUpdates = req.body;
// //     assignmentsDao.updateModule(assignmentId, assignmentUpdates);
// //     res.sendStatus(204);
// //   });

// //   app.delete("/api/assignments/:assignmentId", (req, res) => {
// //     const { assignmentId } = req.params;
// //     assignmentsDao.deleteAssignment(assignmentId);
// //     res.sendStatus(204);
// //   });
// // }

// // Assignments/routes.js
// import * as assignmentsDao from "./dao.js";

// export default function AssignmentRoutes(app) {
//   // Existing routes
//   app.put("/api/assignments/:assignmentId", (req, res) => {
//     const { assignmentId } = req.params;
//     const assignmentUpdates = req.body;
//     assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
//     res.sendStatus(204);
//   });

//   app.delete("/api/assignments/:assignmentId", (req, res) => {
//     const { assignmentId } = req.params;
//     assignmentsDao.deleteAssignment(assignmentId);
//     res.sendStatus(204);
//   });

//   // New route: Get assignments for a course
//   app.get("/api/courses/:courseId/assignments", (req, res) => {
//     const { courseId } = req.params;
//     const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
//     res.json(assignments);
//   });

//   // New route: Create a new assignment for a course
//   app.post("/api/courses/:courseId/assignments", (req, res) => {
//     const { courseId } = req.params;
//     const assignment = { ...req.body, course: courseId };
//     const newAssignment = assignmentsDao.createAssignment(assignment);
//     res.json(newAssignment);
//   });

//   // New route: Get a specific assignment by ID
//   app.get("/api/assignments/:assignmentId", (req, res) => {
//     const { assignmentId } = req.params;
//     const assignment = assignmentsDao.findAssignmentById(assignmentId);
//     if (assignment) {
//       res.json(assignment);
//     } else {
//       res.sendStatus(404);
//     }
//   });
// }
import * as dao from "./dao.js";

export default function AssignmentsRoutes(app) {
  // Retrieve assignments for a given course
  app.get("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignments = await dao.findAssignmentsForCourse(cid);
    res.json(assignments);
  });

  // Create a new assignment in a course
  app.post("/api/courses/:cid/assignments", async (req, res) => {
    const { cid } = req.params;
    const assignment = req.body;
    assignment.course = cid;
    const newAssignment = await dao.createAssignment(assignment);
    res.json(newAssignment);
  });

  // Update an existing assignment
  app.put("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(aid, assignmentUpdates);
    res.json(status);
  });

  // Delete an assignment
  app.delete("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const status = await dao.deleteAssignment(aid);
    if (status.deletedCount === 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
  // Add this route to retrieve a single assignment by ID
  app.get("/api/assignments/:aid", async (req, res) => {
    const { aid } = req.params;
    const assignment = await dao.findAssignmentById(aid);
    if (assignment) {
      res.json(assignment);
    } else {
      res.sendStatus(404);
    }
  });
}
