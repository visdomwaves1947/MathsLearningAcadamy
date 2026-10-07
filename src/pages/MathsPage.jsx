import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import IntermediateSubjects from '../components/IntermediateSubjects';
import RoadmapsGrid from '../components/exam-planner/RoadmapsGrid';
import Testimonials from '../components/Testimonials';
import StatsBar from '../components/StatsBar';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';

export default function MathsPage({ onOpenBooking, onOpenVideoDemo, onSelectRoadmap }) {
  // Handle hash scrolling if navigating with hash
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Hero 
        onOpenBooking={onOpenBooking} 
        onOpenVideoDemo={onOpenVideoDemo}
      />

      {/* Why Choose Us Grid */}
      <WhyChooseUs 
        onOpenBooking={onOpenBooking} 
      />

      {/* AP/TS Intermediate Subjects Grid */}
      <IntermediateSubjects 
        onEnroll={(subjectName) => onOpenBooking(`Enroll in ${subjectName}`)}
      />

      {/* Premium Roadmaps Grid */}
      <div className="bg-[#F8FAFC] dark:bg-[#0B0F19] py-8 sm:py-16 border-t border-b border-slate-200 dark:border-slate-800">
        <RoadmapsGrid 
          onSelectPlan={onSelectRoadmap} 
        />
      </div>

      {/* Student Results & Parent Testimonials */}
      <Testimonials 
        onOpenBooking={onOpenBooking}
      />

      {/* Stats Bar under Testimonials */}
      <StatsBar />

      {/* Tuition Plans & Pricing */}
      <PricingSection 
        onOpenBooking={(planName) => onOpenBooking(`Plan: ${planName}`)}
      />

      {/* Frequently Asked Questions */}
      <FaqSection 
        onOpenBooking={onOpenBooking}
      />
    </>
  );
}