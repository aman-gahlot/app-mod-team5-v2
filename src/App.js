import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { MyContext } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import FormPage from "./components/form/Form";
import Confirm from "./pages/confirmation/Confirm";
import { useState } from "react";
function App() {
  let styleOne = {
    fontSize: "12px",
    color: "red", 
    width: "max-content", 
    padding: "3px", 
    fontWeight: "bold"
  }
  let styleTwo = {
    fontSize: "12px",
    backgroundColor: "#008009",
    color: "white", 
    width: "max-content", 
    padding: "3px", 
    borderRadius: "5px", 
    fontWeight: "bold"
  }
  console.log(styleOne);
  const [DeluxePrime, setDeluxePrime] = useState("Select date to check availablity")
  const [DELUXESUPREME, setDELUXESUPREME] = useState("Select date to check availablity")
  const [EXCLUSIVECLUBSUITE, setEXCLUSIVECLUBSUITE] = useState("Select date to check availablity")
  const [IMPERIALCLUBROOM, setIMPERIALCLUBROOM] = useState("Select date to check availablity")
  const [REGALCLUBSUITE, setREGALCLUBSUITE] = useState("Select date to check availablity")
  const [TERRACECLUBSUITE, setTERRACECLUBSUITE] = useState("Select date to check availablity")

  const [textstyle, setTextstyle] = useState(styleOne)
  const typeHandeler = (e) => {
    setDeluxePrime(`${e[0]} Rooms Left`)
    setDELUXESUPREME(`${e[1]} Rooms Left`)
    setEXCLUSIVECLUBSUITE(`${e[2]} Rooms Left`)
    setIMPERIALCLUBROOM(`${e[2]} Rooms Left`)
    setREGALCLUBSUITE(`${e[2]} Rooms Left`)
    setTERRACECLUBSUITE(`${e[2]} Rooms Left`)
    setTextstyle(styleTwo)
  }
  return (
    <MyContext.Provider value = {{DeluxePrime, DELUXESUPREME, EXCLUSIVECLUBSUITE, IMPERIALCLUBROOM, REGALCLUBSUITE, TERRACECLUBSUITE, typeHandeler}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/form" element={<FormPage/>}/>
        <Route path="/confirmation" element={<Confirm/>}/>
      </Routes>
    </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
