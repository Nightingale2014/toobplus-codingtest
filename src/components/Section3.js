import React, { useState } from "react";
import "./Section3.css";

function Section3() {
    const [clickCount, setClickCount] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
        setTotalClicks(totalClicks + 1);
    };

    return (
        <section id="section3" className="section3">
            {/* 1번 div */}
            <div className="box box1">
                <div className="overlay">Hello World</div>
            </div>

            {/* 2번 div */}
            <div className="box box2"></div>

            {/* 3번 div */}
            <div className="box box3" onClick={handleClick}>
                <div className="inner inner1" data-clicks={totalClicks}></div>
                <div className="inner inner2" data-clicks={clickCount}></div>
            </div>
        </section>
    );
}

export default Section3;
