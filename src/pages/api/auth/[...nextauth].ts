import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { db } from "configs/firebase";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirebaseAdapter(db),
});
