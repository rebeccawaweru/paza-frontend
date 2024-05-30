import React from "react";
import { Nav } from "react-bootstrap";
import NewCampaignButton from "./NewCampaignButton";

const CampaignsNav = () => {
  return (
    <Nav
      className="d-flex campaign-nav"
      variant="tabs"
      defaultActiveKey="/all-campaigns"
    >
      <Nav.Item>
        <Nav.Link eventKey="all-campaigns">All Campaigns (4)</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="recommended">Recommended</Nav.Link>
      </Nav.Item>

      <div className="campaign-nav-item">
        <NewCampaignButton />
      </div>
    </Nav>
  );
};

export default CampaignsNav;
