import React from 'react';
import { Star, MapPin } from 'lucide-react';
import './DawatENikahSection.css';

export default function DawatENikahSection() {
  return (
    <div className="dawat-e-nikah-card scroll-animate stagger-anim delay-2">
      {/* Category Badge */}
      <div className="dawat-e-nikah-badge">
        <Star size={15} className="dawat-e-nikah-badge-star" />
        <span>DAWAT-E-NIKAH</span>
      </div>

      {/* Mosque Illustration */}
      <div className="dawat-e-nikah-illustration-container">
        <img
          src="/assets/masjid-CpSqpTFh.png"
          alt="Noor-e-Mohammadi Ahle Sunnat Masjid"
          className="dawat-e-nikah-masjid-image"
          loading="lazy"
        />
      </div>

      {/* Event Date Heading */}
      <h3 className="dawat-e-nikah-date">
        Friday, 18 December 2026
      </h3>

      {/* Event Time */}
      <p className="dawat-e-nikah-time">
        ⏰ After Magrib at
      </p>

      {/* Subtle Ornamental Hairline */}
      <div className="dawat-e-nikah-separator" aria-hidden="true">
        <span className="dawat-e-nikah-separator-line" />
        <span className="dawat-e-nikah-separator-dot">✦</span>
        <span className="dawat-e-nikah-separator-line" />
      </div>

      {/* Mosque Name (English) & Subtitle */}
      <h4 className="dawat-e-nikah-venue-name">
        Noor-e-Mohammadi Ahle Sunnat Masjid
        <span className="dawat-e-nikah-venue-subtitle"> (Sunni Masjid)</span>
      </h4>

      {/* Mosque Name (Hindi) */}
      <p className="dawat-e-nikah-venue-hindi">
        नूर-ए-मोहम्मदी अहले सुन्नत मस्जिद (सुन्नी मस्जिद)
      </p>

      {/* Venue Address */}
      <p className="dawat-e-nikah-venue-address">
        20, Bandra Kurla Complex Rd, G Block BKC, Bharat Nagar,{"\n"}
        Bandra East, Mumbai, Maharashtra 400051
      </p>

      {/* Google Maps Button */}
      <div className="dawat-e-nikah-btn-wrapper">
        <a
          href="https://maps.app.goo.gl/f6ZwKYVKZFkmS7w17"
          target="_blank"
          rel="noopener noreferrer"
          className="dawat-e-nikah-map-btn"
          aria-label="View Noor-e-Mohammadi Ahle Sunnat Masjid location on Google Maps"
        >
          <MapPin size={16} className="dawat-e-nikah-btn-icon" />
          <span>View Location on Google Maps</span>
        </a>
      </div>
    </div>
  );
}

