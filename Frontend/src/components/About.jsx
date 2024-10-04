/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypeWriter = ({ text, delay = 10 }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Event Organizer",
    content:
      "Lyrica transformed our annual music festival. The atmosphere was electric, and the technical support was flawless. Our attendees are still raving about the experience months later!",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Mike Chen",
    role: "Artist Manager",
    content:
      "The professionalism and attention to detail at Lyrica events are unmatched. They truly understand how to showcase artists in the best light, creating unforgettable moments for both performers and audience.",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Music Enthusiast",
    content:
      "I've attended many Lyrica events, and each one has been a unique, unforgettable experience. The way they blend music, technology, and audience interaction is simply magical.",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
  },
  {
    name: "David Thompson",
    role: "Venue Owner",
    content:
      "Partnering with Lyrica has been a game-changer for our venue. Their events consistently sell out and leave our patrons asking for more. The production quality is top-notch!",
    image: "https://randomuser.me/api/portraits/men/69.jpg",
  },
  {
    name: "Olivia Lee",
    role: "Marketing Director",
    content:
      "Lyrica's brand collaborations are innovative and effective. They understand how to create synergies that benefit both the artists and the sponsors, resulting in powerful marketing outcomes.",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
  },
];

const reviews = [
  {
    name: "Alex",
    rating: 5,
    comment: "Mind-blowing experience! The sound quality was incredible.",
  },
  {
    name: "Taylor",
    rating: 4,
    comment: "Great lineup and atmosphere. Could use more food options.",
  },
  {
    name: "Jordan",
    rating: 5,
    comment:
      "The VIP package was worth every penny. Exclusive access and amazing perks!",
  },
  {
    name: "Casey",
    rating: 4,
    comment:
      "Loved the interactive art installations. Parking was a bit challenging.",
  },
  {
    name: "Morgan",
    rating: 5,
    comment:
      "The eco-friendly initiatives were impressive. A truly sustainable event!",
  },
];

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-16 ml-2 min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 text-gray-800 mr-2 p-22 rounded-tr-xl">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-600">
            Our Story
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="  container mx-auto my-auto px-4 text-lg/loose mb-4 antialiased  md: bg-white p-9 rounded-xl  ">
                <TypeWriter
                  text="Lyrica, established in 2015, is driven by a passion for crafting unforgettable musical experiences. What began as a small indie music showcase has evolved into a series of internationally acclaimed festivals and concerts. We've hosted over 500 events across 20 countries, featuring more than 1,000 artists from diverse genres. At Lyrica, we believe in the power of music to unite, inspire, and transform. Our events go beyond traditional concerts, offering immersive experiences that blend cutting-edge technology, breathtaking visuals, and world-class performances.



"
                />
              </p>
              
            </div>
            <div className="md:w-1/2">
              <motion.img
                src="https://img.freepik.com/free-vector/flat-background-world-music-day-celebration_23-2150394870.jpg?w=996&t=st=1726205980~exp=1726206580~hmac=146ed69564d3c61b24b0ea6453e3101dd9aff0854fca630dd5a6a3a2823c2f1a"
                alt="Lyrica event"
                className="rounded-lg shadow-xl w-full h-auto"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </section>

        <section className="mb-16 mt-3">
          <h2 className="text-3xl sm:text-4xl text-center font-bold mb-9 text-pink-600">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Innovative Production",
                icon: "🎭",
                description:
                  "State-of-the-art sound systems, mesmerizing light shows, and interactive stage designs that push the boundaries of live entertainment.",
              },
              {
                title: "Artist Collaboration",
                icon: "🤝",
                description:
                  "We work closely with both established and emerging artists to create unique, collaborative performances that you won't see anywhere else.",
              },
              {
                title: "Immersive Experiences",
                icon: "🌟",
                description:
                  "From VR zones to interactive art installations, we create multi-sensory environments that complement the music.",
              },
              {
                title: "Sustainable Events",
                icon: "🌿",
                description:
                  "We're committed to minimizing our environmental impact through eco-friendly practices, renewable energy, and waste reduction initiatives.",
              },
              {
                title: "Community Focus",
                icon: "👥",
                description:
                  "We actively engage with local communities, supporting music education programs and showcasing regional talents alongside international acts.",
              },
              {
                title: "Cutting-edge Technology",
                icon: "💻",
                description:
                  "Our custom-developed event app enhances the attendee experience with real-time updates, interactive maps, and exclusive content.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg transition-colors duration-300 ${
                  hoveredFeature === index ? "bg-pink-50" : ""
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2 text-pink-600">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-600">
            What Our Attendees Say
          </h2>
          <div className="relative bg-white p-8 rounded-lg shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-24 h-24 rounded-full border-4 border-pink-200"
                />
                <div>
                  <p className="text-lg italic mb-4">
                    "{testimonials[activeTestimonial].content}"
                  </p>
                  <p className="font-semibold text-pink-600">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeTestimonial].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? "bg-pink-500" : "bg-pink-200"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setActiveTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-pink-100 p-2 rounded-full"
              aria-label="Previous testimonial"
            >
              &#8249;
            </button>
            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pink-100 p-2 rounded-full"
              aria-label="Next testimonial"
            >
              &#8250;
            </button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-600">
            Event Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#FDF2F8" }}
              >
                <div className="flex items-center mb-2">
                  <p className="font-semibold text-pink-600 mr-2">
                    {review.name}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-2xl ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
                </div>
                <p>{review.comment}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-600">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Events Hosted" },
              { number: "1M+", label: "Attendees" },
              { number: "20", label: "Countries" },
              { number: "$2M+", label: "Raised for Charity" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#FDF2F8" }}
              >
                <h3 className="text-3xl font-bold text-pink-600 mb-2">
                  {stat.number}
                </h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 md:text-1xl text-pink-600">
            Join Us at Our Next Event
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg md:w-70 h-70">
            <p className="text-lg mb-6 md:text-lg">
              Experience the magic of Lyrica for yourself. Sign up for our
              newsletter to stay updated on upcoming events, exclusive offers,
              and behind-the-scenes content.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg bg-pink-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
