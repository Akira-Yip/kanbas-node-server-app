import mongoose from "mongoose";
import assignmentsSchema from "./schema.js";

const assignmentsModel = mongoose.model("AssignmentModel", assignmentsSchema);
export default assignmentsModel;
