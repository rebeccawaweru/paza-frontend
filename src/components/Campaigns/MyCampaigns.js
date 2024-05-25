import React from "react";
import { Card, ButtonGroup, Button } from "react-bootstrap";

const MyCampaigns = () => {
  return (
    <Card className="mb-4">
      <Card.Header>My Campaigns</Card.Header>
      <Card.Body>
        <ButtonGroup aria-label="Basic example" className="mb-3">
          <Button variant="secondary">Open</Button>
          <Button variant="secondary">Closed</Button>
          <Button variant="secondary">Draft</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default MyCampaigns;
