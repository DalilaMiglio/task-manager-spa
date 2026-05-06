import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../services/firebase";

export const register = async (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const login = async (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
};

export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

export const logout = async () => {
  await signOut(auth);
};
