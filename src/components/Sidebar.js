import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white p-3">
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-white">
          Overview
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Inbox
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Tasks
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Campaigns
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Payment
        </Nav.Link>
      </Nav>
      <hr />
      <div>Your Teams</div>
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-white">
          Team 1
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          Team 2
        </Nav.Link>
      </Nav>
      <Nav.Link href="#" className="text-white mt-4">
        Invite members
      </Nav.Link>
      <Nav.Link href="#" className="text-white">
        Help & Support
      </Nav.Link>
    </div>
  );
};

export default Sidebar;
