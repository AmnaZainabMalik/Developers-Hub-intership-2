
require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");

const app = express();

// ===============================
// Middleware
// ===============================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ===============================
// Helmet Security Headers
// ===============================

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:"],
      },
    },
  })
);

// ===============================
// HSTS (HTTPS Enforcement)
// ===============================

app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  })
);

// ===============================
// Secure CORS Configuration
// ===============================

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// ===============================
// Rate Limiting
// ===============================

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(limiter);

// ===============================
// CSRF Protection
// ===============================

const csrfProtection = csrf({
  cookie: true,
});

app.use(csrfProtection);

// ===============================
// API Key Authentication
// ===============================

const apiKeyAuth = (req, res, next) => {
  const apiKey = req.header("x-api-key");

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid API Key",
    });
  }

  next();
};

// ===============================
// Routes
// ===============================

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Secure API Running Successfully",
  });
});

// CSRF Token Route
app.get("/csrf-token", (req, res) => {
  res.json({
    csrfToken: req.csrfToken(),
  });
});

// Protected API Route
app.get("/secure-data", apiKeyAuth, (req, res) => {
  res.json({
    success: true,
    data: "This is protected data.",
  });
});

// Login Route Example
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Example only
  if (username === "admin" && password === "password123") {
    return res.json({
      success: true,
      message: "Login successful",
    });
  }

  console.log(
    `Failed login attempt from IP: ${req.ip} | Username: ${username}`
  );

  res.status(401).json({
    success: false,
    message: "Invalid credentials",
  });
});

// Error Handler
app.use((err, req, res, next) => {
  if (err.code === "EBADCSRFTOKEN") {
    return res.status(403).json({
      success: false,
      message: "Invalid CSRF Token",
    });
  }

  next(err);
});

// ===============================
// Start Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
