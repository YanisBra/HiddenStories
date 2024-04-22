// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { db } from "../Config/firebase";
// import { collection, getDocs } from "firebase/firestore";

// const AdminScreen = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const usersCollection = collection(db, "users"); // "users" est le nom de votre collection
//         const usersSnapshot = await getDocs(usersCollection);

//         const usersData = [];
//         usersSnapshot.forEach((doc) => {
//           // Pour chaque document (utilisateur), récupérez les données
//           usersData.push({ id: doc.id, ...doc.data() });
//         });

//         setUsers(usersData);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []); // Utilisez un tableau vide comme dépendance pour exécuter cette opération une seule fois au chargement

//   return (
//     <div>
//       <h1>Liste des Utilisateurs</h1>
//       <Link to="/">Accueil</Link>

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <strong>Uid:</strong> {user.uid} - 
//             <strong>Username:</strong>{user.username} -
//             <strong>Email:</strong> {user.email} - 
//             <strong>Role:</strong>{user.role}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminScreen;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Config/firebase";

const AdminScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);

        const usersData = [];
        usersSnapshot.forEach((doc) => {
          usersData.push({ id: doc.id, ...doc.data() });
        });

        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

//   useEffect(() => {
//     console.log("users:", users); 
//   }, [users]); 

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <Link to="/">Accueil</Link>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/profile/${user.uid}`}>
              <strong>Uid:</strong> {user.uid} -<strong>Username:</strong>{" "}
              {user.username} -<strong>Email:</strong> {user.email} -
              <strong>Role:</strong> {user.role}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminScreen;
