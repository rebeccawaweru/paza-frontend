import React from "react";
import { Card, Container, Tabs, Tab } from "react-bootstrap";
import CampaignCard from "./CampaignCard";

const ActiveCampaign = () => {
  return (
    <Container>
      <h2>Campaigns</h2>
      <Container className="my-campaigns-container">
        <h2 className="title">My Campaigns</h2>
        <Tabs defaultActiveKey="open" id="campaign-tabs" className="mb-3">
          <Tab eventKey="open" title="Open">
            <Card className="mb-4">
              <CampaignCard
                title="Safaricom Jazz Campaign For Worlds Aid Day"
                status="open"
                postedTime="Posted a month ago"
                posts="03"
                collaborated="12"
                hired={24}
              />
            </Card>
          </Tab>
          <Tab eventKey="closed" title="Closed">
            <CampaignCard />
          </Tab>
          <Tab eventKey="draft" title="Draft">
            <CampaignCard />
          </Tab>
        </Tabs>
      </Container>
    </Container>
  );
};

export default ActiveCampaign;
