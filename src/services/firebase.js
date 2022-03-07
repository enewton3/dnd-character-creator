import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  where,
  getDocs,
  query,
  limit,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTQlVCPcPuVvkprNimHRqqkfHmb_KPmxg",
  authDomain: "dnd-character-creator-97e68.firebaseapp.com",
  projectId: "dnd-character-creator-97e68",
  storageBucket: "dnd-character-creator-97e68.appspot.com",
  messagingSenderId: "21028074270",
  appId: "1:21028074270:web:85c38fae04e12c56078f0f",
  measurementId: "G-383GLW9M6E",
};

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(firebaseApp);

export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = "state_changed";

export async function getUserWithUsername(username) {
  const q = query(
    collection(firestore, "users"),
    where("username", "==", username),
    limit(1)
  );
  const userDoc = await getDocs(q).docs[0];
  return userDoc;
}

export function docToJSON(doc) {
  const data = doc.data();

  return {
    ...data,
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
