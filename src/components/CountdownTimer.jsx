import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function CountdownTimer({ show }) {
  const { scratchSection } = weddingData;
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const targetTime = new Date(scratchSection.countdownTarget).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days < 10 ? `0${days}` : String(days),
        hours: hours < 10 ? `0${hours}` : String(hours),
        minutes: minutes < 10 ? `0${minutes}` : String(minutes),
        seconds: seconds < 10 ? `0${seconds}` : String(seconds)
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [scratchSection.countdownTarget]);

  useEffect(() => {
    if (show) {
      const el = document.getElementById('hiddenCountdown');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [show]);

  return (
    <div id="hiddenCountdown" className={`hidden-countdown ${show ? 'show' : ''}`}>
      {scratchSection.eventsSummary && (
        <div className="scratch-events-summary">
          {scratchSection.eventsSummary.map((evt, idx) => (
            <div
              key={evt.id || idx}
              className={`scratch-event-card ${evt.isBlush ? 'scratch-event-card-blush' : ''}`}
            >
              <div className="card-frame">
                {/* Delicate ornamental gold corner decorations */}
                <span className="card-corner corner-tl" aria-hidden="true" />
                <span className="card-corner corner-tr" aria-hidden="true" />
                <span className="card-corner corner-bl" aria-hidden="true" />
                <span className="card-corner corner-br" aria-hidden="true" />

                {/* Event Heading & Decorative line */}
                <div className="card-top-header">
                  <span className="event-badge-label">{evt.heading || evt.title}</span>
                  <div className="card-ornament-line" aria-hidden="true">
                    <span className="ornament-line-half" />
                    <span className="ornament-sparkle">✦</span>
                    <span className="ornament-line-half" />
                  </div>
                </div>

                {/* Card Main: Left Illustration + Vertical Divider + Right Details */}
                <div className="card-main-content">
                  {evt.image && (
                    <div className="card-illustration-wrap">
                      <img
                        src={evt.image}
                        alt={evt.imageAlt || evt.name || evt.eventName}
                        className="card-illustration-img"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="card-vertical-divider" aria-hidden="true" />

                  <div className="card-info-wrap">
                    {(evt.name || evt.eventName) && (
                      <h4 className="event-badge-name">{evt.name || evt.eventName}</h4>
                    )}
                    <div className="event-meta-item">
                      <Calendar size={13} className="meta-icon" aria-hidden="true" />
                      <span className="event-badge-date">{evt.date}</span>
                    </div>
                    <div className="event-meta-item">
                      <Clock size={13} className="meta-icon" aria-hidden="true" />
                      <span className="event-badge-time">{evt.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="countdown-eyebrow">
        SAVE THE DATE
      </p>

      <h2 className="countdown-date">
        {scratchSection.countdownDisplayDate}
      </h2>

      <div className="timer">
        <div className="time-block">
          <span>{timeLeft.days}</span>
          <p>DAYS</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.hours}</span>
          <p>HOURS</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.minutes}</span>
          <p>MINUTES</p>
        </div>
        <div className="time-block">
          <span>{timeLeft.seconds}</span>
          <p>SECS</p>
        </div>
      </div>
    </div>
  );
}

