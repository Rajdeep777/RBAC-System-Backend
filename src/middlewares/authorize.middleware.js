const authorize = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).send("User not found");
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).send("Access denied for this role");
    }
    next();
  };
};
export default authorize;
