import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './TestimonialCard';
import { Testimonial } from '../../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  title = "What People Are Saying",
  subtitle = "Hear from donors and beneficiaries about the impact of your contributions"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          {testimonials.length > itemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors z-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </button>
            </>
          )}

          {/* Dots indicator */}
          {testimonials.length > itemsPerView && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-primary-500'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};