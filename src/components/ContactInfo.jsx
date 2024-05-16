import React, { useState, useEffect } from "react";

export function ContactInfo() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    function calculateTimeLeft() {
        let year = new Date().getFullYear();
        let difference = +new Date(`${year}-12-31T00:00:00`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <h2 className="fs-1 mb-3 text-uppercase fw-bold">Where To Find Us</h2>
            <p className="mb-5">Aswan Alsadat St.</p>
            <h3 className="mb-3">Opening Countdown</h3>
            <div className="alert alert-info mt-3">
                <h1 className="display-1">
                    {timeLeft.hours ? `${timeLeft.hours}h ` : ""}
                    {timeLeft.minutes ? `${timeLeft.minutes}m ` : ""}
                    {timeLeft.seconds ? `${timeLeft.seconds}s` : ""}
                </h1>
            </div>
        </div>
    );
}