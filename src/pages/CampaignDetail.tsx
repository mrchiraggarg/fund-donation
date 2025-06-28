import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users, 
  Target, 
  Share2, 
  Heart,
  DollarSign,
  Clock,
  User
} from 'lucide-react';
import { ProgressBar } from '../components/UI/ProgressBar';
import { TestimonialCard } from '../components/Testimonials/TestimonialCard';
import { campaigns, donations, testimonials } from '../data/mockData';

export const CampaignDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [donationAmount, setDonationAmount] = useState('');
  const [showDonationForm, setShowDonationForm] = useState(false);

  const campaign = campaigns.find(c => c.id === id);
  const campaignDonations = donations.filter(d => d.campaignId === id);
  const campaignTestimonials = testimonials.filter(t => t.campaignId === id);

  if (!campaign) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Campaign Not Found
          </h1>
          <Link
            to="/campaigns"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Back to Campaigns
          </Link>
        </div>
      </div>
    );
  }

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

  const quickAmounts = [25, 50, 100, 250, 500];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/campaigns"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Campaigns
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Campaign Image */}
            <div className="relative">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl"
              />
              {campaign.featured && (
                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                {campaign.category}
              </div>
            </div>

            {/* Campaign Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {campaign.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>by {campaign.organizer}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{campaign.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{campaign.daysLeft} days left</span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {campaign.fullDescription}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {campaign.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Donation History */}
            {campaignDonations.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Recent Donations
                </h2>
                <div className="space-y-4">
                  {campaignDonations.slice(0, 5).map((donation) => (
                    <div key={donation.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full">
                        <Heart className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {donation.anonymous ? 'Anonymous' : donation.donorName}
                          </span>
                          <span className="font-semibold text-primary-600 dark:text-primary-400">
                            ${donation.amount}
                          </span>
                        </div>
                        {donation.message && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            "{donation.message}"
                          </p>
                        )}
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          {new Date(donation.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonials */}
            {campaignTestimonials.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Testimonials
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {campaignTestimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Donation Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {formattedRaised}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    of {formattedGoal}
                  </span>
                </div>
                <ProgressBar
                  current={campaign.raised}
                  goal={campaign.goal}
                  animated={true}
                />
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {Math.round(progressPercentage)}% funded
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-1" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {campaign.donors}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Donors
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-1" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    {campaign.daysLeft}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Days Left
                  </div>
                </div>
              </div>

              {/* Donation Form */}
              {!showDonationForm ? (
                <button
                  onClick={() => setShowDonationForm(true)}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Donate Now
                </button>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Donation Amount
                    </label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {quickAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setDonationAmount(amount.toString())}
                          className={`py-2 px-3 text-sm font-medium rounded-lg border transition-colors ${
                            donationAmount === amount.toString()
                              ? 'bg-primary-600 text-white border-primary-600'
                              : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="number"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <button
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                    onClick={() => alert('Donation functionality would be implemented here')}
                  >
                    Donate ${donationAmount || '0'}
                  </button>
                  <button
                    onClick={() => setShowDonationForm(false)}
                    className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              )}

              {/* Share */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="w-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Campaign
                </button>
              </div>
            </div>

            {/* Organizer Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Campaign Organizer
              </h3>
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
                  <User className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {campaign.organizer}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Verified Organizer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};