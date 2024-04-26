import React from "react";
import { Button, Container, Nav } from "react-bootstrap"; // Import des composants Bootstrap
import { signOut, onAuthStateChanged } from "firebase/auth";
import LoginScreen from "./Login";
import { FIREBASE_AUTH } from "../../Config/firebase";
import { Link } from "react-router-dom";
import Admin from "./Admin";

const AdminScreen = () => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = React.useState(null); // État pour stocker l'utilisateur connecté

  React.useEffect(() => {
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
    <Container fluid className="d-flex p-0">
      {/* Barre de navigation verticale à gauche */}
      <Nav className="flex-column bg-light p-3" style={{ width: "250px" }}>
        <Nav.Item>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav.Item>
        {user && (
          <Nav.Item>
            <Button variant="danger" onClick={logOut} className="mt-3">
              Logout
            </Button>
          </Nav.Item>
        )}
      </Nav>

      {/* Contenu principal à droite */}
      <Container className="p-3">
        {user ? ( // Vérifie si un utilisateur est connecté
          <Admin />
        ) : (
          <LoginScreen /> // Affiche le composant de connexion si aucun utilisateur n'est connecté
        )}
      </Container>
    </Container>
  );
};

export default AdminScreen;
