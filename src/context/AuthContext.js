import { createContext } from 'react';

export const MyContext = createContext("");
















// import React, { createContext, useState } from "react";
// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const [basictype, setBasictype] = useState("NA");
//   const [standardtype, setStandardtype] = useState("NA");
//   const [premiumtype, setPremiumtype] = useState("NA")
//   return (
//     <UserContext.Provider value={{ basictype, standardtype, premiumtype }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// const withUser = (Child) => (props) => (
//   <UserContext.Consumer>
//     {(context) => <Child {...props} {...context} />}
//     {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
//   </UserContext.Consumer>
// );

// export { UserProvider, withUser };