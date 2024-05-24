import { Col, Container, Row } from "react-bootstrap";
import "./components/MainNavbar";
import MainNavbar from "./components/MainNavbar";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";

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
            <Overview />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
