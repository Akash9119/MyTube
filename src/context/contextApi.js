// import React, { createContext, useState, useEffect } from "react";

// import { fetchDataFromApi } from "../utils/api";
// export const Context = createContext();

// export const AppContext = (props) => {
//     const [loading, setLoading] = useState(false);
//     const [searchResults, setSearchResults] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("New");
//     const [mobileMenu, setMobileMenu] = useState(false);

//     useEffect(() => {
//         fetchSelectedCategoryData(selectedCategory);
//     }, [selectedCategory]);

//     const fetchSelectedCategoryData = (query) => {
//         setLoading(true);
//         fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
//             setSearchResults(contents);
//             setLoading(false);
//         });
//     };

//     return (
//         <Context.Provider
//             value={{
//                 loading,
//                 setLoading,
//                 searchResults,
//                 selectedCategory,
//                 setSelectedCategory,
//                 mobileMenu,
//                 setMobileMenu,
//             }}
//         >
//             {props.children}
//         </Context.Provider>
//     );
// };


// AppContext.js
import React, { createContext, useState } from "react";
import { SampleResponse } from "./SampleResponse"; // Import the data array

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(SampleResponse); // Use videoData array
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    // No need for useEffect and fetchDataFromApi here

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
