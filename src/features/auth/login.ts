import {
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "configs/firebase";

const login = async (email: string, password: string) => {
  const res = await signInWithEmailAndPassword(auth, email, password);

  if (!res.user?.emailVerified) {
    if (auth.currentUser) {
      sendEmailVerification(auth.currentUser);
    }

    throw new Error(
      "Email is not verified. We have sent the verification link again. Please check your inbox/spam."
    );
  }

  return {
    name: res.user?.displayName,
    email: res.user?.email,
    image: res.user?.photoURL,
  } as any;
};

export default login;
