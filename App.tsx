
import React, { useState } from 'react';
import { SiteData, ThemeType, SocialLink, ContactButton, ServiceItem, Testimonial, BusinessHour } from './types';
import { PhonePreview } from './components/PhonePreview';
import { ThemeCard } from './components/ThemeCard';
import { SectionHeader, InputGroup, ToggleSwitch, Button } from './components/UIComponents';
import { 
  LayoutDashboard, CreditCard, LogOut, Upload, Plus, Trash2, 
  Palette, UserCircle, Share2, Briefcase, Image as ImageIcon, MessageSquare, Clock, Download, Smartphone, Zap, Coffee, Building2, Leaf, Crown, Camera, Plane, Code2, Utensils, Star, MapPin as MapPinIcon,
  Search, SlidersHorizontal, Eye
} from 'lucide-react';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Initial State (Default to Mobile Repair theme as it's the first one)
const INITIAL_DATA: SiteData = {
  theme: 'mobile',
  profile: {
    name: 'A.K MOBILE REPAIRING',
    title: 'Mobile Repairing Shop',
    location: 'Main Market, City Center',
    avatarUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=300&q=80',
    bannerUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
    bio: 'A.K. Mobile Repairing Shop – Your trusted destination for all mobile solutions. We specialize in mobile phone repairing, software updates, screen replacement, and battery change.',
  },
  contact: {
    email: 'akmobile@example.com',
    phone: '+919876543210',
    website: 'www.akmobile.com'
  },
  socials: [
    { id: '1', platform: 'facebook', url: '#' },
    { id: '2', platform: 'whatsapp', url: '#' },
    { id: '3', platform: 'instagram', url: '#' },
    { id: '4', platform: 'twitter', url: '#' } // Using twitter icon for location arrow in screenshot
  ],
  buttons: [
    { id: '1', type: 'link', label: 'Our Website', value: 'https://example.com' },
    { id: '2', type: 'whatsapp', label: 'WhatsApp Us', value: '+919876543210' },
    { id: '3', type: 'phone', label: 'Call Us', value: '+919876543210' },
    { id: '4', type: 'email', label: 'Email', value: 'akmobile@example.com' },
  ],
  services: [
    { 
      id: '1', 
      title: 'Screen Replacement', 
      description: 'Broken or cracked screen? We provide original quality screen and glass replacement.', 
      price: '',
      imageUrl: 'https://images.unsplash.com/photo-1605234563853-271597405232?auto=format&fit=crop&w=200' 
    },
    { 
      id: '2', 
      title: 'Battery Replacement', 
      description: 'Facing battery drain or charging problems? Get long-lasting battery replacement.', 
      price: '',
      imageUrl: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=200' 
    }
  ],
  testimonials: [
    { id: '1', name: 'Happy Customer', role: 'Verified', text: 'This is a sample review. Great service!', avatarUrl: '' }
  ],
  gallery: [
    'https://images.unsplash.com/photo-1598327773204-747379d712ce?auto=format&fit=crop&w=300',
    'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=300',
    'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=300'
  ],
  hours: DAYS.map(day => ({ 
    day, 
    open: '09:00 AM', 
    close: '06:00 PM', 
    isClosed: day === 'Sunday' 
  })),
  appSection: {
    enabled: false,
    title: '--Download App--',
    buttonText: 'Download Application',
    buttonLink: '#',
    iconUrl: '',
    installPwa: false
  },
  googleReviews: {
    enabled: false,
    businessUrl: '',
    reviews: []
  },
  settings: {
    showFloatingButton: true,
    showQrCode: true,
    allowSaveContact: true
  }
};

// --- PREDEFINED TEMPLATES ---
const TEMPLATES: Record<string, Partial<SiteData>> = {
  mobile: {
    theme: 'mobile',
    profile: {
      name: 'A.K MOBILE REPAIRING',
      title: 'Mobile Repairing Shop',
      location: 'Main Market, City Center',
      avatarUrl: 'https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=300&q=80',
      bannerUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      bio: 'A.K. Mobile Repairing Shop – Your trusted destination for all mobile solutions. We specialize in mobile phone repairing, software updates, screen replacement, battery change, and complete hardware services.',
    },
    services: [
      { id: '1', title: 'Screen Replacement', description: 'Original quality screen and glass replacement for all mobile brands.', price: '₹1200', imageUrl: 'https://images.unsplash.com/photo-1598327773204-747379d712ce?auto=format&fit=crop&w=200' },
      { id: '2', title: 'Battery Replacement', description: 'Fix battery drain and charging issues with reliable replacement.', price: '₹800', imageUrl: 'https://images.unsplash.com/photo-1565514020176-db93eb895f32?auto=format&fit=crop&w=200' }
    ],
    buttons: [
       { id: '1', type: 'link', label: 'Our Website', value: '#' },
       { id: '2', type: 'whatsapp', label: 'WhatsApp Us', value: '+919876543210' },
       { id: '3', type: 'phone', label: 'Call Us', value: '+919876543210' },
       { id: '4', type: 'email', label: 'Email', value: 'akmobile@example.com' },
    ]
  },
  wedding: {
    theme: 'wedding',
    profile: {
      name: 'VK EDITION WEDDING FILMS',
      title: 'PHOTOGRAPHER',
      location: 'Mumbai, IN',
      avatarUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc330e7?auto=format&fit=crop&w=300&q=80',
      bannerUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      bio: 'At VK Wedding Films, we turn your special moments into timeless stories. With a cinematic approach and creative vision, we capture the essence of Indian weddings in the most authentic way.',
    },
    services: [
      { id: 'w1', title: 'Wedding Photography', description: 'Capture your special day with breathtaking wedding photography filled with emotions.', price: 'On Request', imageUrl: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&w=200' },
      { id: 'w2', title: 'Engagement Coverage', description: 'Complete coverage of your engagement and reception with perfect blend of candid style.', price: 'On Request', imageUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=200' }
    ],
    buttons: [
      { id: '1', type: 'email', label: 'Email me', value: 'vk@example.com' },
      { id: '2', type: 'whatsapp', label: 'WhatsApp Me', value: '+919876543210' },
      { id: '3', type: 'link', label: 'Our Website', value: '#' },
      { id: '4', type: 'phone', label: 'Call me', value: '+919876543210' }
    ]
  },
  travel: {
    theme: 'travel',
    profile: {
      name: 'Vikrant Travels',
      title: 'Travel Agency',
      location: 'New Delhi, India',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      bannerUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80',
      bio: 'Explore the world with Vikrant Travels. We provide the best tour packages, flight bookings, and hotel reservations to make your trip memorable.',
    },
    services: [
      { id: 't1', title: 'Bali Package', description: '5 Days / 4 Nights. Includes Flights & Hotel.', price: '₹19,999', imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=200' },
      { id: 't2', title: 'China Tourism', description: 'Explore the Great Wall and Forbidden City.', price: '₹24,999', imageUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=200' }
    ],
    buttons: [
      { id: '1', type: 'phone', label: 'Contact Us', value: '+919876543210' },
      { id: '2', type: 'link', label: 'Visit Our Website', value: '#' },
      { id: '3', type: 'email', label: 'Email Us', value: 'vikrant@example.com' },
      { id: '4', type: 'phone', label: 'Call Us', value: '+919876543210' }
    ]
  },
  developer: {
    theme: 'developer',
    profile: {
      name: 'Akash Choudary',
      title: 'Android Developer',
      location: 'Bangalore, India',
      avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
      bannerUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80',
      bio: 'Hello 👋 I am an Android developer Currently working on my own projects. I build high-quality mobile applications.',
    },
    services: [
      { id: 'd1', title: 'Android Development', description: 'Native Android apps using Kotlin/Java.', price: '₹14,999', imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=200' },
      { id: 'd2', title: 'Flutter Development', description: 'Cross-platform apps for iOS and Android.', price: '₹14,999', imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=200' }
    ],
    buttons: [
      { id: '1', type: 'link', label: 'Make a Card like this', value: '#' },
      { id: '2', type: 'whatsapp', label: 'WhatsApp Me', value: '+919876543210' }
    ]
  },
  bakery: {
    theme: 'bakery',
    profile: {
      name: 'Fronti Bakery',
      title: 'Premium Bakery',
      location: 'Kolkata, India',
      avatarUrl: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=300&q=80',
      bannerUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
      bio: 'We are committed to providing the best sweet treats to our customers. Our team of experienced bakers is dedicated to ensuring your well-being and comfort through taste.',
    },
    services: [
      { id: 'b1', title: 'Custom Cakes', description: 'Birthday and Wedding cakes made to order.', price: '₹500/kg', imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200' },
      { id: 'b2', title: 'Fresh Pastries', description: 'Daily fresh pastries, croissants, and donuts.', price: '₹49.99', imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=200' }
    ],
    buttons: [
      { id: '1', type: 'phone', label: 'Call Now', value: '+919876543210' },
      { id: '2', type: 'whatsapp', label: 'Chat on WhatsApp', value: '+919876543210' }
    ]
  }
};

const THEME_KEYS = Object.keys(TEMPLATES);

export default function App() {
  const [data, setData] = useState<SiteData>(INITIAL_DATA);
  const [openSection, setOpenSection] = useState<string | null>('theme');
  const [activeTab, setActiveTab] = useState<'themes' | 'editor'>('themes');
  const [searchQuery, setSearchQuery] = useState('');

  // Generic Handlers
  const toggleSection = (id: string) => setOpenSection(openSection === id ? null : id);
  
  const updateProfile = (field: keyof typeof data.profile, value: string) => {
    setData(prev => ({ ...prev, profile: { ...prev.profile, [field]: value } }));
  };

  const updateSetting = (field: keyof typeof data.settings, value: boolean) => {
    setData(prev => ({ ...prev, settings: { ...prev.settings, [field]: value } }));
  };

  const updateAppSection = (field: keyof typeof data.appSection, value: any) => {
    setData(prev => ({ 
      ...prev, 
      appSection: { ...prev.appSection, [field]: value } 
    }));
  };

  const updateGoogleReviews = (field: keyof typeof data.googleReviews, value: any) => {
    setData(prev => ({
      ...prev,
      googleReviews: { ...prev.googleReviews, [field]: value }
    }));
  };

  const fetchReviews = () => {
    // Simulated Fetch
    const mockReviews = [
      {
        id: 'r1',
        author: 'Rahul Verma',
        rating: 5,
        text: 'Absolutely amazing service! The team was very professional and quick.',
        date: '2 days ago',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
      },
      {
        id: 'r2',
        author: 'Sarah Jenkins',
        rating: 5,
        text: 'Top notch quality and great attention to detail. Highly recommend!',
        date: '1 week ago',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
      }
    ];
    updateGoogleReviews('reviews', mockReviews);
  };

  const applyTemplate = (key: string) => {
    const template = TEMPLATES[key];
    if (template) {
      setData(prev => ({
        ...prev,
        ...template,
        settings: prev.settings,
        appSection: prev.appSection,
        gallery: prev.gallery,
        hours: prev.hours,
        googleReviews: prev.googleReviews
      }));
    }
  };

  const removeItem = <T extends { id: string }>(key: keyof SiteData, id: string) => {
    setData(prev => ({ 
      ...prev, 
      [key]: (prev[key] as T[]).filter(item => item.id !== id) 
    }));
  };

  const addItem = (key: keyof SiteData, item: any) => {
    setData(prev => ({
      ...prev,
      [key]: [...(prev[key] as any[]), { ...item, id: Date.now().toString() }]
    }));
  };

  // Filter themes based on search
  const filteredThemeKeys = THEME_KEYS.filter(key => {
    const tmpl = TEMPLATES[key];
    if (!tmpl) return false;
    const search = searchQuery.toLowerCase();
    return (
      tmpl.profile?.name?.toLowerCase().includes(search) || 
      tmpl.profile?.title?.toLowerCase().includes(search) ||
      key.includes(search)
    );
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      {/* Sidebar (Navigation) */}
      <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col z-20">
        <div className="p-6 border-b border-gray-100 flex items-center gap-2">
           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">D</div>
           <span className="text-xl font-bold text-gray-800">DigiBuilder</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Overview</div>
          
          <button 
            onClick={() => setActiveTab('themes')}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'themes' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Palette size={18} /> Themes <span className="ml-auto text-xs bg-blue-100 text-blue-800 py-0.5 px-2 rounded-full">New</span>
          </button>

          <button 
            onClick={() => setActiveTab('editor')}
            className={`w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === 'editor' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <LayoutDashboard size={18} /> Dashboard
          </button>
          
          <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50">
            <CreditCard size={18} /> Membership
          </button>
           <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50">
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden bg-gray-50">
        
        {/* Editor/Themes Panel (Left/Middle) */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-[1400px] mx-auto space-y-6">
            
            {/* New Main Header (Matches Screenshot) */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
               {activeTab === 'themes' ? (
                 <div className="flex-1 w-full flex items-center gap-2 max-w-xl mx-auto">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input 
                        type="text"
                        placeholder="Search here"
                        className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <button className="p-2.5 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-50">
                       <SlidersHorizontal size={20} />
                    </button>
                 </div>
               ) : (
                 <div className="flex-1"></div>
               )}

               <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                 <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-green-500 text-green-600 font-medium text-sm hover:bg-green-50 transition-colors">
                    <MessageSquare size={18} /> Contact Support
                 </button>
                 <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-colors">
                    <Eye size={18} /> Preview Live
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm">
                    <Upload size={18} /> Save Changes
                 </button>
               </div>
            </div>

            {/* THEMES TAB CONTENT */}
            {activeTab === 'themes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredThemeKeys.map(key => {
                  const tmpl = TEMPLATES[key];
                  // Construct full site data for preview
                  const previewData: SiteData = {
                    ...INITIAL_DATA,
                    ...tmpl,
                    theme: key as ThemeType,
                    // Ensure arrays are populated if missing in template partial
                    socials: tmpl.socials || INITIAL_DATA.socials,
                    services: tmpl.services || INITIAL_DATA.services,
                    buttons: tmpl.buttons || INITIAL_DATA.buttons,
                  };
                  
                  return (
                    <div key={key} className="h-[480px]">
                      <ThemeCard 
                        data={previewData} 
                        isActive={data.theme === key}
                        onApply={() => {
                          applyTemplate(key);
                          setActiveTab('editor');
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}

            {/* EDITOR TAB CONTENT */}
            {activeTab === 'editor' && (
              <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                   <h2 className="text-2xl font-bold text-gray-800 mb-2">Edit Digital Card</h2>
                   <p className="text-gray-500">Customize your card details and design.</p>
                </div>

                {/* 1. Theme Selection (Mini) */}
                <div className="space-y-2">
                  <SectionHeader 
                    title="Active Theme" 
                    isOpen={openSection === 'theme'} 
                    onToggle={() => toggleSection('theme')} 
                  />
                  {openSection === 'theme' && (
                    <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">Current Theme: <span className="font-bold capitalize text-gray-900">{data.theme}</span></span>
                        <button onClick={() => setActiveTab('themes')} className="text-sm text-blue-600 hover:underline">Change Template</button>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Profile Information */}
                <div className="space-y-2">
                  <SectionHeader 
                    title="Profile Information" 
                    isOpen={openSection === 'profile'} 
                    onToggle={() => toggleSection('profile')} 
                  />
                  {openSection === 'profile' && (
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm space-y-4">
                      <div className="flex items-center gap-4 mb-4">
                        <img src={data.profile.avatarUrl} alt="Avatar" className="w-20 h-20 rounded-full object-cover border" />
                        <Button variant="secondary" className="text-xs">
                          <Upload size={14} /> Change Photo
                        </Button>
                      </div>
                      <InputGroup label="Full Name" value={data.profile.name} onChange={(e) => updateProfile('name', e.target.value)} />
                      <InputGroup label="Professional Title" value={data.profile.title} onChange={(e) => updateProfile('title', e.target.value)} />
                      <InputGroup label="Location" value={data.profile.location} onChange={(e) => updateProfile('location', e.target.value)} />
                      <InputGroup label="Bio / About" as="textarea" value={data.profile.bio} onChange={(e) => updateProfile('bio', e.target.value)} />
                    </div>
                  )}
                </div>

                 {/* New: Google Business Reviews */}
                 <div className="space-y-2">
                  <SectionHeader 
                    title="Google Business Reviews" 
                    isOpen={openSection === 'google'} 
                    onToggle={() => toggleSection('google')} 
                  />
                  {openSection === 'google' && (
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm space-y-4">
                      <ToggleSwitch 
                        label="Enable Google Reviews" 
                        checked={data.googleReviews.enabled} 
                        onChange={(val) => updateGoogleReviews('enabled', val)} 
                      />
                      {data.googleReviews.enabled && (
                        <>
                          <InputGroup 
                            label="Google Business Link" 
                            placeholder="https://g.page/..."
                            value={data.googleReviews.businessUrl} 
                            onChange={(e) => updateGoogleReviews('businessUrl', e.target.value)} 
                          />
                          <div className="flex justify-end">
                            <Button onClick={fetchReviews} variant="primary">
                              <Star className="w-4 h-4 mr-2" /> Fetch Latest Reviews
                            </Button>
                          </div>
                          {data.googleReviews.reviews.length > 0 && (
                            <div className="bg-green-50 text-green-700 p-3 rounded text-sm mt-2 border border-green-200">
                               ✓ Successfully fetched {data.googleReviews.reviews.length} reviews.
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* 3. Contact Buttons */}
                <div className="space-y-2">
                  <SectionHeader 
                    title="Contact Buttons" 
                    isOpen={openSection === 'buttons'} 
                    onToggle={() => toggleSection('buttons')} 
                  />
                  {openSection === 'buttons' && (
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm space-y-4">
                      {data.buttons.map((btn, idx) => (
                        <div key={btn.id} className="flex gap-3 items-end p-3 bg-gray-50 rounded-md">
                            <div className="flex-1 space-y-2">
                              <div className="grid grid-cols-2 gap-2">
                                <input 
                                    className="px-3 py-2 border rounded-md text-sm" 
                                    value={btn.label} 
                                    onChange={(e) => {
                                      const newBtns = [...data.buttons];
                                      newBtns[idx].label = e.target.value;
                                      setData({...data, buttons: newBtns});
                                    }}
                                />
                                  <select 
                                    className="px-3 py-2 border rounded-md text-sm"
                                    value={btn.type}
                                    onChange={(e) => {
                                      const newBtns = [...data.buttons];
                                      newBtns[idx].type = e.target.value as any;
                                      setData({...data, buttons: newBtns});
                                    }}
                                  >
                                    <option value="phone">Phone</option>
                                    <option value="email">Email</option>
                                    <option value="whatsapp">WhatsApp</option>
                                    <option value="link">Link</option>
                                    <option value="map">Map</option>
                                  </select>
                              </div>
                              <input 
                                  className="w-full px-3 py-2 border rounded-md text-sm" 
                                  value={btn.value}
                                  onChange={(e) => {
                                    const newBtns = [...data.buttons];
                                    newBtns[idx].value = e.target.value;
                                    setData({...data, buttons: newBtns});
                                  }} 
                              />
                            </div>
                            <button 
                              onClick={() => removeItem('buttons', btn.id)}
                              className="p-2 text-red-500 hover:bg-red-100 rounded-md"
                            >
                              <Trash2 size={18} />
                            </button>
                        </div>
                      ))}
                      <Button variant="secondary" className="w-full" onClick={() => addItem('buttons', { type: 'phone', label: 'New Button', value: '' })}>
                        <Plus size={16} /> Add Button
                      </Button>
                    </div>
                  )}
                </div>

                {/* 4. Services */}
                <div className="space-y-2">
                  <SectionHeader 
                    title="Services & Products" 
                    isOpen={openSection === 'services'} 
                    onToggle={() => toggleSection('services')} 
                  />
                  {openSection === 'services' && (
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm space-y-4">
                      {data.services.map((svc, idx) => (
                        <div key={svc.id} className="border border-gray-200 rounded-lg p-4 relative">
                          <button onClick={() => removeItem('services', svc.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                            <Trash2 size={16} />
                          </button>
                          <div className="grid grid-cols-1 sm:grid-cols-[60px_1fr] gap-4">
                              <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                                {svc.imageUrl ? (
                                  <img src={svc.imageUrl} className="w-full h-full object-cover" alt="" />
                                ) : (
                                  <ImageIcon size={20} className="text-gray-400" />
                                )}
                              </div>
                              <div className="space-y-2">
                                <input 
                                  className="w-full px-3 py-1.5 border rounded-md text-sm font-medium" 
                                  placeholder="Service Title"
                                  value={svc.title}
                                  onChange={(e) => {
                                    const newSvc = [...data.services];
                                    newSvc[idx].title = e.target.value;
                                    setData({...data, services: newSvc});
                                  }}
                                />
                                <textarea 
                                  className="w-full px-3 py-1.5 border rounded-md text-sm" 
                                  rows={2}
                                  placeholder="Description"
                                  value={svc.description}
                                  onChange={(e) => {
                                    const newSvc = [...data.services];
                                    newSvc[idx].description = e.target.value;
                                    setData({...data, services: newSvc});
                                  }}
                                />
                                <input 
                                  className="w-1/2 px-3 py-1.5 border rounded-md text-sm" 
                                  placeholder="Price (Optional)"
                                  value={svc.price}
                                  onChange={(e) => {
                                    const newSvc = [...data.services];
                                    newSvc[idx].price = e.target.value;
                                    setData({...data, services: newSvc});
                                  }}
                                />
                              </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="secondary" className="w-full" onClick={() => addItem('services', { title: '', description: '' })}>
                        <Plus size={16} /> Add Service
                      </Button>
                    </div>
                  )}
                </div>

                {/* 5. Business Hours */}
                <div className="space-y-2">
                  <SectionHeader 
                    title="Business Hours" 
                    isOpen={openSection === 'hours'} 
                    onToggle={() => toggleSection('hours')} 
                  />
                  {openSection === 'hours' && (
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm space-y-4">
                      {data.hours.map((h, idx) => (
                        <div key={h.day} className="flex items-center gap-2 text-sm">
                          <div className="w-24 font-medium">{h.day}</div>
                          <div className="flex-1 grid grid-cols-2 gap-2">
                            <input 
                              disabled={h.isClosed}
                              value={h.open}
                              onChange={(e) => {
                                const newHours = [...data.hours];
                                newHours[idx].open = e.target.value;
                                setData({...data, hours: newHours});
                              }}
                              className="px-2 py-1 border rounded disabled:bg-gray-100"
                            />
                            <input 
                              disabled={h.isClosed}
                              value={h.close}
                              onChange={(e) => {
                                const newHours = [...data.hours];
                                newHours[idx].close = e.target.value;
                                setData({...data, hours: newHours});
                              }}
                              className="px-2 py-1 border rounded disabled:bg-gray-100"
                            />
                          </div>
                          <label className="flex items-center gap-1 cursor-pointer">
                            <input 
                              type="checkbox" 
                              checked={h.isClosed}
                              onChange={(e) => {
                                const newHours = [...data.hours];
                                newHours[idx].isClosed = e.target.checked;
                                setData({...data, hours: newHours});
                              }}
                              className="rounded text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-xs text-gray-500">Closed</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 6. App Download Section */}
                <div className="space-y-2">
                  <SectionHeader 
                    title="App Download Section" 
                    isOpen={openSection === 'app'} 
                    onToggle={() => toggleSection('app')} 
                  />
                  {openSection === 'app' && (
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm space-y-4">
                      <ToggleSwitch 
                        label="Enable App Section" 
                        checked={data.appSection.enabled} 
                        onChange={(val) => updateAppSection('enabled', val)} 
                      />
                      {data.appSection.enabled && (
                        <>
                          <InputGroup 
                            label="Section Title" 
                            value={data.appSection.title} 
                            onChange={(e) => updateAppSection('title', e.target.value)} 
                          />
                          <InputGroup 
                            label="Decorative Icon URL" 
                            value={data.appSection.iconUrl} 
                            onChange={(e) => updateAppSection('iconUrl', e.target.value)} 
                          />
                          <InputGroup 
                            label="Button Text" 
                            value={data.appSection.buttonText} 
                            onChange={(e) => updateAppSection('buttonText', e.target.value)} 
                          />
                          <InputGroup 
                            label="Button Link" 
                            value={data.appSection.buttonLink} 
                            onChange={(e) => updateAppSection('buttonLink', e.target.value)} 
                          />
                          <ToggleSwitch 
                            label="Use as PWA Install Trigger" 
                            checked={data.appSection.installPwa} 
                            onChange={(val) => updateAppSection('installPwa', val)} 
                          />
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* 7. Settings */}
                <div className="space-y-2">
                  <SectionHeader 
                    title="Card Settings" 
                    isOpen={openSection === 'settings'} 
                    onToggle={() => toggleSection('settings')} 
                  />
                  {openSection === 'settings' && (
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm divide-y divide-gray-100">
                      <ToggleSwitch 
                        label="Show Floating Share Button" 
                        checked={data.settings.showFloatingButton} 
                        onChange={(val) => updateSetting('showFloatingButton', val)} 
                      />
                      <ToggleSwitch 
                        label="Allow 'Save Contact'" 
                        checked={data.settings.allowSaveContact} 
                        onChange={(val) => updateSetting('allowSaveContact', val)} 
                      />
                      <ToggleSwitch 
                        label="Display QR Code" 
                        checked={data.settings.showQrCode} 
                        onChange={(val) => updateSetting('showQrCode', val)} 
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="h-20"></div> {/* Bottom Spacer */}
          </div>
        </div>

        {/* Preview Panel (Right) - Sticky on Desktop */}
        <div className="w-full md:w-[450px] bg-gray-100 border-l border-gray-200 flex flex-col items-center justify-center p-8 sticky top-0 h-screen hidden md:flex">
          <div className="mb-4 text-sm font-medium text-gray-500 uppercase tracking-wide">Live Preview</div>
          <PhonePreview data={data} />
          <p className="mt-4 text-xs text-gray-400">Changes update in real-time</p>
        </div>

        {/* Mobile Floating Preview Button */}
        <div className="md:hidden fixed bottom-4 right-4 z-50">
          <button 
             onClick={() => {
                const previewWindow = window.open('', '_blank');
                if (previewWindow) {
                    previewWindow.document.write('<h1>Preview is best viewed on desktop for this demo</h1>');
                }
             }}
             className="bg-blue-600 text-white p-4 rounded-full shadow-xl flex items-center gap-2"
          >
            <Share2 size={20} /> Preview
          </button>
        </div>

      </main>
    </div>
  );
}
