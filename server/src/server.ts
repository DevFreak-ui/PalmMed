import express from "express";
import { Database } from "./database/postgres";
import routes from "./routes";
import helmet from "helmet";
import userSchema from "./Models/user.model";
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.use(helmet());
app.use(routes);

const db = new Database();
db.defineModel("Users", userSchema);
// Synchronize the models with the database
(async () => {
  await db.syncModels();
})();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
