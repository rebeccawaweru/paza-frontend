import React from "react";
import { Card } from "react-bootstrap";

const SpendingCard = () => {
  return (
    <Card className="mb-4 ">
      <Card.Body>
        <Card.Title>Total spending</Card.Title>
        <Card.Text>Ksh. 100,500</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SpendingCard;
