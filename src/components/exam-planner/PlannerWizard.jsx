import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import RoadmapsGrid from './RoadmapsGrid';

export default function PlannerWizard({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    academicLevel: null,
    duration: null,
    targetScore: null,
    planTitle: null
  });

  const totalSteps = 1;

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps + 2) { // +2 for assessment and generation
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const finishWizard = () => {
    onComplete(formData);
  };

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <RoadmapsGrid 
            onSelectPlan={(planInfo) => {
              updateFormData('duration', planInfo.duration);
              updateFormData('targetScore', planInfo.expectedScore);
              updateFormData('planTitle', planInfo.title);
              // Complete the wizard immediately
              onComplete({
                duration: planInfo.duration,
                targetScore: planInfo.expectedScore,
                planTitle: planInfo.title
              });
            }}
          />
        );
      default:
        return null;
    }
  };

  // Progress bar calculation
  const progress = Math.min((currentStep / totalSteps) * 100, 100);

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-[#0B0F19]">
      {/* Progress Bar */}
      {currentStep <= totalSteps && (
        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800">
          <div 
            className="h-full bg-indigo-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="h-full w-full">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}
