import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampaignsNav from "./CampaignsNav";
import MyCampaigns from "./MyCampaigns";
import ActiveCampaign from "./ActiveCampaign";
import NewCampaignButton from "./NewCampaignButton";

const CampaignsMain = () => {
  return (
    <Container fluid className="p-4">
      <Row>
        <Col>
          <CampaignsNav />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <MyCampaigns />
          <ActiveCampaign />
        </Col>
        <Col md={4} className="d-flex align-items-start justify-content-end">
          <NewCampaignButton />
        </Col>
      </Row>
    </Container>
  );
};

export default CampaignsMain;
