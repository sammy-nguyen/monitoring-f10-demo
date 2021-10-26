const express = require("express");
const path = require("path");
const Rollbar = require("rollbar");




let rollbar = new Rollbar({
  accessToken: "5b23a0aec9ae427db1a3d6da67dfd333",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const app = express();
app.use(express.json())


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
  rollbar.info("html file served successfully");
});




let students = []
app.post('/api/student', (rep,res) => {
    let {name} = req.body
    name = name.trim()

    students.push(name)
    rollbar.log('Student added successfully', {author:'Sam', type: 'manual entry'})
    res.status(200).send(students)

})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`take us to warp ${port}!`));
