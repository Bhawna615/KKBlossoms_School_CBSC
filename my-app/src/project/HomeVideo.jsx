import React, { useState } from "react";
import "./HomeVideo.css";
import video1 from './video/video1.mp4';
import video2 from './video/video2.mp4';
import video3 from './video/video3 - Trim.mp4';
import { Fade } from "react-awesome-reveal";

const updates = [
    {
        id: 1,
        title: "Art Video 1",
        file: video1,
        type: "video",
        date: "2025-08-20"
    },
    {
        id: 2,
        title: "Art Video 2",
        file: video2,
        type: "video",
        date: "2025-08-18"
    },
    {
        id: 3,
        title: "Art Video 3",
        file: video3,
        type: "video",
        date: "2025-08-19"
    }
];

function HomeVideo() {
    const currentDate = new Date();
    const [popupData, setPopupData] = useState(null);

    const isNew = (dateString) => {
        const updateDate = new Date(dateString);
        const diffTime = currentDate - updateDate;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);
        return diffDays <= 7;
    };

    const openPopup = (update) => {
        setPopupData(update);
    };

    const closePopup = () => {
        setPopupData(null);
    };

    const getFadeDirection = (index) => {
        if (index === 0) return "left";
        if (index === 1) return "down";
        return "right";
    };

    return (
        <div className="updates-section">
            {/* Updates Title */}
            <Fade direction="down" triggerOnce={false}>
                <h2 className="updates-title">LATEST UPDATES</h2>
            </Fade>
            {/* Highlight Heading */}
            <Fade direction="down" triggerOnce={false}>
                <h2 className="highlight-heading">
                    <span>Independence Day</span> Celebrations
                </h2>
            </Fade>

            {/* Updates Grid */}
            <div className="updates-grid">
                {updates.map((update, index) => (
                    <Fade
                        key={update.id}
                        direction={getFadeDirection(index)}
                        triggerOnce={false}
                    >
                        <div
                            className="update-card"
                            onClick={() => openPopup(update)}
                        >
                            <div className="media-wrapper">
                                <div className="video-thumbnail">
                                    <video
                                        style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "10px" }}
                                        muted
                                        poster=""
                                    >
                                        <source src={update.file} type="video/mp4" />
                                    </video>
                                    <span className="video-icon">▶</span>
                                </div>
                                <span className="badge-new">NEW</span>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>

            {/* Popup for Video */}
            {popupData && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div
                        className="popup-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="popup-close" onClick={closePopup}>
                            &times;
                        </button>
                        <video
                            controls
                            autoPlay
                            style={{ width: "90vw", maxWidth: "900px", maxHeight: "80vh", borderRadius: "10px", background: "#000" }}
                        >
                            <source src={popupData.file} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomeVideo;