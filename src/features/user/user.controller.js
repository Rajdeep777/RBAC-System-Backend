import bcrypt from "bcryptjs";
import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";
import UserRepository from "./user.repository.js";
class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async register(req, res, next) {
    const { username, email, password, role } = req.body;
    // Validate password before proceeding
    const validPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
    if (!validPassword.test(password)) {
      return res
        .status(400)
        .send(
          "Password must be 8-12 characters long, include at least one uppercase letter, one lowercase letter, and one special character."
        );
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new UserModel(username, email, hashedPassword, role);
      await this.userRepository.register(user);
      res.status(201).send(user);
    } catch (error) {
      next(error);
    }
  }
  async login(req, res) {
    try {
      // 1. Find user by email
      const user = await this.userRepository.findByEmail(req.body.email);
      if (!user) {
        res.status(400).send("Invalid Credentials");
      } else {
        // 2. Compare password with hashed password
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
          // 3. Create token
          const token = jwt.sign(
            {
              userID: user._id,
              email: user.email,
              role: user.role,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          // 4. send token
          return res.status(200).send(token);
        } else {
          return res.status(400).send("Incorrect Credentials");
        }
      }
    } catch (error) {
      return res.status(500).send("Somthing went wrong");
    }
  }
}
export default UserController;
