import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
    const videoLengthInMinutes = Math.floor(time / 60);
    const videoLengthInSeconds = time % 60;

    let formattedVideoLength;
    if (videoLengthInMinutes >= 60) {
        formattedVideoLength = moment()
            .startOf("day")
            .seconds(time)
            .format("H:mm:ss");
    } else {
        formattedVideoLength = moment()
            .startOf("day")
            .minutes(videoLengthInMinutes)
            .seconds(videoLengthInSeconds)
            .format("mm:ss");
    }

    return (
        <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
            {formattedVideoLength}
        </span>
    );
};

export default VideoLength;
