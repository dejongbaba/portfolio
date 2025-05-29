import { motion } from 'framer-motion';
import React from 'react';
import { Section } from '../UI/Section';
import Slider from '../UI/Slider';
// Testimonials data
const testimonialsData = [
  {
    id: 1,
    name: 'Lanre Torimiro',
    role: 'Project Manager',
    company: 'Urban Homes',
    quote:
      "I've been opportuned to collaborate with Adedeji to develop a high-end real estate website. He is a great developer and a great team player. I highly recommend him.",
  },
  {
    id: 2,
    name: 'Emotu Balogun',
    role: 'Founder',
    company: 'Sendbox Co.',
    quote:
      "Working with Deji has been a game-changer for our brand and product. His attention to detail and creative approach brought our vision to life in ways we couldn't have imagined.",
  },
  {
    id: 3,
    name: 'Tofunmi Babatunde',
    role: 'Founder',
    company: 'Sanimara Ltd',
    quote:
      'Agunbi is a great guy. Super talented and very professional. I worked with him on several projects and He definitely knows his stuff. I highly recommend him.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <Section
      id="testimonials"
      title="What Clients Say"
      className="py-20 overflow-hidden"
    >
      <div className="relative w-full">
        <Slider
          showArrows={true}
          showDots={false}
          autoPlay={true}
          interval={5000}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:p-12 h-full flex flex-col justify-between"
            >
              <div className="relative md:w-[50%] w-[90%] mx-auto">
                <p className="text-xl leading-relaxed mb-8">
                  <span className="absolute -top-6 -left-4 md:text-5xl text-lg text-muted-foreground opacity-20">
                    "
                  </span>
                  {testimonial.quote}
                </p>
                <div className="mt-4">
                  <h4 className="text-base font-medium m-0">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground m-0">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonials;
