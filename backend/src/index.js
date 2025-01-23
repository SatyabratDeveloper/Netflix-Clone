import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = process.env.PORT;

app.on("error", (error) => console.log("Express error:", error));
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
