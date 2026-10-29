import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInuser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get current user info
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("Inside observer: if", currentUser);
    } else {
      console.log("Inside observer. else", currentUser);
    }
  });

  // useEffect(()=> {}, [])
  // useEffect(() => {
  //   // step 1: observer set
  //   // step-2: set in a variable
  //   // step 3: return and call the variale so that you can clear the ref
  // } , [])

  useEffect(() => {
    // set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state change", currentUser);
      setUser(currentUser);
    });
    // clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInuser,
    user,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

/**
 * 1. create a context
 * 2. create a provider-- so that you can reuse the context in difference places.
 * 3. ensure you use the children drop.
 * 4. make sure use the auth provider in the router
 * 5. Make the create user with email and password shared via provider.
 * 6. set create user in the authInfo object to share via context.
 *
 *
 */
