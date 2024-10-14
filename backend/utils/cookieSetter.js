import jwt from "jsonwebtoken"

export const setCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    })
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "none",
        maxAge: 30 * 24 * 3600 * 1000,
        path: "/",
        domain: "batuaa.onrender.com"
    })
}