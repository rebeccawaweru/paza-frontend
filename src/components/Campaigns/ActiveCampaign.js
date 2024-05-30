import React from "react";
import { Card, Container, Tabs, Tab } from "react-bootstrap";
import CampaignCard from "./CampaignCard";

const ActiveCampaign = () => {
  return (
    <div>
      <h2>Campaigns</h2>
      <Container className="my-campaigns-container">
        <h2 className="title">My Campaigns</h2>
        <Tabs defaultActiveKey="open" id="campaign-tabs" className="mb-3">
          <Tab eventKey="open" title="Open">
            <CampaignCard />
          </Tab>
          <Tab eventKey="closed" title="Closed">
            <CampaignCard />
          </Tab>
          <Tab eventKey="draft" title="Draft">
            <CampaignCard />
          </Tab>
        </Tabs>
      </Container>
      <Card className="mb-4">
        <CampaignCard
          title="Safaricom Jazz Campaign For Worlds Aid Day"
          status="open"
          postedTime="Posted a month ago"
          creators={23}
          amountSpent="Ksh. 34,000"
          deliverables={23}
        />
      </Card>
      <Card className="mb-4">
        <CampaignCard
          status="open"
          title="Safaricom Jazz Campaign For Worlds Aid Day"
          creators={23}
          amountSpent="Ksh. 34,000"
          deliverables={23}
        />
      </Card>
    </div>
  );
};

export default ActiveCampaign;
