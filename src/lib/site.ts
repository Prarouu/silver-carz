// Single source of truth for business information.
// Update here — header, footer, contact, metadata, and structured data all read from this.

export const site = {
  name: "Silver Carz",
  legalName: "Silver Carz Premium Car Detailing",
  domain: "https://silvercarz.com",
  phone: "+91 90284 68412",
  phoneHref: "tel:+919028468412",
  // WhatsApp number that receives booking requests (country code, no "+").
  // TODO: temporary number — replace with the business number later.
  whatsappNumber: "917276038998",
  address: {
    street: "Mangalmurti Square, Rajendra Nagar, Takli Seem",
    city: "Nagpur",
    state: "Maharashtra",
    postalCode: "440036",
    country: "IN",
  },
  // Approximate coordinates for Rajendra Nagar, Nagpur.
  // TODO: confirm exact pin with the owner (Google Maps share link).
  geo: { latitude: 21.1035, longitude: 79.0459 },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "19:00",
    label: "Mon–Sat · 10:00 AM – 7:00 PM",
  },
  serviceAreas: [
    "Rajendra Nagar",
    "Takli Seem",
    "Manish Nagar",
    "Somalwada",
    "Khamla",
    "Pratap Nagar",
    "Trimurti Nagar",
    "Wardha Road",
    "Hingna",
    "Nagpur",
  ],
} as const;

export const whatsappLink = (text: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

const fullAddress = `Silver Carz, ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`;

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  fullAddress
)}`;

// Keyless Google Maps embed — fully interactive (pan/zoom/street view), no API key needed.
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  fullAddress
)}&z=16&output=embed`;
