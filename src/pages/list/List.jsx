import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import { check_avalability } from "../../utils/config";
import axios from "axios";
const List = () => {
  const [DELUXE_PRIME, setDELUXE_PRIME] = useState();
  const [DELUXE_SUPREME, setDELUXE_SUPREME] = useState();
  const [EXECUTIVE_CLUB_SUITE, setEXECUTIVE_CLUB_SUITE] = useState();
  const [IMPERIAL_CLUB_ROOM, setIMPERIAL_CLUB_ROOM] = useState();
  const [REGAl_CLUB_SUITE, setREGAl_CLUB_SUITE] = useState();
  const [TERRACE_CLUB_SUITE, setTERRACE_CLUB_SUITE] = useState();
  let data = axios.get(check_avalability);
  data.then((res) => {
    setDELUXE_PRIME(res.data.DELUXE_PRIME);
    setDELUXE_SUPREME(res.data.DELUXE_SUPREME);
    setEXECUTIVE_CLUB_SUITE(res.data.EXECUTIVE_CLUB_SUITE);
    setIMPERIAL_CLUB_ROOM(res.data.IMPERIAL_CLUB_ROOM);
    setREGAl_CLUB_SUITE(res.data.REGAl_CLUB_SUITE);
    setTERRACE_CLUB_SUITE(res.data.TERRACE_CLUB_SUITE);
  });

  // const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [date, setDate] = useState(location.state.date);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);

  let cardData = [
    {
      id: 0,
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      roomName: "DELUXE PRIME",
      available: DELUXE_PRIME,
      price: 9000,
      text: "yet to be changed",
      area: "35 sq Mt",
      distance: "1 Km",
      rating: "7.2",
    },
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1334117334/photo/digital-render-of-large-hotel-suite-bedroom.jpg?b=1&s=170667a&w=0&k=20&c=J7QHUWAC5QZOMfvRW_eYJlNeHQA1VOgb9LNtU_ysRLU=",
      roomName: "DELUXE SUPREME",
      available: DELUXE_SUPREME,
      price: 14000,
      text: "yet to be changed",
      area: "48 sq Mt",
      distance: "1 Km",
      rating: "8.1",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      roomName: "EXECUTIVE CLUB SUITE",
      available: EXECUTIVE_CLUB_SUITE,
      price: 17000,
      text: "yet to be changed",
      area: "52 sq Mt",
      distance: "1 Km",
      rating: "8.4",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      roomName: "IMPERIAL CLUB ROOM",
      available: IMPERIAL_CLUB_ROOM,
      price: 19000,
      text: "yet to be changed",
      area: "60 sq Mt",
      distance: "1 Km",
      rating: "8.9",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/1372828302/photo/luxurious-hotel-room-with-luggage-trolley-double-bed-night-tables-tv-set-and-seaview-from-the.jpg?b=1&s=170667a&w=0&k=20&c=jxYByKt4ns0JuuFlJEP1oR-nSEXsyvJ5_skdN5d0igY=",
      roomName: "REGAL CLUB SUITE",
      available: REGAl_CLUB_SUITE,
      price: 22000,
      text: "yet to be changed",
      area: "67 sq Mt",
      distance: "1 Km",
      rating: "9.2",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/457980337/photo/bed-and-bathtub-in-modern-master-bedroom.jpg?b=1&s=170667a&w=0&k=20&c=18U5jJpmRI8FJyi99QhxsGpXMdCyskNdQzlNv6iKJxA=",
      roomName: "TERRACE CLUB SUITE",
      available: TERRACE_CLUB_SUITE,
      price: 32000,
      text: "yet to be changed",
      area: "80 sq Mt",
      distance: "1 Km",
      rating: "9.6",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          {/* <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div> */}
          <div className="listResult">
            {cardData.map(
              ({
                id,
                image,
                roomName,
                available,
                price,
                text,
                area,
                distance,
                rating,
              }) => {
                return (
                  <div key={id}>
                    <SearchItem
                      image={image}
                      roomName={roomName}
                      available={available}
                      price={price}
                      text={text}
                      area={area}
                      distance={distance}
                      rating={rating}
                    />
                  </div>
                );
              }
            )}
          </div>
          {/* <SearchItem available={DELUXE_SUPREME} />
            <SearchItem available={EXECUTIVE_CLUB_SUITE} />
            <SearchItem available={IMPERIAL_CLUB_ROOM} />
            <SearchItem available={REGAl_CLUB_SUITE} />
            <SearchItem available={TERRACE_CLUB_SUITE} /> */}
        </div>
      </div>
    </div>
  );
};

export default List;
