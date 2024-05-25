import React from "react";
import EarningsCard from "../Overview/EarningsCard";
import SpendingCard from "../Overview/SpendingCard";
import { Row, Col } from "react-bootstrap";
import Transactions from "../Overview/Transactions";
import LatestTask from "../Overview/LatestTask";
import MyCampaigns from "../Overview/MyCampaigns";
import Calendar from "../Overview/Calendar";

const Overview = () => {
  return (
    <div className="p-4">
      <Row>
        <Col>
          <EarningsCard />
        </Col>
        <Col>
          <SpendingCard />
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Transactions />
          <LatestTask />
        </Col>
        <Col md={4}>
          <MyCampaigns />
          <Calendar />
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
