import cookie from "cookie";
const handler = async (req, res) => {
  const { method } = req;
  if (method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json({ message: "erfolgreich" });
    } else {
      res.status(400).json({ message: "Falsche Anmeldeinformationen" });
    }
  }
  if (method === "PUT") {
        res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.ADMIN_TOKEN, {
          maxAge: -1,
          path: "/",
        })
      );
      res.status(200).json({ message: "erfolgreich" });
    
  }
};
export default handler
