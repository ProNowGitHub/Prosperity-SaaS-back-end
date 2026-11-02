const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Comma-separated list of allowed origins; "*" allows any (fine for a scaffold).
const allowed = (process.env.CORS_ORIGIN || "*").split(",").map((s) => s.trim());
app.use(cors({ origin: allowed.includes("*") ? "*" : allowed }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ service: "saas-backend", status: "ok" });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/hello", (_req, res) => {
  res.json({
    message: "Hello from the Render backend!",
    time: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
