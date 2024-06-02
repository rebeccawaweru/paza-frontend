import React, { useState } from "react";

import { Button } from "react-bootstrap";
import CampaignCreationModal from "./CampaignCreationModal";

const NewCampaignButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Button
        variant="secondary"
        size="md"
        className="mb-4"
        onClick={handleShow}
      >
        + New Campaign
      </Button>
      <CampaignCreationModal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default NewCampaignButton;
