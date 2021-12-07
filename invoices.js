/*import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "./data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
      
      >
        {invoices.map(data => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/invoices/${data.number}`}
            key={data.number}
          >
             {data.name} {data.number}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}*/