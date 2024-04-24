import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config/firebase";

const NewDocument = () => {
  const [theme, setTheme] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSaveContent = async () => {
    try {
      const docRef = await addDoc(collection(db, "content"), {
        theme: theme,
        title: title,
        content: content,
        image: image,
      });
      console.log("Document written with ID: ", docRef.id);

      // Réinitialiser les champs après l'ajout
      setTheme("");
      setTitle("");
      setContent("");
      setImage("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h1>New Document</h1>
      <label>Thème: </label>
      <input
        type="text"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      />
      <br />
      <label>Titre: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label>Contenu: </label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <br />
      <label>Image: </label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <button onClick={handleSaveContent}>Enregistrer</button>
    </div>
  );
};

export default NewDocument;
