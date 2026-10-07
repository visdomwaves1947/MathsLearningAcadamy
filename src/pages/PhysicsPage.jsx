import React, { useEffect } from 'react';
import PhysicsHero from '../components/physics/PhysicsHero';
import PhysicsWhyChooseUs from '../components/physics/PhysicsWhyChooseUs';
import PhysicsCurriculum from '../components/physics/PhysicsCurriculum';
import PhysicsRoadmapsGrid from '../components/physics/PhysicsRoadmapsGrid';
import PhysicsTestimonials from '../components/physics/PhysicsTestimonials';
import PhysicsStatsBar from '../components/physics/PhysicsStatsBar';
import PhysicsPricingSection from '../components/physics/PhysicsPricingSection';
import PhysicsFaqSection from '../components/physics/PhysicsFaqSection';

export default function PhysicsPage({ onOpenBooking, onOpenVideoDemo, onSelectRoadmap }) {
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
      {/* Physics Hero Section with 3D Interactive Physics Book */}
      <PhysicsHero 
        onOpenBooking={onOpenBooking} 
        onOpenVideoDemo={onOpenVideoDemo}
      />

      {/* Why Choose Us Grid for Physics */}
      <PhysicsWhyChooseUs 
        onOpenBooking={onOpenBooking} 
      />

      {/* AP/TS Intermediate Physics Modules & Curriculum */}
      <PhysicsCurriculum 
        onEnroll={(subjectName) => onOpenBooking(`Enroll in ${subjectName}`)}
      />

      {/* Premium Physics Roadmaps Grid */}
      <div className="bg-[#F8FAFC] dark:bg-[#0B0F19] py-8 sm:py-16 border-t border-b border-slate-200 dark:border-slate-800">
        <PhysicsRoadmapsGrid 
          onSelectPlan={onSelectRoadmap} 
        />
      </div>

      {/* Student Results & Parent Testimonials for Physics */}
      <PhysicsTestimonials 
        onOpenBooking={onOpenBooking}
      />

      {/* Stats Bar under Testimonials */}
      <PhysicsStatsBar />

      {/* Tuition Plans & Pricing for Physics */}
      <PhysicsPricingSection 
        onOpenBooking={(planName) => onOpenBooking(`Physics Plan: ${planName}`)}
      />

      {/* Frequently Asked Questions */}
      <PhysicsFaqSection 
        onOpenBooking={onOpenBooking}
      />
    </>
  );
}
