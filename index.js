import { render } from "react-dom"
import { BrowserRouter, Routes, Route,
   Link , Outlet, useParams} from "react-router-dom";





const rootElement = document.getElementById("root")
render (
  <BrowserRouter>
  <Routes>
    <Route path = "/" element = {<Home />} >
      <Route path = "/address" element = {<Address />} > 
       <Route path = ":AddressLocation" element = {< UsingParams />} />
       </Route>
      <Route path = "/status" element = {<Status />} />
      
     
     </Route>
    
  </Routes>
  </BrowserRouter>, rootElement
  
);


function Home() {
  return (<div>
    <h1>Delivery Details</h1>

    <Link to = "/">Home</Link> <br />
    <Link to = "/Address">Address</Link>  { " "}<br />
    <Link to = "/Status">Status</Link>
    <Outlet />
    </div>
  )
}



function Address() {

  return(
    <div>
     
      <h2 >Adress of Delivery!</h2>

      <ul>
        <li>Locate on Gmaps</li>
        <li>Traffic</li>
        <Outlet />
      </ul>
      
    </div>
  )
}



function Status()  {
  return(
    <div>
    <h2>Status of Delivery!</h2>
    <ul>
      <li>Delivered</li>
      <li>Delivery Rejected</li>
    </ul>
    <Outlet />
    
    </div>
  )
}



function UsingParams() {
  let { AddressLocation } = useParams();
  
  return(
    <div>
      <h4>Address: {AddressLocation}</h4>
    </div>
  )
}























/*import { render } from "react-dom"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App";
import LocationDetails from "./subFolders/locationDetails";
//import Billing from "./subFolders/billing";
import Invoices from "./subFolders/invoices";
import Invoice from "./subFolders/invoice";



const rootElement = document.getElementById("root")
render (
  <BrowserRouter>
  <Routes>
<  Route path = "/"  element = {<App />} >
    <Route path = "locationDetails" element = {<LocationDetails />} />
    <Route path = "invoices" element = {<Invoices />} >
     <Route path = ":invoiceUrl" element = {<Invoice />} />
    </Route>
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
</Route>
</Routes>
</BrowserRouter>, rootElement);*/




