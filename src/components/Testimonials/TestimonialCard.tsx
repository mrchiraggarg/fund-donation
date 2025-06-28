import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 h-full">
      <div className="flex items-start space-x-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role}
              </p>
            </div>
            <Quote className="h-6 w-6 text-primary-500 flex-shrink-0" />
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {testimonial.content}
          </p>
        </div>
      </div>
    </div>
  );
};