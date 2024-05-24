import React from "react";
import EarningsCard from "./EarningsCard";
import SpendingCard from "./SpendingCard";
import { Row, Col } from "react-bootstrap";
import Transactions from "./Transactions";
import LatestTask from "./LatestTask";

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
      </Row>
    </div>
  );
};

export default Overview;
