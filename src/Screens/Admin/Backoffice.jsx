import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
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

// Composant Backoffice
const Backoffice = () => {
  const [documents, setDocuments] = useState([]);

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

  const handleDeleteDocument = async (documentId) => {
    try {
      // Supprimer le document correspondant dans Firestore
      await deleteDoc(doc(db, "content", documentId));

      // Mettre à jour la liste des documents après la suppression
      setDocuments(documents.filter((doc) => doc.id !== documentId));
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
            <DocumentInfo>
              <DocumentTitle>{document.theme}</DocumentTitle>
              <DocumentDetail>Title: {document.title}</DocumentDetail>
              <DocumentDetail>Content: {document.content}</DocumentDetail>
            </DocumentInfo>
            <button onClick={() => handleDeleteDocument(document.id)}>
              Supprimer
            </button>
          </DocumentItem>
        ))}
      </DocumentList>
    </Container>
  );
};

export default Backoffice;
