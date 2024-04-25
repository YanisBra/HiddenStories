import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Config/firebase";
import { Form, Button } from "react-bootstrap"; // Import des composants Bootstrap
import styled from "styled-components";


const StyledForm = styled(Form)`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const NewDocument = ({ handleClose }) => {
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

      // Fermer la modal
      handleClose();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <StyledForm>
      <Form.Group controlId="theme">
        <Form.Label>Theme:</Form.Label>
        <Form.Control
          type="text"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="title">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="content">
        <Form.Label>Content:</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="image">
        <Form.Label>Image:</Form.Label>
        <Form.Control
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </Form.Group>

      <StyledButton variant="primary" onClick={handleSaveContent}>
        Enregistrer
      </StyledButton>
    </StyledForm>
  );
};

export default NewDocument;
