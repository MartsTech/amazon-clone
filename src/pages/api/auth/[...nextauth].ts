import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { db, auth } from "configs/firebase";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Sign In",
      credentials: {
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { email, password } = credentials;

        const res = await auth.signInWithEmailAndPassword(email, password);

        if (!res.user?.emailVerified) {
          try {
            auth.currentUser?.sendEmailVerification();
          } catch (error) {
            throw new Error("Email varification in already send");
          }

          throw new Error(
            "Email is not verified. We have sent the verification link again. Please check your inbox/spam."
          );
        }

        return {
          name: res.user?.displayName,
          email: res.user?.email,
          image: res.user?.photoURL,
        };
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirebaseAdapter(db),
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
