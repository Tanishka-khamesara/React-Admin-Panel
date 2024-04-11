import { createContext } from "react";
import { useState } from 'react';
import { Content } from "../Components/Details/Content";
export const UserContext = createContext({});

const DataContext = ((props) => {
    const [colors, setColors] = useState({
        forbgBlue: "#141b2d",
        foricons: "#3da58a",
        forwordsgreen: "#46b59b",
        Searchbox:"#1f2a40"
    });
    const [details, setDetails] = useState(Content);
    // console.log(details);
    return (
        <>
            <UserContext.Provider value={{ colors, setColors,details,setDetails}}>
                {props.children}
        </UserContext.Provider>
        </>
    )
})
export default DataContext;