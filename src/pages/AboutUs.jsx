import React, { useEffect } from 'react';
import AboutUs from '../components/AboutUs';

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F7FC] dark:bg-[#070B14]">
      {/* Standalone About Us section with one-by-one presentation and interactive navigation */}
      <AboutUs />
    </div>
  );
}
