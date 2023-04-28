import { useState, useEffect } from "react";
import "./form.css";
import { book_room } from "../../utils/config";
import axios from "axios";
function FormPage() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlasttName] = useState("");
  const [noOfRooms, setnoOfRooms] = useState("");
  const [noOfPeople, setnoOfPeople] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [checkInDate, setcheckInDate] = useState("");
  const [checkOutDate, setcheckOutDate] = useState("");
  const [modeOfPayment, setmodeOfPayment] = useState("");
  const [roomType, setroomType] = useState("");
  const [email, setemail] = useState("");
  function getFormData() {
    // alert(
    //   `Full Name: ${firstName} ${lastName}, noOfRooms: ${noOfRooms}, noOfPeople: ${noOfPeople}, phoneNumber: ${phoneNumber}, checkInDaate: ${checkInDate}, checkOutDate: ${checkOutDate}, modeOfPayment: ${modeOfPayment}, roomType: ${roomType}, email: ${email}`
    // );
    let data = {
      "firstname": firstName,
      "lastname": lastName,
      "no_of_room": noOfRooms,
      "no_of_people": noOfPeople,
      "email": email,
      "phoneno": phoneNumber,
      "check_in": checkInDate,
      "check_out": checkOutDate,
      "payment_method": modeOfPayment,
      "roomtype": roomType,
    };
    console.log("payload",data)
    axios.post(book_room, data).then((res=>{
      console.log(res)
    }))
  }
    // https://appmodteam5.azurewebsites.net/api/API?firstName=vishesh&lastName=garg&noOfRooms=1&no_of_people=2&email=vishesh8199@gmail.com&phone=97847873224&check_in=3/3/2023&check_out=4/3/2023&paymentMethod=Cash&roomType=DELUXE_PRIME
  return (
    <div id="form-page">
      <div className="image-side">
        <img
          src="https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="my-form">
        <div className="form-row">
          <div id="form-row user-name">
            <div className="this-form">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div className="this-form">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setlasttName(e.target.value)}
              />
            </div>
          </div>
          <div className="room-people">
            <div className="form-group col-md-6">
              <label htmlFor="noOfRooms">No of Rooms</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                onChange={(e) => setnoOfRooms(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="noOfPeople">No of People</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                onChange={(e) => setnoOfPeople(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              onChange={(e) => setphoneNumber(e.target.value)}
            />
          </div>
          <div className="date-picker">
            <div className="form-group col-md-6">
              <label htmlFor="checkIn">Check In</label>
              <br />
              <span className="icon_calendar"></span>
              <input
                type="date"
                className="datepicker_pop check__in form-control"
                onChange={(e) => setcheckInDate(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="checkOut">Check Out</label>
              <br />
              <span className="icon_calendar"></span>
              <input
                type="date"
                className="datepicker_pop check__in form-control"
                onChange={(e) => setcheckOutDate(e.target.value)}
              />
            </div>
          </div>
          <div className="pay-mode">
          <div className="form-group col-md-4">
            <label htmlFor="paymentMode">Mode of Payment</label>
            <select
              id="paymentMode"
              className="form-control"
              onChange={(e) => setmodeOfPayment(e.target.value)}
            >
              <option selected>Choose...</option>
              <option>Cash</option>
              {/* <option>UPI</option>
              <option>Debit Card</option> */}
            </select>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="rommType">Room Type</label>
            <select
              id="rommType"
              className="form-control"
              onChange={(e) => setroomType(e.target.value)}
            >
              <option>Choose...</option>
              <option>DELUXEPRIME</option>
              <option>DELUXESUPREME</option>
              <option>EXECUTIVECLUBSUITE</option>
              <option>IMPERIALCLUBROOM</option>
              <option>REGALCLUBSUITE</option>
              <option>TERRACECLUBSUITE</option>
            </select>
          </div>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary form-submit"
            onClick={getFormData}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
