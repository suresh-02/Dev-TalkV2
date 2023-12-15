import express from "express";
import authRoutes from "../routes/auth.routes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
import { sequelize } from "./db";

app.listen(8080, () => {
  console.log("connection established..!");
});

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

//? routes
app.use("/users", authRoutes);
app.use("/register", authRoutes);
app.use("/login", authRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
