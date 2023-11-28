const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const mentorRoutes =require("./routes/mentor.js");
const authRoutes =require("./routes/auth.js");

const app = express();
const port = process.env.PORT || 5001;

/* This is going to allow us to post and get json from our endpoint */
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// enables the server to serve the client app without running it
app.use(express.static(path.join(__dirname, "../client/build")));


app.use("/mentors", mentorRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
