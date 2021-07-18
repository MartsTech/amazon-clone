import { auth, db } from "configs/firebase";

const register = async (name: string, email: string, password: string) => {
  const res = await auth.createUserWithEmailAndPassword(email, password);

  const photoURL = `https://i.pravatar.cc/150?u=${email}`;

  auth.currentUser?.updateProfile({
    displayName: name,
    photoURL,
  });

  await db.collection("users").doc(email).set({
    name,
    email,
    photoURL: photoURL,
  });

  if (!res.user?.emailVerified) {
    auth.currentUser?.sendEmailVerification();

    throw new Error(
      "Verify your email to complete registration. Check your inbox/spam for verification email."
    );
  }

  return {
    name: res.user?.displayName,
    email: res.user?.email,
    image: res.user?.photoURL,
  };
};

export default register;
