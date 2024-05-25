import { Col, Container, Row } from "react-bootstrap";
import "./components/MainNavbar";
import MainNavbar from "./components/MainNavbar";
import Sidebar from "./components/Sidebar";
import OverviewMain from "./components/Overview/OverviewMain";
import CampaignsMain from "./components/Campaigns/CampaignsMain";

function App() {
  return (
    <div>
      <MainNavbar />
      <Container fluid>
        <Row>
          <Col xs={2} className="p-0">
            <Sidebar />
          </Col>
          <Col xs={10} className="p-0">
            <CampaignsMain />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
