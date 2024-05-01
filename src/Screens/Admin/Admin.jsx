import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap"; // Import Bootstrap components
import { onAuthStateChanged } from "firebase/auth";
import LoginScreen from "./Login";
import { FIREBASE_AUTH } from "../../Config/firebase";
import BackOffice from "./BackOffice";

const AdminScreen = () => {
  const auth = FIREBASE_AUTH;
  const [user, setUser] = useState(null); // State to store the logged-in user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update the user state when authentication state changes
    });
    return () => unsubscribe();
  }, [auth]); // Trigger the effect when the Firebase authentication object changes

  return (
    <Container className="mt-5">
      {user ? ( // Check if a user is logged in
        <>
          <BackOffice /> {/* Display the BackOffice component */}
        </>
      ) : (
        <LoginScreen /> // Display the login component if no user is logged in
      )}
    </Container>
  );
};

export default AdminScreen;
