import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap"; // Import des composants Bootstrap
import { signOut, onAuthStateChanged } from "firebase/auth";
import LoginScreen from "./Login";
import { FIREBASE_AUTH } from "../../Config/firebase";
import { Link } from "react-router-dom";
import Admin from "./Admin";

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
    <Container className="mt-5">
      {user ? ( // Vérifie si un utilisateur est connecté
        <>
          <Button variant="danger" onClick={logOut}>
            Se déconnecter
          </Button>
          <Link to="/" className="d-block text-center mt-3">
            <Button variant="secondary">Go to Home</Button>
          </Link>
          <Admin />
        </>
      ) : (
        <LoginScreen /> // Affiche le composant de connexion si aucun utilisateur n'est connecté
      )}
    </Container>
  );
};

export default AdminScreen;
