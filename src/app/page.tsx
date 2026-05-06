"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Clock, Compass, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="medium"
        background="fluid"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "#hero" },
        { name: "Fleet", id: "#fleet" },
        { name: "Services", id: "#features" },
        { name: "Contact", id: "#contact" },
      ]}
      brandName="HenaGlobal Luxury Flight"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{ variant: "gradient-bars" }}
      title="Redefining Luxury Aviation"
      description="Experience unparalleled comfort, safety, and efficiency with our world-class private jet charter services."
      testimonials={[
        { name: "Alex Rivet", handle: "@alexrivet", testimonial: "Exceptional service, completely seamless travel experience.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1" },
        { name: "Maria Garcia", handle: "@mgarcia", testimonial: "The best private jet experience I've had to date.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg?_wi=1" },
        { name: "John Doe", handle: "@jdoe", testimonial: "Professional, punctual, and truly luxurious.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg?_wi=1" },
        { name: "Sarah Lee", handle: "@slee", testimonial: "HenaGlobal Luxury Flight is my go-to choice for all business travel.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg?_wi=1" },
        { name: "Mike Ross", handle: "@mross", testimonial: "Unmatched attention to detail and personalized service.", rating: 5, imageSrc: "https://img.b2bpic.net/free-photo/close-up-young-businessman-talking-mobile-phone-with-wireless-earphone-his-ears_23-2148176222.jpg" },
      ]}
      tag="Private Aviation Excellence"
      buttons={[{ text: "Book a Flight", href: "#contact" }, { text: "Our Fleet", href: "#fleet" }]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/a-stunning-high-resolution-shot-of-a-mod-1778092423820-c88d6150.png?_wi=1"
      avatars={[
        { src: "https://img.b2bpic.net/free-photo/executive-with-good-future_1098-540.jpg", alt: "Executive profile" },
        { src: "https://img.b2bpic.net/free-photo/woman-white-shirt-showing-emotions-blue_1303-29741.jpg", alt: "Client profile" },
        { src: "https://img.b2bpic.net/free-photo/medium-shot-woman-posing-indoors_23-2149915935.jpg", alt: "Partner profile" },
        { src: "https://img.b2bpic.net/free-photo/portrait-asian-business-man-business-district-senior-visionary-executives-leader-with-business-vision-lifestyle-business-people-concept_1150-34735.jpg", alt: "Leadership profile" },
        { src: "https://img.b2bpic.net/free-photo/middle-aged-hispanic-business-person_23-2151098593.jpg", alt: "Executive profile" },
      ]}
      marqueeItems={[
        { type: "text", text: "Worldwide Operations" },
        { type: "text", text: "24/7 Concierge Support" },
        { type: "text", text: "Certified Safety Standards" },
        { type: "text", text: "Luxury Fleet Access" },
        { type: "text", text: "Personalized Itineraries" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Redefining " },
        { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/a-luxury-interior-of-a-private-jet-showi-1778092438092-cc092b53.png", alt: "Jet Interior" },
        { type: "text", content: " the art of travel." },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { id: "1", label: "Security", title: "Safety First", items: ["Certified Pilots", "Regular Maintenance", "Advanced Avionics"] },
        { id: "2", label: "Comfort", title: "Luxury Interiors", items: ["Ergonomic Seating", "In-flight Wi-Fi", "Gourmet Catering"] },
        { id: "3", label: "Global", title: "World-wide Access", items: ["Global Operations", "24/7 Availability", "Strategic Hubs"] },
      ]}
      title="Why Choose HenaGlobal Luxury Flight"
      description="Our commitment to excellence sets us apart in the private charter industry."
    />
  </div>

  <div id="fleet" data-section="fleet">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Gulfstream G650", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/gulfstream-g650-parked-at-a-hangar-sharp-1778092450668-086c7add.png" },
        { id: "p2", name: "Falcon 8X", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/falcon-8x-in-mid-flight-against-a-clear--1778092459301-c57fa373.png" },
        { id: "p3", name: "Bombardier Challenger", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/challenger-jet-on-airfield-1778092469052-c650aceb.png" },
        { id: "p4", name: "Citation Latitude", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/citation-latitude-taxiing-1778092480323-6c464920.png" },
        { id: "p5", name: "Embraer Phenom 300", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/embraer-jet-parked-1778092492236-10ce5273.png" },
        { id: "p6", name: "Legacy 650", price: "Contact for pricing", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/legacy-650-luxury-jet-1778092501170-79559561.png" },
      ]}
      title="Our Premier Fleet"
      description="A diverse collection of modern, state-of-the-art aircraft."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "150+", title: "Aircrafts Available", description: "Global reach", icon: Compass },
        { id: "m2", value: "20K+", title: "Safe Flight Hours", description: "Experienced crews", icon: ShieldCheck },
        { id: "m3", value: "99.9%", title: "Punctuality Rate", description: "Reliable schedules", icon: Clock },
      ]}
      title="By the Numbers"
      description="Our operational footprint reflects our dedication to premium service."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "James R.", date: "Jan 2025", title: "Business Executive", quote: "Reliable and high-end.", tag: "Corporate", avatarSrc: "https://img.b2bpic.net/free-photo/confident-woman-professional-attire_23-2152009547.jpg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/a-stunning-high-resolution-shot-of-a-mod-1778092423820-c88d6150.png?_wi=2", imageAlt: "business profile headshot" },
        { id: "t2", name: "Emma W.", date: "Dec 2024", title: "Entrepreneur", quote: "Simply the best service.", tag: "Personal", avatarSrc: "https://img.b2bpic.net/free-photo/front-view-lawyer-portrait_23-2151202434.jpg", imageSrc: "https://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=2", imageAlt: "business profile headshot" },
        { id: "t3", name: "Carlos M.", date: "Nov 2024", title: "Traveler", quote: "Luxury on every level.", tag: "Leisure", avatarSrc: "https://img.b2bpic.net/free-photo/portrait-confident-man-looking-photographer_23-2148398473.jpg", imageSrc: "https://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg?_wi=2", imageAlt: "business profile headshot" },
        { id: "t4", name: "Linda P.", date: "Oct 2024", title: "CEO", quote: "Seamless operations.", tag: "Business", avatarSrc: "https://img.b2bpic.net/free-photo/closeup-content-pretty-businesswoman-glasses_1262-1740.jpg", imageSrc: "https://img.b2bpic.net/free-photo/business-lady-looking-copyspace-with-interest_1262-2957.jpg?_wi=2", imageAlt: "business profile headshot" },
        { id: "t5", name: "David L.", date: "Sep 2024", title: "Professional", quote: "Exceptional reliability.", tag: "Charter", avatarSrc: "https://img.b2bpic.net/free-photo/confident-european-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-128975.jpg", imageSrc: "https://img.b2bpic.net/free-photo/pretty-attractive-young-mixed-race-model-with-large-afro-wearing-navy-jacket-her-naked-body-shorts_633478-1216.jpg?_wi=2", imageAlt: "business profile headshot" },
      ]}
      title="Client Experiences"
      description="Voices of the world's most discerning travelers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "How do I book a jet?", content: "You can contact our concierge team at any time via phone or email." },
        { id: "f2", title: "Are there luggage restrictions?", content: "Each aircraft type has specific baggage capacities; we will guide you through this during booking." },
        { id: "f3", title: "Can I bring pets?", content: "Yes, we are pet-friendly and offer dedicated services for your furry friends." },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "rotated-rays-static" }}
      tag="Booking"
      title="Book Your Private Jet Today"
      description="Get in touch with our expert team to secure your next journey."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DLNLdVpFHmbbI9nuxPgilzABGs/a-clean-abstract-texture-inspired-by-air-1778092511156-cb0f39e1.png"
      logoText="HenaGlobal Luxury Flight"
      columns={[
        { title: "Company", items: [{ label: "About", href: "#" }, { label: "Fleet", href: "#" }] },
        { title: "Services", items: [{ label: "Private Charter", href: "#" }, { label: "Concierge", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}