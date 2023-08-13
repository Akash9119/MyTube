import React, { useContext, useEffect, useState, useCallback } from "react";
import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";
import { fetchDataFromApi } from "../utils/api"; // Import your API fetching function here

const Feed = () => {
  const { loading, searchResults, setSearchResults } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  const fetchMoreData = useCallback(async () => {
    try {
      const response = await fetchDataFromApi(`video/more-contents/?page=${currentPage}`);
      const newData = response.contents;
      setSearchResults((prevResults) => [...prevResults, ...newData]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  }, [currentPage, setSearchResults]);

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (windowHeight + scrollTop >= documentHeight - 100) {
      fetchMoreData();
    }
  }, [fetchMoreData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((item, index) => {
              if (item.type !== "video") return null;
              return (
                <VideoCard key={item?.video?.id || index} video={item?.video} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
