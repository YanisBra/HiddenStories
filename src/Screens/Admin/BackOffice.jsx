import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../Config/firebase";

import { Link } from "react-router-dom";
import { FIREBASE_AUTH } from "../../Config/firebase";
import { signOut } from "firebase/auth";
import styled from "styled-components";
import {
  Table,
  Button,
  Form,
  Spinner,
  Modal,
  Navbar,
  Nav,
} from "react-bootstrap";
import NewChampion from "./NewChampion";

const BackOffice = () => {
  const auth = FIREBASE_AUTH;

  const [documents, setDocuments] = useState([]);
  const [editingDocumentId, setEditingDocumentId] = useState(null);
  const [editedDocument, setEditedDocument] = useState({
    id: "",
    name: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [documentToDeleteId, setDocumentToDeleteId] = useState(null);
  const [showNewDocumentModal, setShowNewDocumentModal] = useState(false);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "champions")); // Fetch documents collection from Firestore
        const fetchedDocuments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })); // Map Firestore documents to an array of objects with document ID and data
        setDocuments(fetchedDocuments); // Update documents state with fetched data
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments(); // Trigger document fetching on component mount
  }, []);

  const handleEditDocument = (document) => {
    setEditingDocumentId(document.id);
    setEditedDocument({ ...document });
  };

  const handleUpdateDocument = async () => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "champions", editingDocumentId), editedDocument);
      const updatedDocuments = documents.map((doc) =>
        doc.id === editingDocumentId ? { ...editedDocument } : doc
      ); // Map through existing documents to update the edited document
      setDocuments(updatedDocuments);
      setEditingDocumentId(null); // Reset editingDocumentId after update
      setEditedDocument({ id: "", name: "", description: "", image: "" }); // Reset editedDocument state
    } catch (error) {
      console.error("Error updating document: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDocument = async () => {
    try {
      await deleteDoc(doc(db, "champions", documentToDeleteId));
      const updatedDocuments = documents.filter(
        (doc) => doc.id !== documentToDeleteId
      ); // Filter out the deleted document from the documents array
      setDocuments(updatedDocuments); // Update documents state after deletion
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const confirmDelete = (documentId) => {
    setDocumentToDeleteId(documentId);
    setShowDeleteModal(true);
  };

  const handleCloseNewDocumentModal = () => {
    setShowNewDocumentModal(false);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Backoffice</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setShowNewDocumentModal(true)}>
              Ajouter un Champion
            </Nav.Link>
            <Nav.Link onClick={logOut}>Se déconnecter</Nav.Link>
            <Nav.Link as={Link} to="/">
              Retourner au Webdoc
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <tr key={document.id}>
              <td>
                {editingDocumentId === document.id ? (
                  <EditInput
                    as="textarea"
                    value={editedDocument.name}
                    onChange={(e) =>
                      setEditedDocument({
                        ...editedDocument,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p className="content">{document.name}</p>
                )}
              </td>
              <td>
                {editingDocumentId === document.id ? (
                  <EditInput
                    as="textarea"
                    value={editedDocument.description}
                    onChange={(e) =>
                      setEditedDocument({
                        ...editedDocument,
                        description: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p className="content">{document.description}</p>
                )}
              </td>
              <td>
                {editingDocumentId === document.id ? (
                  <EditInput
                    as="textarea"
                    value={editedDocument.image}
                    onChange={(e) =>
                      setEditedDocument({
                        ...editedDocument,
                        image: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p className="content">{document.image}</p>
                )}
              </td>
              <td>
                {editingDocumentId === document.id ? (
                  <Button
                    variant="success"
                    onClick={handleUpdateDocument}
                    disabled={loading}
                  >
                    {loading ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        className="me-1"
                      />
                    ) : null}
                    Enregistrer
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      onClick={() => handleEditDocument(document)}
                      className="me-2"
                    >
                      Modifier
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => confirmDelete(document.id)}
                    >
                      Supprimer
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation de suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer ce champion ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handleDeleteDocument}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showNewDocumentModal} onHide={handleCloseNewDocumentModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nouveau Champion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewChampion handleClose={handleCloseNewDocumentModal} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 90vw;

  .content {
    max-height: 300px;
    max-width: 20vw;
    overflow-y: auto;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`;

const EditInput = styled(Form.Control)`
  margin-bottom: 5px;
  height: 200px;
  width: 15vw;
`;

export default BackOffice;
