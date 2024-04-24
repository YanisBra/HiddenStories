import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FIREBASE_AUTH } from "../../Config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const LoginScreen = () => {
  const auth = FIREBASE_AUTH;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //Connexion d'un user
  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Création d'un user
  // const signUp = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );

      // Enregistrement de l'utilisateur dans Firestore
      // const userDocRef = await addDoc(collection(db, "users"), {
      //   uid: response.user.uid,
      //   email: response.user.email,
      //   role: "user",
      //   username: username,
      // });

  //     console.log(
  //       "Utilisateur enregistré avec succès dans Firestore:",
  //       userDocRef.id
  //     );
  //   } catch (error) {
  //     console.log("Erreur lors de l'inscription:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="container">
      <h2 className="title">LoginScreen</h2>
      {/* <input
        className="input"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> */}
      <input
        className="input"
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {loading ? (
        <div className="loading">
          <p>Chargement...</p>
        </div>
      ) : (
        <>
          <button className="button" onClick={signIn}>
            Connexion
          </button>
          {/* <button className="button" onClick={signUp}>
            Créer un compte
          </button> */}
          <Link to="/">
            <button>Go to Home</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default LoginScreen;
