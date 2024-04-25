import jwt from "jsonwebtoken";
const { JWT_SECRET } = process.env;

export const managerMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token === null) return res.status(401).json({ message: "no token" });
    const decoded = jwt.decode(token, JWT_SECRET);
    if (!decoded || decoded?.role !== "manager")
      return res.status(400).json({ message: "no user" });
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
