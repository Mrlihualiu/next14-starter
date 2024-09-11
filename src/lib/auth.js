import NextAuth from 'next-auth'
import Github from 'next-auth/providers/github'
import { User } from './models';
import { connectionToDb } from './utils';

export const { } = NextAuth({
  providers: [
    Github({
      clentId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks: {
    async signIn ({ user, account, profile }) {
      if (account.provider === 'github') {
        try {
          connectionToDb()
          const user = await User.findOne({ email: profile.email })
          if (!user) {
            const newUser = await User.create({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url
            });

            await newUser.save();
          }

          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }
    }
  },
})
