import React from 'react';

interface ProgressBarProps {
  current: number;
  goal: number;
  className?: string;
  showPercentage?: boolean;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  goal,
  className = '',
  showPercentage = false,
  animated = true
}) => {
  const percentage = Math.min((current / goal) * 100, 100);

  return (
    <div className={`w-full ${className}`}>
      {showPercentage && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Progress
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className={`bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-1000 ease-out ${
            animated ? 'animate-progress' : ''
          }`}
          style={{ 
            width: `${percentage}%`,
            '--progress-width': `${percentage}%`
          } as React.CSSProperties}
        />
      </div>
    </div>
  );
};