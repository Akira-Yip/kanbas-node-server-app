const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  due: "2021-10-10",
  completed: false,
  score: 0,
};

const moduleObject = {
  id: "101",
  name: "Web Development",
  description: "Learn modern web development techniques",
  course: "CS101",
};

export default function WorkingWithObjects(app) {
  // Route to get the assignment object
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });

  // Route to get assignment title
  app.get("/lab5/assignment/title", (req, res) => {
    res.json({ title: assignment.title });
  });

  // Route to update assignment title
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment);
  });

  // Route to update assignment score
  app.get("/lab5/assignment/score/:newScore", (req, res) => {
    const { newScore } = req.params;
    assignment.score = parseInt(newScore, 10);
    res.json(assignment);
  });

  // Route to update assignment completed status
  app.get("/lab5/assignment/completed/:status", (req, res) => {
    const { status } = req.params;
    assignment.completed = status === "true";
    res.json(assignment);
  });

  // Route to get the module object
  app.get("/lab5/module", (req, res) => {
    res.json(moduleObject);
  });

  // Route to get module name
  app.get("/lab5/module/name", (req, res) => {
    res.json({ name: moduleObject.name });
  });

  // Route to update module name
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    moduleObject.name = newName;
    res.json(moduleObject);
  });

  // Route to update module description
  app.get("/lab5/module/description/:newDescription", (req, res) => {
    const { newDescription } = req.params;
    moduleObject.description = newDescription;
    res.json(moduleObject);
  });
}
