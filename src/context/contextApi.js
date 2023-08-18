import React, { createContext, useState, useEffect } from "react";
import { SampleResponse } from "./SampleResponse"; // Import the data array
import { fetchDataFromApi } from "../utils/api"; // Import the API fetching function

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        // Comment out the API fetching code for now
        // fetchSelectedCategoryData(selectedCategory);

        // Instead, use the sample data from the array
        setSearchResults(SampleResponse);
    }, [selectedCategory]);

    // Comment out the fetchSelectedCategoryData function for now
    // const fetchSelectedCategoryData = (query) => {
    //     setLoading(true);
    //     fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
    //         setSearchResults(contents);
    //         setLoading(false);
    //     });
    // };

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
