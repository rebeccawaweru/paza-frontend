import React from "react";
import { Card } from "react-bootstrap";
import CampaignCard from "./CampaignCard";

const ActiveCampaign = () => {
  return (
    <div>
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
