/**
 * Site Configuration
 * This file contains all configurable content for the website
 * Last updated: 2025-09-09T01:16:57.297Z
 */

// contactInfo configuration
export const contactInfo = {
  agent: {
    name: "Arslan Ahmed",
    photo: "http://localhost:3000/api/user-images/dd92931b-37f1-4612-86f3-c8bb5fe497b7?v=c8a45e6ac42cd93eacf747447b5e3817ec717dc2658c1d8af769f9b9a0f6978e",
    phone: "4166554850",
    email: "arslan@salesgenius.co",
    company: "Awesome Realty",
    license: "RECO #84397152",
    repo: "New-Listing-223"
  },
  social: {
    instagram: "https://instagram.com/awesomerealty",
    facebook: "https://facebook.com/awesomerealty",
    twitter: "https://twitter.com/executivehomesrealtyinc",
    linkedin: "https://linkedin.com/company/executivehomesrealtyinc"
  }
};

// galleryImages configuration
export const galleryImages = [
  {
    id: 1,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380373605-2912-80 John St-14.jpg",
    alt: "erw at 10 Morrison St #111",
    category: "interior"
  },
  {
    id: 2,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380373815-2912-80 John St-19.jpg",
    alt: "erw at 10 Morrison St #111",
    category: "kitchen"
  },
  {
    id: 3,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380373998-2912-80 John St-18.jpg",
    alt: "erw at 10 Morrison St #111",
    category: "bedroom"
  },
  {
    id: 4,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380374193-2912-80 John St-17.jpg",
    alt: "erw at 10 Morrison St #111",
    category: "bathroom"
  },
  {
    id: 5,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380374313-2912-80 John St-16.jpg",
    alt: "erw at 10 Morrison St #111",
    category: "exterior"
  },
  {
    id: 6,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380374503-2912-80 John St-15.jpg",
    alt: "erw at 10 Morrison St #111",
    category: "interior"
  },
  {
    id: 7,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380374660-2912-80 John St-21.jpg",
    alt: "erw at 10 Morrison St #111",
    category: "kitchen"
  },
  {
    id: 8,
    src: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380374843-2912-80 John St-20.jpg",
    alt: "erw at 10 Morrison St #111",
    category: "bedroom"
  }
];

// heroVideo configuration
// export const heroVideo = {
//   url: "",
//   type: "video/mp4",
//   autoplay: true,
//   loop: true,
//   muted: true,
//   playsInline: true
// };

// homeShowcaseSections configuration  
export const homeShowcaseSections = [
  {
    id: "section1",
    title: "2 Bedrooms",
    description: "erw",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380373605-2912-80 John St-14.jpg"
  },
  {
    id: "section2",
    title: "2 Bathrooms",
    description: "",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380373815-2912-80 John St-19.jpg"
  },
  {
    id: "section3",
    title: "3223 SqFt",
    description: "",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380373998-2912-80 John St-18.jpg"
  },
  {
    id: "section4",
    title: "$$4,344,334",
    description: "",
    imageUrl: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380374193-2912-80 John St-17.jpg"
  }
];

// neighborhood configuration
export const neighborhood = {
  name: "Toronto",
  city: "Toronto",
  description: "Toronto's premier destination for culture, dining, and urban living.",
  highlights: [
    "Steps to theaters, dining, and entertainment venues",
    "Direct access to PATH underground walkway", 
    "TTC subway and streetcar connections",
    "Walk to financial district and shopping",
    "Vibrant urban lifestyle with excellent walk score"
  ]
};

// neighborhoodAmenities configuration
export const neighborhoodAmenities = [
  {
    id: 1,
    name: "Local Grocery Store",
    distance: "0.2 miles",
    category: "shopping",
    iconName: "ShoppingBag"
  },
  {
    id: 2,
    name: "Nearby Park",
    distance: "0.1 miles", 
    category: "recreation",
    iconName: "Leaf"
  },
  {
    id: 3,
    name: "Public School",
    distance: "0.6 miles",
    category: "education", 
    iconName: "School"
  },
  {
    id: 4,
    name: "Fine Dining",
    distance: "0.2 miles",
    category: "dining",
    iconName: "Wine"
  },
  {
    id: 5,
    name: "Casual Dining",
    distance: "0.4 miles",
    category: "dining",
    iconName: "Utensils"
  },
  {
    id: 6,
    name: "Transit Station",
    distance: "0.4 miles",
    category: "transportation",
    iconName: "Train"
  }
];

