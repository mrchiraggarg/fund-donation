import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Target } from 'lucide-react';
import { Campaign } from '../../types';

interface CampaignCardProps {
  campaign: Campaign;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const progressPercentage = Math.min((campaign.raised / campaign.goal) * 100, 100);
  const formattedGoal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(campaign.goal);
  
  const formattedRaised = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(campaign.raised);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-200 dark:border-gray-700">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {campaign.featured && (
          <div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium">
          {campaign.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          <Link to={`/campaign/${campaign.id}`}>
            {campaign.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {campaign.description}
        </p>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {formattedRaised} raised
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ 
                width: `${progressPercentage}%`,
                '--progress-width': `${progressPercentage}%`
              } as React.CSSProperties}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Target className="h-4 w-4 mr-1" />
            <span>{formattedGoal} goal</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Users className="h-4 w-4 mr-1" />
            <span>{campaign.donors} donors</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{campaign.daysLeft} days left</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="truncate">{campaign.location}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to={`/campaign/${campaign.id}`}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center block"
        >
          View Campaign
        </Link>
      </div>
    </div>
  );
};