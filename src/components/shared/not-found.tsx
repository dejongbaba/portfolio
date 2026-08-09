import React from 'react';
import { Link } from '@tanstack/react-router';
import { BlurFade } from '@/components/ui/blur-fade';

const NotFound: React.FC = () => (
  <BlurFade>
    <section className="page-intro">
      <p>Not found</p>
      <h1>This page does not exist.</h1>
      <Link to="/" className="text-link">
        -&gt; Back home
      </Link>
    </section>
  </BlurFade>
);

export default NotFound;