// neighborhoodStats configuration
export const neighborhoodStats = [
  {
    id: 1,
    title: "Walk Score",
    value: "95/100",
    caption: "Walker's Paradise",
    iconName: "BadgeCheck",
    color: "bg-green-500"
  },
  {
    id: 2,
    title: "Transit Score", 
    value: "94/100",
    caption: "Excellent Transit",
    iconName: "Compass",
    color: "bg-blue-500"
  },
  {
    id: 3,
    title: "School Rating",
    value: "8/10", 
    caption: "Great Schools",
    iconName: "School",
    color: "bg-indigo-500"
  },
  {
    id: 4,
    title: "Commute Time",
    value: "8 min",
    caption: "To Financial District",
    iconName: "Clock", 
    color: "bg-amber-500"
  }
];

// openHouseBenefits configuration
export const openHouseBenefits = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 2 bedroom, 2 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Detached sales in Toronto.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information", 
    description: "erw",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// openHouseDetails configuration
export const openHouseDetails = {
  nextDate: "Tuesday, September 9, 2025",
  time: "2:00 PM - 4:00 PM",
  host: "Arslan Ahmed",
  phone: "4166554850",
  email: "arslan@salesgenius.co",
  ctaText: "RSVP for Open House",
  virtualTourAvailable: false,
  virtualTourUrl: "",
  allOpenHouses: [{"date":"Tuesday, September 9, 2025","time":"2:00 PM - 4:00 PM"},{"date":"Saturday, September 13, 2025","time":"2:00 PM - 4:00 PM"}]
};

// packageItems configuration
export const packageItems = [
  {
    id: 1,
    title: "Detailed Floor Plans",
    description: "Complete architectural layouts showing the 2 bedroom, 2 bathroom configuration with precise measurements.",
    iconName: "FileText"
  },
  {
    id: 2,
    title: "Recent Neighborhood Sales",
    description: "Comparative market analysis of recent Detached sales in Toronto.",
    iconName: "BarChart2"
  },
  {
    id: 3,
    title: "School District Information", 
    description: "erw",
    iconName: "GraduationCap"
  },
  {
    id: 4,
    title: "Property Inspection Report",
    description: "Professional assessment highlighting recent upgrades and maintenance history.",
    iconName: "CheckSquare"
  },
  {
    id: 5,
    title: "Financing Options Guide",
    description: "Current mortgage rates and financing programs available for this price range.",
    iconName: "DollarSign"
  },
  {
    id: 6,
    title: "Neighborhood Amenities Map",
    description: "Interactive guide to nearby amenities and transportation options.",
    iconName: "Map"
  }
];

// property configuration
export const property = {
  name: "10 Morrison St #111",
  address: {
    street: "10 Morrison St #111",
    city: "Toronto",
    state: "ON",
    zip: "M5V2T8",
    country: "Canada"
  },
  price: "$4,344,334",
  beds: 2,
  baths: 2,
  sqft: 3223,
  lotSize: "30 x 120 ft",
  yearBuilt: 2010,
  type: "Detached",
  status: "For Sale",
  description: "rew",
  shortDescription: "2 BEDS + 2 BATHS in Toronto",
  longDescription: "edew",
  mainFeatures: [],
  propertyType: "Detached",
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380373605-2912-80 John St-14.jpg",
  heroCaption: "Detached + Privacy + Downtown= Your Perfect Home Just Listed!"
};

// propertyFeatures configuration
export const propertyFeatures = [
  "erw",
  "ewr"
];

// siteBranding configuration
export const siteBranding = {
  logoUrl: "/logo.svg",
  logoAlt: "10 Morrison St #111",
  favicon: "/favicon.ico",
  colors: {
    primary: "#D9A566",
    primaryDark: "#8B6839", 
    primaryLight: "#E6C38C",
    dark: "#111111",
    light: "#FFFFFF"
  },
  heroImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380373605-2912-80 John St-14.jpg",
  footer: {
    copyrightText: "© 2024 10 Morrison St #111. All rights reserved.",
    disclaimer: "This website is for informational purposes only. Details are subject to change."
  }
};

// siteMetadata configuration
export const siteMetadata = {
  title: "10 Morrison St #111 | Detached | Toronto",
  description: "Detached + Privacy + Downtown= Your Perfect Home Just Listed!",
  keywords: "detached, Toronto real estate, 2 bedroom, 2 bathroom, $4,344,334",
  ogImage: "https://salesgenius.s3.ca-central-1.amazonaws.com/uploads/1757380373605-2912-80 John St-14.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
  canonical: "https://10morrisonst#111.com"
};

// testimonials configuration
export const testimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "Recent Homebuyer", 
    content: "Arslan Ahmed provided exceptional service and found us exactly what we were looking for in Toronto.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 2,
    name: "Jennifer Liu",
    role: "Interior Designer",
    content: "The attention to detail and quality of finishes in this property is outstanding. Arslan Ahmed presented every detail clearly.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mark Williams", 
    role: "Neighborhood Resident",
    content: "Living in this area, you appreciate the convenience and lifestyle. Arslan Ahmed knows the market incredibly well.",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg"
  }
];