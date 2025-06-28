import { Campaign, Donation, Testimonial } from '../types';

export const campaigns: Campaign[] = [
  {
    id: '1',
    title: 'Clean Water for Rural Communities',
    description: 'Help us build wells and water purification systems in remote villages.',
    fullDescription: 'Access to clean water is a fundamental human right, yet millions of people in rural communities lack this basic necessity. Our project aims to build sustainable water infrastructure including wells, purification systems, and distribution networks in underserved areas. With your support, we can provide clean, safe drinking water to over 5,000 people across 10 villages. The project includes training local technicians for maintenance and establishing community management systems to ensure long-term sustainability.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Environment',
    goal: 50000,
    raised: 32500,
    donors: 245,
    daysLeft: 23,
    organizer: 'Water for All Foundation',
    location: 'Kenya, East Africa',
    createdAt: '2024-01-15',
    featured: true,
    tags: ['water', 'sustainability', 'community', 'infrastructure']
  },
  {
    id: '2',
    title: 'Education Scholarships for Underprivileged Children',
    description: 'Providing quality education opportunities for children from low-income families.',
    fullDescription: 'Education is the key to breaking the cycle of poverty. This scholarship program supports bright, motivated students from underprivileged backgrounds by covering tuition fees, books, uniforms, and other educational expenses. We believe every child deserves the chance to learn and grow, regardless of their family\'s financial situation. The program includes mentorship, tutoring support, and career guidance to ensure students not only access education but thrive in their studies.',
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Education',
    goal: 25000,
    raised: 18750,
    donors: 156,
    daysLeft: 45,
    organizer: 'Future Leaders Initiative',
    location: 'Mumbai, India',
    createdAt: '2024-02-01',
    featured: false,
    tags: ['education', 'children', 'scholarships', 'poverty']
  },
  {
    id: '3',
    title: 'Emergency Medical Fund for Cancer Patients',
    description: 'Supporting families facing financial hardship due to cancer treatment costs.',
    fullDescription: 'Cancer treatment can be financially devastating for families. This emergency fund provides critical financial assistance to cancer patients who cannot afford their treatment costs. The fund covers chemotherapy, radiation therapy, surgery, medications, and supportive care services. We work directly with hospitals and treatment centers to ensure funds reach patients quickly when they need it most. Every donation helps save lives and gives families hope during their darkest hours.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Health',
    goal: 75000,
    raised: 45200,
    donors: 312,
    daysLeft: 67,
    organizer: 'Hope Cancer Foundation',
    location: 'Multiple Locations',
    createdAt: '2024-01-20',
    featured: true,
    tags: ['health', 'cancer', 'medical', 'emergency']
  },
  {
    id: '4',
    title: 'Reforestation Project - Plant 10,000 Trees',
    description: 'Combat climate change by planting native trees in deforested areas.',
    fullDescription: 'Climate change is one of the greatest challenges of our time, and reforestation is a powerful solution. This project aims to plant 10,000 native trees in areas affected by deforestation. We work with local communities to select appropriate species, prepare the land, and ensure proper care for newly planted trees. The project includes ongoing monitoring and maintenance for three years to ensure high survival rates. Beyond carbon sequestration, these trees will provide habitat for wildlife, prevent soil erosion, and support local ecosystems.',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Environment',
    goal: 30000,
    raised: 22100,
    donors: 189,
    daysLeft: 34,
    organizer: 'Green Earth Initiative',
    location: 'Amazon Basin, Brazil',
    createdAt: '2024-01-10',
    featured: false,
    tags: ['environment', 'trees', 'climate', 'conservation']
  },
  {
    id: '5',
    title: 'Mobile Health Clinic for Remote Areas',
    description: 'Bringing essential healthcare services to underserved rural communities.',
    fullDescription: 'Many rural communities lack access to basic healthcare services due to distance and infrastructure challenges. Our mobile health clinic project aims to bridge this gap by providing regular medical services directly to remote villages. The clinic will be equipped with essential medical equipment, medications, and staffed by qualified healthcare professionals. Services include preventive care, treatment of common illnesses, maternal health support, and health education programs. The mobile unit will follow a regular schedule, visiting each community monthly.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Health',
    goal: 85000,
    raised: 38900,
    donors: 267,
    daysLeft: 89,
    organizer: 'Rural Health Network',
    location: 'Northern Ghana',
    createdAt: '2024-02-10',
    featured: true,
    tags: ['health', 'mobile', 'rural', 'access']
  },
  {
    id: '6',
    title: 'Digital Learning Lab for Schools',
    description: 'Equipping schools with computers and internet access for digital literacy.',
    fullDescription: 'In today\'s digital world, computer literacy is essential for students\' future success. This project establishes digital learning labs in underserved schools, providing computers, internet connectivity, and digital literacy training. Each lab will serve 200+ students, offering courses in basic computer skills, internet safety, coding fundamentals, and digital creativity. We also train teachers to integrate technology into their curriculum effectively. The project includes ongoing technical support and regular equipment updates to ensure sustainability.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Education',
    goal: 40000,
    raised: 28600,
    donors: 198,
    daysLeft: 56,
    organizer: 'Digital Education Alliance',
    location: 'Rural Philippines',
    createdAt: '2024-01-25',
    featured: false,
    tags: ['education', 'technology', 'digital', 'schools']
  }
];

