import React from 'react';
import { CampaignCard } from './CampaignCard';
import { Campaign } from '../../types';

interface CampaignGridProps {
  campaigns: Campaign[];
  loading?: boolean;
}

export const CampaignGrid: React.FC<CampaignGridProps> = ({ campaigns, loading = false }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-300 dark:bg-gray-700" />
            <div className="p-6">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4" />
              <div className="h-2 bg-gray-300 dark:bg-gray-700 rounded mb-4" />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded" />
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded" />
              </div>
              <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (campaigns.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 dark:text-gray-500 mb-4">
          <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No campaigns found</h3>
        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};