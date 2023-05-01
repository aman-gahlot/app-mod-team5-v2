import { useState, useEffect } from "react";
import "./form.css";
import { book_room } from "../../utils/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import format from "date-fns/format";
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
  let navigate = useNavigate();
  function getFormData(e) {
    e.preventDefault()
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
    console.log("payload", data)
    axios.post(book_room, data).then((res => {
      console.log(res)
      localStorage.setItem("roomtype", res.data.roomtype);
      localStorage.setItem("check_in", res.data.check_in);
      localStorage.setItem("check_out", res.data.check_out);
      localStorage.setItem("total_price", res.data.total_price);
      console.log("roomtype", res.data.roomtype)
    }))
    setTimeout(() => {
      navigate('/confirmation')
    }, 1000);
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
          <form onSubmit={getFormData}>
            <div id="form-row user-name">
              <div className="this-form">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setfirstName(e.target.value)}
                  required
                  pattern="^[A-Za-z][A-Za-z0-9_]{2,20}$"
                />
              </div>
              <div className="this-form">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setlasttName(e.target.value)}
                  required
                  pattern="^[A-Za-z][A-Za-z0-9_]{2,20}$"

                />
              </div>
            </div>
            <div className="room-people">
              <div className="form-group col-md-6">
                <label htmlFor="noOfRooms">No of Rooms</label>
                <input
                  type="number"
                  className="form-control"
                  max="50"
                  min="1"
                  id="inputCity"
                  onChange={(e) => setnoOfRooms(e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="noOfPeople">No of People</label>
                <input
                  type="number"
                  max="40"
                  min="1"
                  className="form-control"
                  id="inputCity"
                  onChange={(e) => setnoOfPeople(e.target.value)}
                  required
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
                required
                pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                onChange={(e) => setphoneNumber(e.target.value)}
                required
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
                  required
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
                  required
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
                  required
                >
                  <option value=''>Choose...</option>
                  <option value="Cash">Cash</option>
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
                  required
                >
                  <option value=''>Choose...</option>
                  <option value="DELUXEPRIME">DELUXE PRIME</option>
                  <option value="DELUXESUPREME">DELUXE SUPREME</option>
                  <option value="EXCLUSIVECLUBSUITE">EXCLUSIVE CLUB SUITE</option>
                  <option value='IMPERIALCLUBROOM'>IMPERIAL CLUB ROOM</option>
                  <option value="REGALCLUBSUITE">REGAL CLUB SUITE</option>
                  <option value="TERRACECLUBSUITE">TERRACE CLUB SUITE</option>
                </select>
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary form-submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
