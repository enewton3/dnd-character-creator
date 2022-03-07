import { doc, onSnapshot, getFirestore } from "firebase/firestore";
import { auth, firestore } from "../services/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export function useUserData() {
  const [user] = useAuthState(auth);
  return { user };
}
