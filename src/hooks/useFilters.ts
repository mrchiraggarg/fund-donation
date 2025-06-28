import { useState, useMemo } from 'react';
import { Campaign, FilterOptions } from '../types';

export const useFilters = (campaigns: Campaign[]) => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'All Categories',
    search: '',
    sortBy: 'newest'
  });

  const filteredCampaigns = useMemo(() => {
    let filtered = [...campaigns];

    // Filter by category
    if (filters.category !== 'All Categories') {
      filtered = filtered.filter(campaign => 
        campaign.category === filters.category
      );
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(campaign =>
        campaign.title.toLowerCase().includes(searchLower) ||
        campaign.description.toLowerCase().includes(searchLower) ||
        campaign.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // Sort campaigns
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'mostFunded':
          return b.raised - a.raised;
        case 'leastFunded':
          return a.raised - b.raised;
        case 'endingSoon':
          return a.daysLeft - b.daysLeft;
        default:
          return 0;
      }
    });

    return filtered;
  }, [campaigns, filters]);

  const updateFilter = (key: keyof FilterOptions, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return {
    filters,
    filteredCampaigns,
    updateFilter
  };
};