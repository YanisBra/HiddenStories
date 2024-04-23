import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import LoginScreen from "./LoginScreen";
import { FIREBASE_AUTH } from "../Config/firebase";

const AdminScreen = () => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur connecté

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Met à jour l'état de l'utilisateur lorsqu'il y a un changement d'état d'authentification
    });
    return () => unsubscribe(); // Nettoie l'effet lors du démontage du composant
  }, [auth]); // Déclenche l'effet lorsque l'objet d'authentification Firebase change

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Déconnexion de l'utilisateur en mettant à jour l'état
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <div>
      <h1>Admin</h1>
      <Link to="/">Accueil</Link>
      {user ? ( // Vérifie si un utilisateur est connecté
        <>
          <button className="button" onClick={logOut}>
            Se déconnecter
          </button>
          <p>Connecté en tant qu'utilisateur : {user.email}</p>
          {/* Contenu de la page admin */}
        </>
      ) : (
        <LoginScreen /> // Affiche le composant de connexion si aucun utilisateur n'est connecté
      )}
    </div>
  );
};

export default AdminScreen;
