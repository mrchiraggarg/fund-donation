import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Target, TrendingUp } from 'lucide-react';
import { CampaignGrid } from '../components/Campaign/CampaignGrid';
import { TestimonialsSection } from '../components/Testimonials/TestimonialsSection';
import { campaigns, testimonials } from '../data/mockData';

export const Home: React.FC = () => {
  const featuredCampaigns = campaigns.filter(campaign => campaign.featured).slice(0, 3);
  const stats = [
    { icon: Heart, label: 'Total Donations', value: '$2.4M+' },
    { icon: Users, label: 'Active Donors', value: '15K+' },
    { icon: Target, label: 'Campaigns Funded', value: '850+' },
    { icon: TrendingUp, label: 'Success Rate', value: '94%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Make a Difference
                <span className="block text-primary-200">One Donation at a Time</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Join thousands of compassionate donors supporting causes that matter. 
                From healthcare to education, your contribution creates lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/campaigns"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  Browse Campaigns
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/start-campaign"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
                >
                  Start a Campaign
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <img
                src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="People helping each other"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-success-500 p-2 rounded-full">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">$50K+ Raised</p>
                    <p className="text-sm text-gray-600">This month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-primary-100 dark:bg-primary-900/30 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Campaigns
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover impactful campaigns that are making a real difference in communities worldwide
            </p>
          </div>
          <CampaignGrid campaigns={featuredCampaigns} />
          <div className="text-center mt-12">
            <Link
              to="/campaigns"
              className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            >
              View All Campaigns
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Making a difference is simple with our easy-to-use platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Browse Campaigns',
                description: 'Explore verified campaigns across various categories and find causes that resonate with you.'
              },
              {
                step: '2',
                title: 'Make a Donation',
                description: 'Choose your donation amount and contribute securely to support the campaigns you care about.'
              },
              {
                step: '3',
                title: 'Track Impact',
                description: 'Follow the progress of campaigns and see the real-world impact of your contributions.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join our community of changemakers and start supporting causes that matter to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/campaigns"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Start Donating
            </Link>
            <Link
              to="/start-campaign"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              Create Campaign
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};