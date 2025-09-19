"use client";

import { ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  subject: string;
  serviceType: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    serviceType: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const formRef = useRef<HTMLDivElement>(null);
  const fieldsRef = useRef<HTMLDivElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceOptions = [
    "Development Services",
    "Optimization Services",
    "Add-on Services",
    "Design Services",
  ];

  // GSAP Animations
  useEffect(() => {
    if (formRef.current) {
      // Initial form animation
      gsap.fromTo(
        formRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Stagger animation for form fields
      gsap.fromTo(
        fieldsRef.current,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "power2.out",
        }
      );

      // Button animation
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: 0.8,
            ease: "power2.out",
          }
        );
      }
    }
  }, []);

  // Toast animation
  useEffect(() => {
    if (showToast && toastRef.current) {
      gsap.fromTo(
        toastRef.current,
        {
          opacity: 0,
          y: -20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [showToast]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Input focus animations
  const handleInputFocus = (index: number) => {
    if (fieldsRef.current[index]) {
      gsap.to(fieldsRef.current[index], {
        scale: 1.02,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleInputBlur = (index: number) => {
    if (fieldsRef.current[index]) {
      gsap.to(fieldsRef.current[index], {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  // Button click animation
  const handleButtonClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }
    handleSubmit();
  };

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: service,
    }));
    setIsDropdownOpen(false);
  };

  const showToastMessage = (message: string, type: "success" | "error") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      showToastMessage("Please fill the mandatory fields! ", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToastMessage(
          "Thanks for reaching out! lets build something together soon",
          "success"
        );
        setFormData({
          name: "",
          email: "",
          subject: "",
          serviceType: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      showToastMessage("Oops! Please try again later.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !fieldsRef.current.includes(el)) {
      fieldsRef.current.push(el);
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div
          ref={toastRef}
          className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-[9999] px-6 py-4 rounded-xl shadow-2xl backdrop-blur-sm border transition-all duration-300 ${
            toastType === "success"
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${
                toastType === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            />
            {toastMessage}
          </div>
        </div>
      )}

      
        <div
          ref={formRef}
          className="bg-white/95 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-3xl p-8 lg:p-12 w-full max-w-4xl mx-auto my-8"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)",
          }}
        >
          <div className="grid grid-cols-2 w-full gap-6">
            {/* Name Field */}
            <div ref={addToRefs} className="w-full group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus(0)}
                  onBlur={() => handleInputBlur(0)}
                  placeholder="Enter your full name"
                  className={`w-full h-12 px-4 py-3 text-gray-800 border-2 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:bg-white group-hover:shadow-md ${
                    errors.name
                      ? "border-red-400 focus:border-red-500 shadow-red-100"
                      : "border-gray-200 focus:border-blue-400 focus:shadow-blue-100"
                  } focus:shadow-lg`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div ref={addToRefs} className="w-full group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus(1)}
                  onBlur={() => handleInputBlur(1)}
                  placeholder="your.email@example.com"
                  className={`w-full h-12 px-4 py-3 text-gray-800 border-2 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:bg-white group-hover:shadow-md ${
                    errors.email
                      ? "border-red-400 focus:border-red-500 shadow-red-100"
                      : "border-gray-200 focus:border-blue-400 focus:shadow-blue-100"
                  } focus:shadow-lg`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div ref={addToRefs} className="w-full group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus(2)}
                  onBlur={() => handleInputBlur(2)}
                  placeholder="What is this about?"
                  className={`w-full h-12 px-4 py-3 text-gray-800 border-2 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:bg-white group-hover:shadow-md ${
                    errors.subject
                      ? "border-red-400 focus:border-red-500 shadow-red-100"
                      : "border-gray-200 focus:border-blue-400 focus:shadow-blue-100"
                  } focus:shadow-lg`}
                />
              </div>
              {errors.subject && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div ref={addToRefs} className="w-full group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={() => handleInputFocus(3)}
                onBlur={() => handleInputBlur(3)}
                placeholder="+1 (555) 123-4567"
                className="w-full h-12 px-4 py-3 text-gray-800 border-2 border-gray-200 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:bg-white group-hover:shadow-md focus:border-blue-400 focus:shadow-blue-100 focus:shadow-lg"
              />
            </div>
          </div>
          
          <div className="w-full flex flex-col gap-6 mt-6">
            {/* Service Type Dropdown */}
            <div ref={addToRefs} className="w-full relative group z-[1000]">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Service Type
              </label>
              <div 
                ref={dropdownRef}
                className="relative"
              >
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onFocus={() => handleInputFocus(4)}
                  onBlur={() => handleInputBlur(4)}
                  className="w-full h-12 px-4 py-3 text-gray-800 border-2 border-gray-200 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm cursor-pointer flex items-center justify-between focus:outline-none focus:bg-white group-hover:shadow-md focus:border-blue-400 focus:shadow-blue-100 focus:shadow-lg"
                  tabIndex={0}
                >
                  <span
                    className={
                      formData.serviceType ? "text-gray-800" : "text-gray-500"
                    }
                  >
                    {formData.serviceType || "Select a service type"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl backdrop-blur-sm overflow-hidden z-[1000]">
                    {serviceOptions.map((service, index) => (
                      <div
                        key={index}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleServiceSelect(service);
                        }}
                        className="px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0 select-none"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div ref={addToRefs} className="w-full group">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleInputFocus(5)}
                  onBlur={() => handleInputBlur(5)}
                  placeholder="Tell us about your project and requirements..."
                  rows={4}
                  className={`w-full px-4 py-3 text-gray-800 border-2 rounded-xl transition-all duration-300 bg-white/80 backdrop-blur-sm focus:outline-none focus:bg-white group-hover:shadow-md resize-none ${
                    errors.message
                      ? "border-red-400 focus:border-red-500 shadow-red-100"
                      : "border-gray-200 focus:border-blue-400 focus:shadow-blue-100"
                  } focus:shadow-lg`}
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="w-1 h-1 bg-red-500 rounded-full" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              ref={buttonRef}
              type="button"
              onClick={handleButtonClick}
              disabled={isSubmitting}
              className={`w-full h-12 text-white font-bold text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              }`}
              style={{
                background: isSubmitting
                  ? "#9CA3AF"
                  : "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
              }}
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  "Send Message"
                )}
              </span>
            </button>
          </div>
        </div>
     
    </>
  );
};

export default Form;