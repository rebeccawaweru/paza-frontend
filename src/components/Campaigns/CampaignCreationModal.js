import React, { useState } from "react";
import { Modal, Button, Form, ProgressBar } from "react-bootstrap";

const CampaignCreationModal = ({ show, handleClose }) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePreviousStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="steps">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`step ${i <= step ? "active" : ""}`}>
                {i}
              </div>
            ))}
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Name your Campaign</h3>
        <p>And don't worry, you can edit this later too.</p>
        <Form>
          <Form.Group controlId="campaignName">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control type="text" placeholder="Enter campaign name" />
          </Form.Group>
          <Form.Group controlId="campaignCategory">
            <Form.Label>Select Category</Form.Label>
            <Form.Control as="select">
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="campaignDescription">
            <Form.Label>Describe your Campaign</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="campaignFiles">
            <Form.Label>Upload Photos or videos of your campaign</Form.Label>
            <div className="file-upload">
              <input type="file" multiple />
              <span>
                Drop your file(s) here or <a href="/files">browse</a>
              </span>
              <small>Max. file size: 200MB</small>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handlePreviousStep}
          disabled={step === 1}
        >
          Previous
        </Button>
        <Button variant="primary" onClick={handleNextStep}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CampaignCreationModal;
