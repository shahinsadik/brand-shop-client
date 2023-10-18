import React from "react";
import { createContext, useState , useEffect} from "react";
import app from "../../firebase/firebase.config.js";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  
} from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);
    const [loading, setLoading] =useState(true);
    const [error, setError] =useState(null);
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const profileUpdate= (name, photo)=>{
    setLoading(true)
   return updateProfile(auth.currentUser, {
      displayName: name , photoURL: photo
    })
  }

  const crateNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};

useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };


  const authInfo ={
    user,
    signInGoogle,
    crateNewUser,
    signInUser,
    logOut,
    profileUpdate,
}
  return (<div>
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  </div>);
};

export default AuthProvider;
