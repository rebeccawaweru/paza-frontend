import React from "react";
import { Nav } from "react-bootstrap";

const CampaignsNav = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/all-campaigns">
      <Nav.Item>
        <Nav.Link eventKey="all-campaigns">All Campaigns (4)</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="recommended">Recommended</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default CampaignsNav;
