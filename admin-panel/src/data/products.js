// src/data/mockProducts.js
export const mockProducts = [
  {
    "_id": "prod_1",
    "title": "AIR MASSAGER",
    "slug": "air-massager",
    "image": "/mock-images/the-air-massager.png", // Using local paths for now
    "description": "A therapeutic device that uses air pressure to gently massage legs, arms, or feet.",
    "additionalFeatures": [
      "Enhances blood flow and promotes lymphatic drainage.",
      "Supports heat therapy for added comfort."
    ],
    "technicalDetails": {
      "Input Voltage": "12V DC Rechargeable Battery",
      "Pressure Range": "0 - 270mmHg",
      "Massage Modes": "Kneading / Pulsing"
    }
  },
  {
    "_id": "prod_2",
    "title": "LIFT SOUND CARD",
    "slug": "lift-sound-card",
    "image": "/mock-images/the-lift-sound-card.png",
    "description": "A microcontroller-based audio module designed for elevator systems to provide clear, automatic audio announcements.",
    "additionalFeatures": [
      "Plays pre-recorded floor numbers, directions, and emergency messages.",
      "Integrates with lift controllers via Relay or RS485."
    ],
    "technicalDetails": {
      "Input Voltage": "12V - 36V DC",
      "Storage": "MicroSD Card",
      "Audio Format": "WAV"
    }
  }
];