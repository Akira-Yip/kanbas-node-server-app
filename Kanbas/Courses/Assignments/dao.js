// import Database from "../../Database/index.js";

// export function findAssignmentById(assignmentId) {
//   const { assignments } = Database;
//   return assignments.find((assignment) => assignment._id === assignmentId);
// }
// export function updateAssignment(assignmentId, assignmentUpdates) {
//   const { assignments } = Database;
//   const assignment = assignments.find(
//     (assignment) => assignment._id === assignmentId
//   );
//   Object.assign(assignment, assignmentUpdates);
//   return assignment;
// }
// export function deleteAssignment(assignmentId) {
//   const { assignments } = Database;
//   Database.assignments = assignments.filter(
//     (assignment) => assignment._id !== assignmentId
//   );
// }

// export function createAssignment(assignment) {
//   const newAssignment = { ...assignment, _id: Date.now().toString() };
//   Database.assignments = [...Database.assignments, newAssignment];
//   return newAssignment;
// }

// export function findAssignmentsForCourse(courseId) {
//   const { assignments } = Database;
//   return assignments.filter((assignment) => assignment.course === courseId);
// }

import model from "./model.js";

// Find all assignments for a specific course
export function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}

// Create a new assignment for a course
export function createAssignment(assignment) {
  delete assignment._id;
  return model.create(assignment);
}

// Update an existing assignment
export function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
}

// Delete an existing assignment
export function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
}
export function findAssignmentById(assignmentId) {
  return model.findById(assignmentId);
}
