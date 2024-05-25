import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Transactions = () => {
  return (
    <Card className="mb-4">
      <Card.Header>Recent Transactions</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>KCB -Campaign Name</ListGroup.Item>
        <ListGroup.Item>Safaricom - Campaign Name</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Transactions;
