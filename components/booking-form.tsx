import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FormData } from "./booking/types";
import InitialStep from "./booking/initial-step";
import ServiceSelection from "./booking/service-selection";
import YouTubeForm from "./booking/service-forms/youtube-form";
import MusicForm from "./booking/service-forms/music-form";
import ReelsForm from "./booking/service-forms/reels-form";
import OtherForm from "./booking/service-forms/other-form";
import BudgetStep from "./booking/budget-step";
import SuccessStep from "./booking/success-step";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [useEmail, setUseEmail] = useState(false);
  const { register, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      serviceType: ""
    }
  });
  const formData = watch();

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    nextStep();
  };

  const renderServiceForm = () => {
    switch (selectedService) {
      case "youtube":
        return <YouTubeForm register={register} watch={watch} nextStep={nextStep} />;
      case "music":
        return <MusicForm register={register} watch={watch} nextStep={nextStep} />;
      case "reels":
        return <ReelsForm register={register} watch={watch} nextStep={nextStep} />;
      case "other":
        return <OtherForm register={register} watch={watch} nextStep={nextStep} />;
      default:
        return null;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <InitialStep 
            register={register}
            watch={watch}
            nextStep={nextStep}
            setUseEmail={setUseEmail}
            useEmail={useEmail}
          />
        );
      case 2:
        return <ServiceSelection name={formData.name} onServiceSelect={handleServiceSelect} />;
      case 3:
        return (
          <div className="space-y-12 w-full px-4 sm:px-0">
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-4xl font-display">
                {selectedService === "youtube" && "YouTube Channel Setup"}
                {selectedService === "reels" && "Reels & Shorts Details"}
                {selectedService === "music" && "Music Visual Requirements"}
                {selectedService === "other" && "Custom Project Details"}
              </h2>
              <p className="text-lg sm:text-xl text-white/70">Let's get the details right</p>
            </div>
            {renderServiceForm()}
          </div>
        );
      case 4:
        return <BudgetStep register={register} watch={watch} nextStep={nextStep} />;
      default:
        return <SuccessStep name={formData.name} formData={{ ...formData, serviceType: selectedService }} />;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-[500px] w-full flex items-center justify-center px-4 sm:px-0">
        {renderStep()}
      </div>
    </AnimatePresence>
  );
}
