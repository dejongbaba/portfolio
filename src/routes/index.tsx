import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import MainLayout from '@/app/layout/MainLayout';
import Hero from '@/components/shared/Hero';
import CurrentlyBuilding from '@/components/shared/CurrentlyBuilding';
import ProjectGrid from '@/components/shared/ProjectGrid';
// import DesignSystemCard from '@/components/shared/DesignSystemCard';
import HeatmapCard from '@/components/shared/HeatmapCard';
import { Helmet } from 'react-helmet-async';

export const Route = createFileRoute('/')({
  component: PortfolioHome,
});

function PortfolioHome() {
  return (
    <MainLayout>
      <Helmet>
        <title>Adedeji Agunbiade | Design Engineer</title>
        <meta name="description" content="Portfolio of Adedeji Agunbiade, Design Engineer and Software Developer." />
      </Helmet>

      <Hero />

      <CurrentlyBuilding />

      <ProjectGrid />

      {/* <DesignSystemCard /> */}

      <HeatmapCard />

    </MainLayout>
  );
}
