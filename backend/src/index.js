import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config();

const PORT = process.env.PORT;

// Connect to MongoDB and start the Express server.
connectDB()
  .then(() => {
    app.on("error", (error) => console.log("Express error:", error));
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  })
  .catch((error) => console.log("MongoDB connection failed:", error));
