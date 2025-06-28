import React from 'react';
import { Search, Filter, SortAsc } from 'lucide-react';
import { FilterOptions } from '../../types';
import { categories } from '../../data/mockData';

interface CampaignFiltersProps {
  filters: FilterOptions;
  onFilterChange: (key: keyof FilterOptions, value: any) => void;
  resultsCount: number;
}

export const CampaignFilters: React.FC<CampaignFiltersProps> = ({
  filters,
  onFilterChange,
  resultsCount
}) => {
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'mostFunded', label: 'Most Funded' },
    { value: 'leastFunded', label: 'Least Funded' },
    { value: 'endingSoon', label: 'Ending Soon' }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={filters.search}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={filters.category}
              onChange={(e) => onFilterChange('category', e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[160px]"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="relative">
            <SortAsc className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange('sortBy', e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[160px]"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {resultsCount} campaign{resultsCount !== 1 ? 's' : ''}
          {filters.category !== 'All Categories' && (
            <span> in <strong>{filters.category}</strong></span>
          )}
          {filters.search && (
            <span> matching "<strong>{filters.search}</strong>"</span>
          )}
        </p>
      </div>
    </div>
  );
};