import React from "react";
import { Card, Badge } from "react-bootstrap";

const CampaignCard = ({
  status,
  title,
  posts,
  collaborated,
  hired,
  creators,
  amountSpent,
  deliverables,
}) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Badge variant={status === "open" ? "success" : "secondary"}>
          {status}
        </Badge>
        <Card.Title>{title}</Card.Title>
        {posts && <Card.Text>{posts} Posts</Card.Text>}
        {collaborated && <Card.Text>{collaborated} Collaborated</Card.Text>}
        {hired && <Card.Text>{hired} Hired</Card.Text>}
        {creators && <Card.Text>{creators} Creators</Card.Text>}
        {amountSpent && <Card.Text>{amountSpent} Amount spent</Card.Text>}
        {deliverables && <Card.Text>{deliverables} Deliverables</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default CampaignCard;
