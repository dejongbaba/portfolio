import { Section } from 'components/UI/Section';
import { motion } from 'framer-motion';
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';

// Footer navigation links
const footerLinks = [
  { title: 'Home', path: 'hero' },
  { title: 'Projects', path: 'projects' },
  { title: 'About', path: 'about' },
  { title: 'Tools', path: 'tools' },
  { title: 'Testimonials', path: 'testimonials' },
  { title: 'Publications', path: 'publications' },
  { title: 'Contact', path: 'contact' },
];

// Social media links
const socialLinks = [
  {
    title: 'Twitter',
    url: '#',
    icon: <TwitterIcon className="w-6 h-6" />,
  },
  {
    title: 'Instagram',
    url: '#',
    icon: <InstagramIcon className="w-6 h-6" />,
  },
  {
    title: 'LinkedIn',
    url: '#',
    icon: <LinkedinIcon className="w-6 h-6" />,
  },
];

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Subscribed to newsletter! (This is just a demo)');
  };

  return (
    <footer>
      <Section className="py-16 pt-8 bg-background border-t border-border">
        <motion.div
          className="md:my-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <nav className="mb-8">
            <ul className="flex flex-wrap gap-6">
              {footerLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="text-sm hover:underline cursor-pointer"
                  >
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <motion.div
          className="md:my-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-bold mb-4 font-secondary">
            AA
          </div>
          <p className="mb-8 text-muted-foreground">
            A software engineer, technical writer and mentor based in
            Lagos, Nigeria. Available for freelance & collaborations.
          </p>

          <div className="flex gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.title}
                className="text-2xl hover:text-accent transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row  justify-between items-center gap-4">
          <motion.div
            className="md:my-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-8">
              <h4 className="text-xl mb-4">Join the Newsletter</h4>
              <p className="mb-4 text-muted-foreground">
                Get occasional updates on new projects, blog posts,
                and more.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 mt-4"
              >
                <Input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="flex-1"
                />
                <Button type="submit" variant="default">
                  OK
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 mt-8 border-t border-border flex flex-wrap justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Adedeji Agunbiade. All
            rights reserved.
          </p>

          <div className="flex gap-8">
            {/* <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a> */}
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
