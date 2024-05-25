import React from "react";
import { Card } from "react-bootstrap";

const EarningsCard = () => {
  return (
    <Card className="card mb-4">
      <Card.Body>
        <Card.Title className="card-title">Total earnings</Card.Title>
        <Card.Text>Ksh. 100,500</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EarningsCard;
