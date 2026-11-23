export const EVENT_DATA = {
  eventName: "Dhani Birthday Lunch",
  celebrant: "Dhani",
  title: "BIRTHDAY LUNCH INVITATION",
  tagline: "SPECIAL EDITION PACKAGING / VOL. 2026",
  edition: "ED. 28-11-2026 // LIMITED RELEASE",
  date: "Sabtu, 28 November 2026",
  rawDate: "2026-11-28",
  time: "Lunch Time (12:00 WIB - Selesai)",
  location: "Secret Location",
  locationDetails: "Direction by your princess 👑",
  notes: "A VIP gathering filled with good food, sweet memories, and Y2K street style energy.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Secret+Location+Birthday+Lunch",
  dressCode: {
    theme: "Boyish Street Graphic — Dominant Navy & Slight Purple",
    description: "Tampil keren dan santai dengan gaya streetwear era Y2K bernuansa dominan Biru Navy, dipadukan dengan aksen subtle purple dan sentuhan metallic silver.",
    colors: [
      { name: "Navy Blue", hex: "#12224A" },
      { name: "Midnight Navy", hex: "#0A1128" },
      { name: "Accent Purple", hex: "#8B5CF6" },
      { name: "Metallic Silver", hex: "#DCD9E2" },
      { name: "Off-White", hex: "#F8F5EF" }
    ],
    items: [
      "Oversized Navy Graphic Tee / Boxy Hoodie",
      "Baggy Denim / Cargo Pants / Parachute",
      "Retro Chunky Sneakers / Skate Shoes",
      "Silver Chains, Rings & Metallic Accents",
      "Beanie, Cap, or Street Eyewear"
    ]
  },
  rsvp: {
    whatsappNumber: "6281234567890", // Standard placeholder that can be easily customized
    message: "Halo Dhani! Aku siap hadir merayakan Birthday Lunch kamu pada 28 November 2026! Can't wait! 🎉💜",
    getWhatsappUrl() {
      const text = encodeURIComponent(this.message);
      return `https://wa.me/?text=${text}`;
    }
  },
  closingMessage: "Can't wait to celebrate this special day with you! See you there!"
};
