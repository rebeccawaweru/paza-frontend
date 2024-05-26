import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PopularTags from "./PopularTags";
import RecentlyViewed from "./RecentlyViewed";
import TopBrandCampaigns from "./TopBrandCampaigns";

const RecommendedCampaigns = () => {
  return (
    <Container fluid className="p-4">
      <Row className="mb-4">
        <Col md={4}>
          <Button variant="secondary">Filter</Button>
        </Col>
        <Col md={4}>
          <Form.Control type="text" placeholder="Find Campaigns..." />
        </Col>
        <Col md={4}>
          <Form.Control as="select">
            <option>This month</option>
            <option>Last month</option>
            <option>Last 3 months</option>
          </Form.Control>
        </Col>
      </Row>
      <Row>
        <Col>
          <PopularTags />
        </Col>
      </Row>
      <Row>
        <Col>
          <RecentlyViewed />
        </Col>
      </Row>
      <Row>
        <Col>
          <TopBrandCampaigns />
        </Col>
      </Row>
    </Container>
  );
};

export default RecommendedCampaigns;
