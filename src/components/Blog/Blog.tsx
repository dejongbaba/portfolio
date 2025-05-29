import { motion } from 'framer-motion';
import React from 'react';
import { Section } from '../UI/Section';

// Blog data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React Context',
    date: 'Apr 04',
    excerpt:
      'A comprehensive guide to getting started with the React Context API.',
    link: 'https://dev.to/lucciddev/getting-started-with-react-context',
    category: 'React Context API',
  },
  {
    id: 2,
    title: 'Deep Dive into Functional Programming in JavaScript',
    date: 'Apr 02',
    excerpt:
      'A deep dive into functional programming in JavaScript, higher-order functions, and immutability.',
    link: 'https://luccithedev.hashnode.dev/deep-dive-into-functional-programming-in-javascript-higher-order-functions-and-immutability',
    category: 'JavaScript',
  },
  {
    id: 3,
    title:
      'Streamlining React Development with MobX for State Management',
    date: 'Mar 28',
    excerpt:
      'Discover how to streamline your React development with MobX for state management.',
    link: 'https://luccithedev.hashnode.dev/streamlining-react-development-with-mobx-for-state-management',
    category: 'State Management',
  },
];

const Blog: React.FC = () => {
  return (
    <Section
      id="publications"
      title="Publications"
      className="bg-background"
    >
      <p className="text-muted-foreground mb-16">
        Everything I've ever written. These topics always involves
        tools I use in my everyday development — whether at work,
        contributing to open-source, or my own personal projects.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            className="mb-8 pb-8 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-2">
              <span className="text-sm text-muted-foreground mr-4">
                {post.date}
              </span>
              <span className="text-xs uppercase tracking-wider font-medium">
                {post.category}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl mb-4">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {post.excerpt}
            </p>

            <a
              href={post.link}
              className="inline-block font-medium relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-foreground after:origin-right after:scale-x-0 after:transition-transform hover:after:origin-left hover:after:scale-x-100"
            >
              Read More
            </a>
          </motion.article>
        ))}
      </div>
    </Section>
  );
};

export default Blog;
