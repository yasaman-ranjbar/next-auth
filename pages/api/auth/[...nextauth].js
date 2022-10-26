import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.SECRET_JWT,
  },

  callbacks: {
    // when used our session is checked
    async session({ session, user, token }) {
      return session;
    },

    // when used jwt is created and updated
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
export default NextAuth(authOptions);
