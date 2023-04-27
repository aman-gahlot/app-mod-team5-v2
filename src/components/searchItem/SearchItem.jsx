import "./searchItem.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SearchItem = (props) => {
  const [availableRooms, setAvailableRooms] = useState('See availability')
  const navigate = useNavigate()
  const availableRoomsHandeler = () => {
    setAvailableRooms(props.available)
  }
  
  return (
    <div className="searchItem">  
      <img
        src={props.image}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.roomName}</h1>
        <span className="siDistance">{props.distance} from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Complementry Wi-Fi & Toiletries
        </span>
        <span className="siFeatures">
          {props.area} 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{props.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs. {props.price}</span>
          <button className="siCheckButton" onClick={availableRoomsHandeler}>{availableRooms}</button>
          <button className="siBookButton" onClick={()=> navigate('/form')}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
