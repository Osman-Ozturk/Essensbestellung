import dbConnect from "@/util/dbConnect.js";
import User from "@/models/UserModel.js";
import bcrypt from "bcrypt";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await dbConnect();
      const body = req.body;
      const user = await User.findOne({ email: body.email });
      if (user) {
        res.status(404).json("User existiert bereits");
        return;
      }
      const newUser = await User.create(req.body);
      const salt = await bcrypt.genSalt(10)
      newUser.password = await bcrypt.hash(newUser.password, salt);
      newUser.confirmPassword = await bcrypt.hash(
        newUser.confirmPassword,
        salt
      );
      await newUser.save();
      res.status(201).json({ success: true, data: newUser });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false });
  }
}
