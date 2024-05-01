import React, { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../Config/firebase";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledForm = styled(Form)`
  max-width: 600px;
  margin: 0 auto;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const NewChampion = ({ handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // const handleImageChange = (e) => {
  //   s;
  //   const file = e.target.files[0];
  //   setImage(file);
  // };

  const handleSaveContent = async () => {
    try {
      // TO USE FIREBASE STORAGE AND UPLOAD IMAGE
      // if (!image) {
      //   console.error("Veuillez sélectionner une image.");
      //   return;
      // }

      // const storageRef = ref(storage, `images/${image.name}`);
      // await uploadBytes(storageRef, image);
      // const imageURL = await getDownloadURL(storageRef);

      const docRef = await addDoc(collection(db, "champions"), {
        name: name,
        description: description,
        image: image,
      });
      console.log("Document written with ID: ", docRef.id);

      // Reset fields after addition
      setName("");
      setDescription("");
      setImage("");

      // Fermer la modal
      handleClose();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <StyledForm>
      <Form.Group controlId="name">
        <Form.Label>Nom:</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description:</Form.Label>
        <Form.Control
          as="textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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

export default NewChampion;
