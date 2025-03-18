import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectionToDb } from "./utils";
import { User } from './models';
import { authConfig } from './auth.config';

const login = async (credentials) => {
  try {
    connectionToDb();
    const user = await User.findOne({ phone: credentials.username })
    if (!user) throw new Error("用户名不存在");

    const isPasswordCorrect = await user.comparePassword(credentials.password);

    if (!isPasswordCorrect) throw new Error("密码错误");

    return user;
  } catch (error) {
    throw new Error("登录失败");
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize (credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    ...authConfig.callbacks
  }
})
