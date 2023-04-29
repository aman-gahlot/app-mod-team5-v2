import React from "react";
import "./confirm.css";
import Navbar from "../../components/navbar/Navbar";
import format from "date-fns/format";
function Confirm() {
  let roomType = localStorage.getItem("roomtype")
  let check_in = localStorage.getItem("check_in")
  let check_out = localStorage.getItem("check_out")
  let total_price = localStorage.getItem("total_price")

  return (
    <div>
      <Navbar />
      <div id="confirm-container">
        <div id="confirmation-page">
          <div className="head-confirm-text">
            <p>Reservation Confirmed</p>
          </div>
          <div id="pleased-text">
            <p>
              We are pleased to inform you that your reservation request has been
              received and confirmed.
            </p>
            <p> Thank You!</p>
          </div>
          <div id="booking-details">
            <p>Booking Details</p>
          </div>
          <div id="booking-table">
            <table>
              <tr>
                <th>Room Type</th>
                <th>Check in</th>
                <th>Check out</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>{roomType}</td>
                <td>{check_in.slice(0,10)}</td>
                <td>{check_out.slice(0,10)}</td>
                <td>{total_price}</td>
                <td>Confirmed</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Confirm;
