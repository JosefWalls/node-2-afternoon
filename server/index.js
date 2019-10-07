const express = require("express");
const messages_controller = require("./controllers/messages_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));


app.post("/api/messages", messages_controller.create);
app.get("/api/messages", messages_controller.read);
app.put( "/api/messages/:id", messages_controller.update);
app.delete("/api/messages/:id", messages_controller.delete);

app.listen(3001, () => {
  console.log("Port 3001");
});