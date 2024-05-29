import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CampaignsNav from "./CampaignsNav";
import MyCampaigns from "./MyCampaigns";
import ActiveCampaign from "./ActiveCampaign";
import NewCampaignButton from "./NewCampaignButton";
import RecommendedCampaigns from "./RecommendedCampaigns";

const CampaignsMain = () => {
  return (
    <Container fluid className="p-4">
      <Row>
        <Col>
          <CampaignsNav />
        </Col>
      </Row>
      <Row>
        <Col>
          <ActiveCampaign />
        </Col>
      </Row>
    </Container>
  );
};

export default CampaignsMain;
