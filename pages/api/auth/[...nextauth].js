import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/UserModel.js";
import dbConnect from "@/util/dbConnect.js";
import bcrypt from "bcrypt"


dbConnect()
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text",placeholder:"jsmith"},
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error("Sie haben sich noch nicht registriert!");
        }
        if (user) {
          return signInUser({ user, password });
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  database:process.env.MONGODB_URI,
  secret:"secret"
};
const signInUser =async ({user,password})=>{
  const isMatch = await bcrypt.compare(password,user.password )
  if (!isMatch) {
    throw new Error("falches password")
  }
  return user
}

export default NextAuth(authOptions);
