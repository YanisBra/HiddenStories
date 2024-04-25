import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../Config/firebase";
import styled from "styled-components";

// Styled Components pour les éléments HTML
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const DocumentList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DocumentItem = styled.li`
  border: 1px solid #ccc;
  margin-bottom: 10px;
  padding: 10px;
`;

const DocumentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const DocumentTitle = styled.strong`
  font-size: 18px;
  margin-bottom: 5px;
`;

const DocumentDetail = styled.p`
  margin: 0;
`;

const EditInput = styled.input`
  margin-bottom: 5px;
  padding: 8px;
  border: 1px solid #ccc;
`;

// Composant Backoffice
const Backoffice = () => {
  const [documents, setDocuments] = useState([]);
  const [editingDocumentId, setEditingDocumentId] = useState(null);
  const [editedTheme, setEditedTheme] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "content"));
        const fetchedDocuments = [];
        querySnapshot.forEach((doc) => {
          fetchedDocuments.push({ id: doc.id, ...doc.data() });
        });
        setDocuments(fetchedDocuments);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocuments();
  }, []);

  const handleEditDocument = async (documentId) => {
    const documentToEdit = documents.find((doc) => doc.id === documentId);
    if (documentToEdit) {
      setEditingDocumentId(documentId);
      setEditedTheme(documentToEdit.theme);
      setEditedTitle(documentToEdit.title);
      setEditedContent(documentToEdit.content);
    }
  };

  const handleUpdateDocument = async () => {
    try {
      await updateDoc(doc(db, "content", editingDocumentId), {
        theme: editedTheme,
        title: editedTitle,
        content: editedContent,
      });

      const updatedDocuments = documents.map((doc) =>
        doc.id === editingDocumentId
          ? {
              ...doc,
              theme: editedTheme,
              title: editedTitle,
              content: editedContent,
            }
          : doc
      );
      setDocuments(updatedDocuments);

      setEditingDocumentId(null);
      setEditedTheme("");
      setEditedTitle("");
      setEditedContent("");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const handleDeleteDocument = async (documentId) => {
    try {
      await deleteDoc(doc(db, "content", documentId));
      const updatedDocuments = documents.filter((doc) => doc.id !== documentId);
      setDocuments(updatedDocuments);
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <Container>
      <Title>Backoffice</Title>
      <DocumentList>
        {documents.map((document) => (
          <DocumentItem key={document.id}>
            {editingDocumentId === document.id ? (
              <div>
                <EditInput
                  type="text"
                  value={editedTheme}
                  onChange={(e) => setEditedTheme(e.target.value)}
                />
                <EditInput
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <EditInput
                  type="text"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                <button onClick={handleUpdateDocument}>Enregistrer</button>
              </div>
            ) : (
              <DocumentInfo>
                <DocumentTitle>{document.theme}</DocumentTitle>
                <DocumentDetail>Title: {document.title}</DocumentDetail>
                <DocumentDetail>Content: {document.content}</DocumentDetail>
                <div>
                  <button onClick={() => handleEditDocument(document.id)}>
                    Modifier
                  </button>
                  <button onClick={() => handleDeleteDocument(document.id)}>
                    Supprimer
                  </button>
                </div>
              </DocumentInfo>
            )}
          </DocumentItem>
        ))}
      </DocumentList>
    </Container>
  );
};

export default Backoffice;
