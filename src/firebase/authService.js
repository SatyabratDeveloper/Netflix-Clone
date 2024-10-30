import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "./firebase";

/**
 * Function to sign up a new user
 * @param email
 * @param password
 * @returns user || null
 */
const firebaseSignup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Signed up successfully.");
    return user;
  } catch (error) {
    console.error(`authService :: firebaseSignup :: error: ${error}`);
    return null;
  }
};

/**
 * Function to sign in existing users
 * @param email
 * @param password
 * @returns user || null
 */
const firebaseSignin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Signed in successfully.");
    return user;
  } catch (error) {
    console.error(`authService :: firebaseSignin :: error: ${error}`);
    return null;
  }
};

/**
 * Function to sign out a user
 */
const firebaseSignOut = async () => {
  try {
    await signOut(auth);
    console.log("Signed out successfully.");
  } catch (error) {
    console.error(`authService :: firebaseSignOut :: error: ${error}`);
  }
};

/**
 * Function to get the current user synchronously
 * @returns user || null
 */
const firebaseGetCurrentUser = () => {
  const user = auth.currentUser;
  if (user) {
    console.log("Current active user:", user.displayName);
    return user;
  } else {
    console.log("No user founded.");
    return null;
  }
};

/**
 * Function to update user's username
 * @param username
 */
const firebaseUpdateUserProfile = async (username) => {
  try {
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    console.log("User profile updated.");
  } catch (error) {
    console.error(
      `authService :: firebaseUpdateUserProfile :: error: ${error}`
    );
  }
};

export {
  firebaseSignup,
  firebaseSignin,
  firebaseSignOut,
  firebaseGetCurrentUser,
  firebaseUpdateUserProfile,
};
