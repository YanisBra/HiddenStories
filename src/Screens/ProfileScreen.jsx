import React from "react";
import { Link, useParams } from "react-router-dom";

const ProfileScreen = () => {
  const { uid } = useParams(); 

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

  // Trouver l'utilisateur correspondant à l'UID dans les données des utilisateurs
  const user = users.find((user) => user.uid === uid);

  console.log("Users in ProfileScreen:", users);

  if (!user) {
    return (
      <>
        <div>User not found!</div>
        <Link to="/admin">
          <button>Go to admin</button>
        </Link>
      </>
    );
  }

  return (
    <div>
      <h1>Profile Screen</h1>
      <p>
        <strong>UID:</strong> {user.uid}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default ProfileScreen;
