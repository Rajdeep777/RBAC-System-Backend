import express from "express";
import swagger, { serve } from "swagger-ui-express";
import apiDocs from "./swagger.json" with { type: "json" };
import userRouter from "./src/features/user/user.routes.js";
import connectUsingMongoose from "./config/mongooseConfig.js";
import resourceRouter from "./src/features/resource/resourse.routes.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
const server = express();
const PORT = process.env.PORT || 8000;
server.use(express.json());
// API Documentation
server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
// For all requests related to users, redirect to user routes
server.use("/api/users", userRouter);
// For all requests related to resources, redirect to resource routes
server.use('/api/resources', jwtAuth, resourceRouter)
server.get('/', (req, res) => {
  res.send(`Welcome to Role-based access control system <a href=${process.env.API}>Test RBAC-System</a>`)
})
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectUsingMongoose();
});
