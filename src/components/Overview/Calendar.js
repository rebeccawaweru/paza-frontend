import React from "react";
import { Card } from "react-bootstrap";

const Calendar = () => {
  return (
    <div>
      {" "}
      <Card className="mb-4">
        <Card.Header>Calendar</Card.Header>
        <Card.Body>
          <Card.Title>February 12, 2024</Card.Title>
          <Card.Text>Meeting with Collaborators</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Calendar;
