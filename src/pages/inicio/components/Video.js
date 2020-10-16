import React from 'react'
import video from "../../../img/video.mp4";

export default function Video() {
    return (
        <div className="header-video">
            <video src={video} autoPlay muted loop type="video/mp4"/>
        </div>
    )
}
