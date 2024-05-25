import React from "react";
import { Card } from "react-bootstrap";

const MyCampaigns = () => {
  return (
    <div>
      {" "}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>My Campaigns</Card.Title>
          <Card.Text>Majimbo Project - 1 Task Ongoing - 65%</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCampaigns;
