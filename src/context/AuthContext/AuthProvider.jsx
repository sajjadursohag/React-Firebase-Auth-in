import React from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    createUser: createUser,
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
