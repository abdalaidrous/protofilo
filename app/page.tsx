'use client';

import { useEffect, useState } from 'react';
import { BackgroundDecor } from '@/components/shared/BackgroundDecor';
import { Header } from '@/components/layout/Header';
import { SocialDock } from '@/components/layout/SocialDock';
import { HeroSection } from '@/components/sections/HeroSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { StorySection } from '@/components/sections/StorySection';
import { PricingSection } from '@/components/sections/PricingSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { PageFooter } from '@/components/layout/PageFooter';

const sections = ['#home', '#work', '#about', '#resume', '#contact', '#blog'];

export default function Home() {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative pb-10">
      <BackgroundDecor />
      <Header active={active} />
      <SocialDock />

      <HeroSection />
      <WorkSection />
      <ProcessSection />
      <StorySection />
      <PricingSection />
      <BlogSection />
      <CtaSection />
      <PageFooter />
    </main>
  );
}
