import React from "react";
import { Row, Col, Card, Badge, Dropdown } from "react-bootstrap";

const CampaignCard = ({
  status,
  title,
  postedTime,
  posts,
  collaborated,
  hired,
  creators,
  amountSpent,
  deliverables,
}) => {
  return (
    <Card className="campaign-card mb-3">
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{title}</Card.Title>
            <Badge
              className="badge-status"
              variant={status === "open" ? "success" : "secondary"}
            >
              {status}
            </Badge>
            {postedTime && <span>{postedTime} Posted</span>}
          </Col>
          <Col className="d-flex justify-content-around align-items-center">
            <div className="stat-container">
              {creators && <div className="stat-value">{creators}</div>}
              <div className="stat-label">Creators</div>
            </div>
            <div className="stat-container">
              {amountSpent && <div className="stat-value">{amountSpent}</div>}
              <div className="stat-label">Amount spent</div>
            </div>
            <div className="stat-container">
              {deliverables && <div className="stat-value">{deliverables}</div>}
              <div className="stat-label">Deliverables</div>
            </div>
          </Col>
          <Col className="d-flex justify-content-end align-items-start">
            <Dropdown>
              <Dropdown.Toggle as="div" className="three-dots">
                <i className="bi bi-three-dots-vertical"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                <Dropdown.Item href="#">Edit</Dropdown.Item>
                <Dropdown.Item href="#">Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CampaignCard;
