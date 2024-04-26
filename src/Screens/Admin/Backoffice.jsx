// import React, { useState, useEffect } from "react";
// import {
//   collection,
//   getDocs,
//   deleteDoc,
//   updateDoc,
//   doc,
// } from "firebase/firestore";
// import { db } from "../../Config/firebase";
// import styled from "styled-components";
// import { Table, Button, Form, Spinner, Modal } from "react-bootstrap"; // Import des composants Bootstrap

// const Container = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const Title = styled.h1`
//   text-align: center;
// `;

// const EditInput = styled(Form.Control)`
//   margin-bottom: 5px;
// `;

// const Backoffice = () => {
//   const [documents, setDocuments] = useState([]);
//   const [editingDocumentId, setEditingDocumentId] = useState(null);
//   const [editedTheme, setEditedTheme] = useState("");
//   const [editedTitle, setEditedTitle] = useState("");
//   const [editedContent, setEditedContent] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false); // État pour contrôler l'affichage de la modal de suppression
//   const [documentToDeleteId, setDocumentToDeleteId] = useState(null); // État pour stocker l'ID du document à supprimer

//   useEffect(() => {
//     const fetchDocuments = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "content"));
//         const fetchedDocuments = [];
//         querySnapshot.forEach((doc) => {
//           fetchedDocuments.push({ id: doc.id, ...doc.data() });
//         });
//         setDocuments(fetchedDocuments);
//       } catch (error) {
//         console.error("Error fetching documents: ", error);
//       }
//     };

//     fetchDocuments();
//   }, []);

//   const handleEditDocument = async (documentId) => {
//     const documentToEdit = documents.find((doc) => doc.id === documentId);
//     if (documentToEdit) {
//       setEditingDocumentId(documentId);
//       setEditedTheme(documentToEdit.theme);
//       setEditedTitle(documentToEdit.title);
//       setEditedContent(documentToEdit.content);
//     }
//   };

//   const handleUpdateDocument = async () => {
//     setLoading(true);
//     try {
//       await updateDoc(doc(db, "content", editingDocumentId), {
//         theme: editedTheme,
//         title: editedTitle,
//         content: editedContent,
//       });

//       const updatedDocuments = documents.map((doc) =>
//         doc.id === editingDocumentId
//           ? {
//               ...doc,
//               theme: editedTheme,
//               title: editedTitle,
//               content: editedContent,
//             }
//           : doc
//       );
//       setDocuments(updatedDocuments);

//       setEditingDocumentId(null);
//       setEditedTheme("");
//       setEditedTitle("");
//       setEditedContent("");
//     } catch (error) {
//       console.error("Error updating document: ", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDeleteDocument = async (documentId) => {
//     try {
//       await deleteDoc(doc(db, "content", documentId));
//       const updatedDocuments = documents.filter((doc) => doc.id !== documentId);
//       setDocuments(updatedDocuments);
//       setShowDeleteModal(false); // Cacher la modal après suppression
//     } catch (error) {
//       console.error("Error deleting document: ", error);
//     }
//   };

//   const confirmDelete = (documentId) => {
//     setDocumentToDeleteId(documentId);
//     setShowDeleteModal(true);
//   };

