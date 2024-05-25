import React from "react";
import { Card, ProgressBar } from "react-bootstrap";

const LatestTask = () => {
  return (
    <Card className="mb-4">
      <Card.Header>Latest Task</Card.Header>
      <Card.Body>
        <Card.Title>Majimbo Project</Card.Title>
        <Card.Text>Lorem ipsum dolor sit amet consectetur.</Card.Text>
        <ProgressBar now={70} label={`${70}%`} />
      </Card.Body>
    </Card>
  );
};

export default LatestTask;
