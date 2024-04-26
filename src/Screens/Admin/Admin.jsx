import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap"; // Import des composants Bootstrap
import { onAuthStateChanged } from "firebase/auth";
import LoginScreen from "./Login";
import { FIREBASE_AUTH } from "../../Config/firebase";
import BackOffice from "./BackOffice";

const AdminScreen = () => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur connecté

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Met à jour l'état de l'utilisateur lorsqu'il y a un changement d'état d'authentification
    });
    return () => unsubscribe(); // Nettoie l'effet lors du démontage du composant
  }, [auth]); // Déclenche l'effet lorsque l'objet d'authentification Firebase change

  return (
    <Container className="mt-5">
      {user ? ( // Vérifie si un utilisateur est connecté
        <>
          <BackOffice />
        </>
      ) : (
        <LoginScreen /> // Affiche le composant de connexion si aucun utilisateur n'est connecté
      )}
    </Container>
  );
};

export default AdminScreen;