export const donations: Donation[] = [
  {
    id: '1',
    campaignId: '1',
    donorName: 'Sarah Johnson',
    amount: 250,
    message: 'Clean water is a basic human right. Happy to support this important cause!',
    date: '2024-02-15',
    anonymous: false
  },
  {
    id: '2',
    campaignId: '1',
    donorName: 'Anonymous',
    amount: 500,
    date: '2024-02-14',
    anonymous: true
  },
  {
    id: '3',
    campaignId: '2',
    donorName: 'Michael Chen',
    amount: 100,
    message: 'Education changes lives. Keep up the great work!',
    date: '2024-02-13',
    anonymous: false
  },
  {
    id: '4',
    campaignId: '3',
    donorName: 'Emily Rodriguez',
    amount: 300,
    message: 'My thoughts are with all the families affected by cancer.',
    date: '2024-02-12',
    anonymous: false
  },
  {
    id: '5',
    campaignId: '1',
    donorName: 'David Wilson',
    amount: 150,
    date: '2024-02-11',
    anonymous: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Santos',
    role: 'Beneficiary',
    content: 'Thanks to the clean water project, my children no longer get sick from contaminated water. Our entire community has been transformed.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    campaignId: '1'
  },
  {
    id: '2',
    name: 'Dr. James Mitchell',
    role: 'Medical Director',
    content: 'The mobile health clinic has been a game-changer for our rural communities. We\'ve been able to provide care to thousands of people who previously had no access to healthcare.',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
    campaignId: '5'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Scholarship Recipient',
    content: 'The scholarship program gave me the opportunity to pursue my dreams of becoming an engineer. I\'m now in my final year and excited to give back to my community.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    campaignId: '2'
  },
  {
    id: '4',
    name: 'Robert Thompson',
    role: 'Donor',
    content: 'I\'ve been supporting various campaigns on this platform for two years. It\'s incredible to see the direct impact of donations and how they change lives.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '5',
    name: 'Ana Gutierrez',
    role: 'Environmental Activist',
    content: 'The reforestation project is making a real difference in combating climate change. Every tree planted is a step toward a more sustainable future.',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    campaignId: '4'
  },
  {
    id: '6',
    name: 'Teacher John Adams',
    role: 'Educator',
    content: 'The digital learning lab has revolutionized how we teach. Our students are now excited about technology and learning new skills that will help them in the future.',
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400',
    campaignId: '6'
  }
];

export const categories = [
  'All Categories',
  'Health',
  'Education',
  'Environment',
  'Emergency',
  'Community',
  'Animals',
  'Arts & Culture',
  'Sports',
  'Technology'
];