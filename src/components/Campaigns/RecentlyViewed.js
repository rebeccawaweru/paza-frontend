import React from "react";
import { Badge, Card, Row, Col } from "react-bootstrap";

const RecentlyViewed = () => {
  const campaigns = [
    {
      title: "Safaricom Jazz Art creation",
      brand: "Safaricom PLC",
      deadline: "23/2/24",
      tags: ["Marketing", "Music"],
      description: "Lorem ipsum dolor sit amet...",
    },
    {
      title: "Safaricom Jazz Art creation",
      brand: "Safaricom PLC",
      deadline: "23/2/24",
      tags: ["Marketing", "Music"],
      description: "Lorem ipsum dolor sit amet...",
    },
  ];
  return (
    <div className="mb-4">
      <h5>Recently Viewed</h5>
      <Row>
        {campaigns.map((campaign, index) => (
          <Col key={index} md={6} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{campaign.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Brand:{campaign.brand}
                </Card.Subtitle>
                <Card.Text>Applications deadline:{campaign.deadline}</Card.Text>
                <div>
                  {campaign.tags.map((tag, idx) => (
                    <Badge key={idx} variant="success" className="mr-2">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Card.Text className="mt-2">{campaign.description}</Card.Text>
                <Card.Link href="#">View more</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecentlyViewed;
