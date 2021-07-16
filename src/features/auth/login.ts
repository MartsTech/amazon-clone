import { auth } from "configs/firebase";

const login = async (email: string, password: string) => {
  const res = await auth.signInWithEmailAndPassword(email, password);

  if (!res.user?.emailVerified) {
    auth.currentUser?.sendEmailVerification();

    throw new Error(
      "Email is not verified. We have sent the verification link again. Please check your inbox/spam."
    );
  }

  return {
    name: res.user?.displayName,
    email: res.user?.email,
    image: res.user?.photoURL,
  };
};

export default login;
