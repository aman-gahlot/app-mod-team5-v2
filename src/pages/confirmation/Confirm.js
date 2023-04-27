import React from "react";
import "./confirm.css";
import Navbar from "../../components/navbar/Navbar";
function Confirm() {
  return (
    <div>
      <Navbar />
      <div id="confirmation-page">
        <div className="head-confirm-text">
          <p>Reservation Confirmed</p>
        </div>
        <div id="pleased-text">
          <p>
            We are pleased to inform you that your reservation reques has been
            received and confirmed. Thank You!
          </p>
        </div>
        <div id="booking-details">
          <p>Booking Details</p>
        </div>
        <div id="booking-table">
          <table>
            <tr>
              <th>Booking</th>
              <th>Check in</th>
              <th>Check out</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>1011</td>
              <td>April 6, 2023</td>
              <td>April 7, 2023</td>
              <td>Rs. 12000</td>
              <td>Confirmed</td>
            </tr>
          </table>
        </div>
        <div>
          <span>Details: Standard Single Room</span>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
