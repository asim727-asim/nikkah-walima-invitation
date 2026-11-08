import React from 'react';
import { Star, Crown, MapPin } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import DawatENikahSection from './DawatENikahSection';

export default function EventsSection() {
  const { events } = weddingData;
  const nikkahEvent = events.find((e) => e.id === 'nikkah') || events[0];
  const walimaEvent = events.find((e) => e.id === 'walima') || events[1];

  return (
    <section className="venue-section">
      <div className="venue-container scroll-animate">
        {/* 1. Nikkah Khwani */}
        {nikkahEvent && (
          <div className="luxury-event-card scroll-animate stagger-anim delay-1">
            <div className={`event-header-badge ${nikkahEvent.buttonStyle === 'primary' ? 'badge-primary' : 'badge-champagne'}`}>
              {nikkahEvent.badgeIcon === 'crown' ? (
                <Crown size={15} className="badge-icon-crown" />
              ) : (
                <Star size={15} className="badge-icon-star" />
              )}
              <span>{nikkahEvent.badgeTitle}</span>
            </div>

            <div className="event-illustration-container">
              <img
                src={nikkahEvent.image}
                alt={nikkahEvent.imageAlt}
                className="masjid-image"
                loading="lazy"
              />
            </div>

            <h3 className="event-date-display">
              {nikkahEvent.date}
            </h3>

            <p className="event-time-display">
              {nikkahEvent.time}
            </p>

            <div className="event-hairline-separator">
              <span className="hairline-line" />
              <span className="hairline-dot">✦</span>
              <span className="hairline-line" />
            </div>

            <h4 className="event-venue-heading">
              {nikkahEvent.venueName}
            </h4>

            {nikkahEvent.venueNameHindi && (
              <p className="event-venue-hindi">
                {nikkahEvent.venueNameHindi}
              </p>
            )}

            {nikkahEvent.venueAddress && (
              <p className="event-venue-address">
                {nikkahEvent.venueAddress}
              </p>
            )}

            <div className="event-map-btn-wrapper">
              <a
                href={nikkahEvent.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={nikkahEvent.buttonStyle === 'primary' ? 'luxury-map-btn primary' : 'luxury-map-btn champagne'}
                aria-label={`View ${nikkahEvent.venueName} location on Google Maps`}
              >
                <MapPin size={16} className="map-btn-icon" />
                <span>View Location on Google Maps</span>
              </a>
            </div>
          </div>
        )}

        {/* 2. Dawat-e-Nikah (Migrated Isolated Component) */}
        <DawatENikahSection />

        {/* 3. Dawat-e-Walima */}
        {walimaEvent && (
          <div className="luxury-event-card scroll-animate stagger-anim delay-3">
            <div className={`event-header-badge ${walimaEvent.buttonStyle === 'primary' ? 'badge-primary' : 'badge-champagne'}`}>
              {walimaEvent.badgeIcon === 'crown' ? (
                <Crown size={15} className="badge-icon-crown" />
              ) : (
                <Star size={15} className="badge-icon-star" />
              )}
              <span>{walimaEvent.badgeTitle}</span>
            </div>

            <div className="event-illustration-container">
              <img
                src={walimaEvent.image}
                alt={walimaEvent.imageAlt}
                className="venue-image"
                loading="lazy"
              />
            </div>

            <h3 className="event-date-display">
              {walimaEvent.date}
            </h3>

            <p className="event-time-display">
              {walimaEvent.time}
            </p>

            <div className="event-hairline-separator">
              <span className="hairline-line" />
              <span className="hairline-dot">✦</span>
              <span className="hairline-line" />
            </div>

            <h4 className="event-venue-heading">
              {walimaEvent.venueName}
            </h4>

            {walimaEvent.venueNameHindi && (
              <p className="event-venue-hindi">
                {walimaEvent.venueNameHindi}
              </p>
            )}

            {walimaEvent.venueAddress && (
              <p className="event-venue-address">
                {walimaEvent.venueAddress}
              </p>
            )}

            <div className="event-map-btn-wrapper">
              <a
                href={walimaEvent.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={walimaEvent.buttonStyle === 'primary' ? 'luxury-map-btn primary' : 'luxury-map-btn champagne'}
                aria-label={`View ${walimaEvent.venueName} location on Google Maps`}
              >
                <MapPin size={16} className="map-btn-icon" />
                <span>View Location on Google Maps</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