//   return (
//     <Container>
//       <Title>Backoffice</Title>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Theme</th>
//             <th>Title</th>
//             <th>Content</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {documents.map((document) => (
//             <tr key={document.id}>
//               <td>
//                 {editingDocumentId === document.id ? (
//                   <EditInput
//                     type="text"
//                     value={editedTheme}
//                     onChange={(e) => setEditedTheme(e.target.value)}
//                   />
//                 ) : (
//                   document.theme
//                 )}
//               </td>
//               <td>
//                 {editingDocumentId === document.id ? (
//                   <EditInput
//                     type="text"
//                     value={editedTitle}
//                     onChange={(e) => setEditedTitle(e.target.value)}
//                   />
//                 ) : (
//                   document.title
//                 )}
//               </td>
//               <td>
//                 {editingDocumentId === document.id ? (
//                   <EditInput
//                     type="text"
//                     value={editedContent}
//                     onChange={(e) => setEditedContent(e.target.value)}
//                   />
//                 ) : (
//                   document.content
//                 )}
//               </td>
//               <td>
//                 {editingDocumentId === document.id ? (
//                   <Button
//                     variant="success"
//                     onClick={handleUpdateDocument}
//                     disabled={loading}
//                   >
//                     {loading ? (
//                       <Spinner
//                         as="span"
//                         animation="border"
//                         size="sm"
//                         role="status"
//                         aria-hidden="true"
//                         className="me-1"
//                       />
//                     ) : null}
//                     Save
//                   </Button>
//                 ) : (
//                   <>
//                     <Button
//                       variant="primary"
//                       onClick={() => handleEditDocument(document.id)}
//                       className="me-2"
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       variant="danger"
//                       onClick={() => confirmDelete(document.id)}
//                     >
//                       Delete
//                     </Button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Modal de suppression */}
//       <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirmation de suppression</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Êtes-vous sûr de vouloir supprimer ce document ?
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
//             Annuler
//           </Button>
//           <Button
//             variant="danger"
//             onClick={() => handleDeleteDocument(documentToDeleteId)}
//           >
//             Supprimer
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default Backoffice;

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
import { Table, Button, Form, Spinner, Modal } from "react-bootstrap"; // Import des composants Bootstrap
import NewDocument from "./NewDocument"; // Import du composant NewDocument

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const EditInput = styled(Form.Control)`
  margin-bottom: 5px;
`;

const Backoffice = () => {
  const [documents, setDocuments] = useState([]);
  const [editingDocumentId, setEditingDocumentId] = useState(null);
  const [editedTheme, setEditedTheme] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [editedImage, setEditedImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // État pour contrôler l'affichage de la modal de suppression
  const [documentToDeleteId, setDocumentToDeleteId] = useState(null); // État pour stocker l'ID du document à supprimer
  const [showNewDocumentModal, setShowNewDocumentModal] = useState(false); // État pour contrôler l'affichage de la modal pour ajouter un nouveau document

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
      setEditedImage(documentToEdit.image);
    }
  };

  const handleUpdateDocument = async () => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "content", editingDocumentId), {
        theme: editedTheme,
        title: editedTitle,
        content: editedContent,
        image: editedImage,
      });

      const updatedDocuments = documents.map((doc) =>
        doc.id === editingDocumentId
          ? {
              ...doc,
              theme: editedTheme,
              title: editedTitle,
              content: editedContent,
              image: editedImage,
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
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteDocument = async (documentId) => {
    try {
      await deleteDoc(doc(db, "content", documentId));
      const updatedDocuments = documents.filter((doc) => doc.id !== documentId);
      setDocuments(updatedDocuments);
      setShowDeleteModal(false); // Cacher la modal après suppression
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const confirmDelete = (documentId) => {
    setDocumentToDeleteId(documentId);
    setShowDeleteModal(true);
  };

  const handleShowNewDocumentModal = () => {
    setShowNewDocumentModal(true);
  };

  const handleCloseNewDocumentModal = () => {
    setShowNewDocumentModal(false);
  };

  return (
    <Container>
      <Title>Backoffice</Title>
      <Button variant="primary" onClick={handleShowNewDocumentModal}>
        Add Document
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Theme</th>
            <th>Title</th>
            <th>Content</th>
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
                    type="text"
                    value={editedTheme}
                    onChange={(e) => setEditedTheme(e.target.value)}
                  />
                ) : (
                  document.theme
                )}
              </td>
              <td>
                {editingDocumentId === document.id ? (
                  <EditInput
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                ) : (
                  document.title
                )}
              </td>
              <td>
                {editingDocumentId === document.id ? (
                  <EditInput
                    type="text"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                ) : (
                  document.content
                )}
              </td>
              <td>
                {editingDocumentId === document.id ? (
                  <EditInput
                    type="text"
                    value={editedImage}
                    onChange={(e) => setEditedImage(e.target.value)}
                  />
                ) : (
                  document.image
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
                    Save
                  </Button>
                ) : (
                  <>
                    <Button
                      variant="primary"
                      onClick={() => handleEditDocument(document.id)}
                      className="me-2"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => confirmDelete(document.id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de suppression */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation de suppression</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer ce document ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Annuler
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDeleteDocument(documentToDeleteId)}
          >
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal pour ajouter un nouveau document */}
      <Modal show={showNewDocumentModal} onHide={handleCloseNewDocumentModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewDocument handleClose={handleCloseNewDocumentModal} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Backoffice;
