import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavigationRoutes from "./routes/Routes";
const router = createBrowserRouter([
  { path: '*', Component: NavigationRoutes}
]);


function App() {
  return (
    <RouterProvider router={router}/>
 
  );
}
export default App;


    //please fit this into a single component//
    // <div>
    //   <MainNavbar />
    //   <Container fluid>
    //     <Row>
    //       <Col xs={2} className="p-0">
    //         <Sidebar />
    //       </Col>
    //       <Col xs={10} className="p-0">
    //         <CampaignsMain />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>