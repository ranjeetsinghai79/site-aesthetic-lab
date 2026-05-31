import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Aesthetic Lab Inc.",
    tagline: "Look Your Best, Feel Amazing",
    phone: "(209) 554-5595",
    phoneHref: "tel:+12095545595",
    email: "info@aestheticlabinc.com",
    address: "2909 Coffee Rd Suite 12 D, Modesto, CA 95355, United States",
    city: "Modesto",
    serviceAreas: ["Modesto, CA"],
    license: "Licensed & Certified Professionals",
    since: "2020",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "forest",
    niche: "medspa",
  },

  services: [
    { icon: "sparkles", title: "Fillers & Neurotoxins", desc: "Enhance your natural beauty with expertly administered dermal fillers and neurotoxins for a refreshed look.", urgent: false },
    { icon: "star", title: "Neogen® PSR Skin Rejuvenation", desc: "Achieve dramatic skin rejuvenation, improving texture, tone, and elasticity with advanced Neogen® PSR technology.", urgent: false },
    { icon: "scissors", title: "Laser Hair & Tattoo Removal", desc: "Experience effective and lasting solutions for unwanted hair and tattoos with our state-of-the-art laser treatments.", urgent: false },
    { icon: "heart", title: "EMSCULPT® NEO & Weight Loss", desc: "Sculpt your body and manage your weight with EMSCULPT® NEO for muscle building and fat reduction, alongside personalized plans.", urgent: false },
    { icon: "droplets", title: "HydraFacial & Chemical Peels", desc: "Deeply cleanse, extract, and hydrate your skin with HydraFacial, or revitalize with customized chemical peels for a radiant complexion.", urgent: false },
    { icon: "thermometer", title: "Hormone Optimization & NAD+", desc: "Restore balance and boost your vitality with personalized hormone optimization and NAD+ therapy for overall wellness.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Modesto, CA", stars: 5, text: "I had a HydraFacial with Aesthetic Lab Inc. last month, and my skin has never looked better! The esthetician was incredibly knowledgeable and made me feel so comfortable. My complexion is brighter, and the fine lines are less noticeable. I've already booked my next appointment!" },
    { name: "Mark T.", location: "Ceres, CA", stars: 5, text: "After struggling with stubborn fat, I decided to try EMSCULPT® NEO. The team at Aesthetic Lab Inc. was fantastic, explaining every step. After just a few sessions, I'm seeing real results in my abdomen. It's truly boosted my confidence, and I appreciate their professional approach." },
    { name: "Jessica R.", location: "Turlock, CA", stars: 5, text: "My experience with fillers at Aesthetic Lab Inc. was wonderful. The injector was precise and understood exactly the subtle enhancement I was looking for. The results are incredibly natural, and I feel so much more refreshed. The clinic is beautiful, and the staff are all so welcoming." }
  ],

  trustBadges: [
    "Board-Certified Practitioners", "Personalized Treatment Plans", "Advanced Technology", "5-Star Client Reviews", "Licensed & Insured", "Complimentary Consultations"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Happy Clients", suffix: "+", decimals: 0 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Certified Experts", desc: "Our team consists of highly trained and certified medical professionals dedicated to your aesthetic goals." },
    { icon: "sparkles", title: "Personalized Care", desc: "We create customized treatment plans tailored to your unique needs and desired outcomes." },
    { icon: "shield-check", title: "Advanced Technology", desc: "Utilizing the latest, most effective technologies for safe and superior results." },
    { icon: "heart", title: "Client-Focused Approach", desc: "Your comfort, safety, and satisfaction are our top priorities from consultation to aftercare." },
    { icon: "star", title: "Exceptional Results", desc: "Committed to delivering natural-looking, transformative results that enhance your confidence." },
    { icon: "thumbs-up", title: "Transparent Pricing", desc: "Clear, upfront pricing with no hidden fees, ensuring you know exactly what to expect." }
  ],

  formServiceOptions: ["Fillers", "Neogen® PSR Skin Rejuvenation", "Sculptra®", "Neurotoxins", "Tattoo Removal", "Laser Skin Rejuvenation", "EMSCULPT® NEO", "HydraFacial", "Weight Loss Management", "PDO Thread Facelift", "Microneedling", "Hair Restoration", "Kybella®", "Facial Treatments", "Skin Rejuvenation", "Laser Hair Removal", "NAD+ Therapy", "Hormone Optimization & Pellet Therapy", "Aura Skin Analysis", "Botox", "Dysport", "Jeuveau", "Picoway Resolve", "Hyaluronidase", "Chemical peels", "Medical grade skin care", "PRP/Stem Cell"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!