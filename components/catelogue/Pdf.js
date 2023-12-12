import { Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function PDFPage() {
  //Toggles Modal
  const [ispdfShow, setPdfShow] = useState(false);
  const handlepdfClose = () => setPdfShow(false);
  const handlepdfShow = () => setPdfShow(true);

  return (
    //HTML elements goes here
    <Modal show={ispdfShow}>
      <Modal.Header closeButton onClick={() => handlepdfClose()}>
        <Modal.Title>Sale handbook Preview</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <iframe
          src="/pdf/application_doc.pdf"
          className=""
          frameBorder="0"
        ></iframe>
      </Modal.Body>
    </Modal>
  );
}
export default PDFPage;
