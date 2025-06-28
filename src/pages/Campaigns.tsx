import React from 'react';
import { CampaignGrid } from '../components/Campaign/CampaignGrid';
import { CampaignFilters } from '../components/Campaign/CampaignFilters';
import { useFilters } from '../hooks/useFilters';
import { campaigns } from '../data/mockData';

export const Campaigns: React.FC = () => {
  const { filters, filteredCampaigns, updateFilter } = useFilters(campaigns);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            All Campaigns
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover and support campaigns that are making a real difference in the world
          </p>
        </div>

        {/* Filters */}
        <CampaignFilters
          filters={filters}
          onFilterChange={updateFilter}
          resultsCount={filteredCampaigns.length}
        />

        {/* Campaign Grid */}
        <CampaignGrid campaigns={filteredCampaigns} />
      </div>
    </div>
  );
};