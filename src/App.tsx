import React, { useState, useEffect } from 'react';
import { ArrowRight, Leaf, Target, ShieldCheck, BarChart, Users, Globe, MessageSquare, Home, User, Settings, Phone, Moon, Sun, Facebook, Instagram, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { useTheme } from 'next-themes';
import botir from './images/botir.jpeg'

function App() {
  const [activeProcess, setActiveProcess] = useState('3');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  const benefits = [
    "Complete audit of your current ad campaigns",
    "Custom strategy tailored to your sustainable brand",
    "ROI projection and growth roadmap",
    "Competitor analysis insights",
    "Ad creative recommendations",
    "Budget optimization plan"
  ];

  const processes = {
    '3': [
      { day: 1, title: 'Strategy Session', description: 'Deep dive into your brand and goals' },
      { day: 2, title: 'Campaign Setup', description: 'Creating your custom ad campaigns' },
      { day: 3, title: 'Launch & Monitor', description: 'Going live with continuous optimization' }
    ],
    '7': [
      { day: 1, title: 'Discovery', description: 'Understanding your brand values' },
      { day: 2, title: 'Research', description: 'Market and competitor analysis' },
      { day: 3, title: 'Strategy', description: 'Developing campaign framework' },
      { day: 4, title: 'Creative', description: 'Ad design and copywriting' },
      { day: 5, title: 'Setup', description: 'Campaign configuration' },
      { day: 6, title: 'Launch', description: 'Going live with campaigns' },
      { day: 7, title: 'Optimize', description: 'Initial performance review' }
    ],
    '30': [
      { day: '1-7', title: 'Foundation', description: 'Setup and initial launch' },
      { day: '8-14', title: 'Optimization', description: 'Data collection and adjustments' },
      { day: '15-22', title: 'Scaling', description: 'Expanding successful campaigns' },
      { day: '23-30', title: 'Growth', description: 'Advanced optimization and scaling' }
    ]
  };

  const reasons = [
    {
      title: "We Understand the Eco-Conscious Consumer",
      description: "Deep insights into sustainable fashion buyers' behavior",
      icon: <Users className="w-8 h-8 text-[#FFD700]" />
    },
    {
      title: "Mission-Driven, Not Just Money-Driven",
      description: "Aligned with your values and sustainability goals",
      icon: <Target className="w-8 h-8 text-[#FFD700]" />
    },
    {
      title: "No Greenwashing, Just Authentic Marketing",
      description: "Honest, transparent advertising that builds trust",
      icon: <ShieldCheck className="w-8 h-8 text-[#FFD700]" />
    },
    {
      title: "Transparent & Data-Backed Results",
      description: "Clear reporting and measurable outcomes",
      icon: <BarChart className="w-8 h-8 text-[#FFD700]" />
    },
    {
      title: "We Scale Responsibly",
      description: "Sustainable growth that maintains profitability",
      icon: <Leaf className="w-8 h-8 text-[#FFD700]" />
    },
    {
      title: "We Work ONLY With Sustainable Brands",
      description: "Specialized expertise in eco-friendly fashion",
      icon: <Globe className="w-8 h-8 text-[#FFD700]" />
    }
  ];

  const services = [
    {
      title: "Meta Ads",
      description: "Engage eco-conscious shoppers with scroll-stopping creatives on Facebook & Instagram",
      icon: <Facebook className="w-8 h-8 text-[#FFD700]" />
    },
    {
      title: "Google Ads",
      description: "Capture high-intent buyers ready to purchase through Search, Shopping & Display",
      icon: <Globe className="w-8 h-8 text-[#FFD700]" />
    },
    {
      title: "Ad Copy & Creative Strategy",
      description: "Ethical storytelling that turns clicks into customers",
      icon: <MessageSquare className="w-8 h-8 text-[#FFD700]" />
    },
    {
      title: "Ad Management & Optimization",
      description: "Full-service setup, testing, and scaling for max ROI",
      icon: <Settings className="w-8 h-8 text-[#FFD700]" />
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Strategy Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      description: "10+ years in sustainable fashion marketing"
    },
    {
      name: "Michael Chen",
      role: "Head of Paid Media",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "Expert in scaling ethical brands"
    },
    {
      name: "Emma Williams",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      description: "Award-winning sustainable ad campaigns"
    }
  ];

  const faqs = [
    {
      question: "What happens during the 15-minute strategy call?",
      answer: "We analyze your current Meta & Google Ads (or help you start from scratch), identify gaps, and give quick-win strategies. No fluff, just value."
    },
    {
      question: "Is the call really free?",
      answer: "Yes! We want to help sustainable brands grow. If you find value in our insights, we can discuss working together, but there's no obligation."
    },
    {
      question: "What if I don't have ads running yet?",
      answer: "No problem! We'll outline the best approach for launching your first paid ad campaign."
    },
    {
      question: "What industries do you work with?",
      answer: "We only work with sustainable clothing brands, so our strategies are tailored for your niche."
    },
    {
      question: "What happens after the call?",
      answer: "You'll get a summary of recommendations, and if we're a good fit, we can discuss working together. If not, you'll still leave with actionable tips!"
    }
  ];

  return (
    <div className="bg-white dark:bg-[#111111] text-gray-900 dark:text-white min-h-screen pb-20 md:pb-0 transition-colors duration-300">
      {/* Desktop Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-sm hidden md:block">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-[#FFD700] text-2xl font-bold animate-fade-in">BiTi</div>
          <div className="flex gap-8 items-center">
            <a href="#about" className="hover:text-[#FFD700] transition-colors">About</a>
            <a href="#services" className="hover:text-[#FFD700] transition-colors">Services</a>
            <a href="#process" className="hover:text-[#FFD700] transition-colors">Process</a>
            <a href="#team" className="hover:text-[#FFD700] transition-colors">Team</a>
            <a href="#faq" className="hover:text-[#FFD700] transition-colors">FAQ</a>
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <a 
              href="https://calendly.com/botirtukhtayev/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-black px-6 py-2 rounded-full hover:bg-[#FFE44D] transition-colors animate-scale-in"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-sm md:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-[#FFD700] text-xl font-bold">BiTi</div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero-gradient pt-24 md:pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              We Scale Sustainable Clothing Brands with Profitable Meta & Google Ads
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Organic reach is slow. Paid ads drive instant, targeted growth. Let's put your brand 
              in front of high-intent buyers—profitably.
            </p>
            <a 
              href="https://calendly.com/botirtukhtayev/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#FFD700] text-black px-8 py-3 rounded-full text-lg font-semibold items-center gap-2 hover:bg-[#FFE44D] transition-colors"
            >
              Book a Free Demo Call <ArrowRight />
            </a>
          </div>
        </div>
      </section>

    {/* Copy Section */}
<section className="section-gradient py-20">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Image - Comes First on Mobile */}
      <div className="w-full md:w-1/2">
        <img 
          src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2940&auto=format&fit=crop"
          alt="Sustainable fashion"
          className="rounded-xl shadow-2xl w-full aspect-video object-cover"
        />
      </div>
      
      {/* Text - Appears Next on Mobile, Side-by-Side on Desktop */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Meta & Google Ads: The Fastest Way to Scale Your Sustainable Brand
        </h2>
        <p className="text-xl text-gray-300 mb-6">
          Your ideal customers are already searching. Let's put your brand in front of them.
        </p>
        <p className="text-gray-400 mb-6">
          The best products don't always win—the best-marketed ones do.
        </p>
        <p className="text-gray-400">
          With Meta & Google Ads, we target high-intent buyers at the right moment—whether 
          they're searching for sustainable fashion on Google or scrolling Instagram.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="about" className="py-20 bg-[#FEFCE8] dark:bg-[#0D0D0D] transition-colors duration-300">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Image Section - Appears First on Mobile */}
      <img 
  src={botir} 
  alt="Sustainable clothing" 
  className="rounded-xl shadow-xl w-full object-cover"
/>


      {/* About Us Text Content */}
      <div className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About BiTi
        </h2>
        <p className="text-gray-800 dark:text-gray-300 mb-6">
        BiTi is a performance marketing agency dedicated to scaling sustainable clothing brands 
      with high-impact Meta and Google Ads. We help ethical brands grow profitably by bringing their 
      mission to the right audience, profitably and sustainably.
        </p>
        <p className="text-gray-800 dark:text-gray-300 mb-6">
          We believe that ethical fashion should be the future, and we help brands like yours grow 
          profitably through transparent, results-focused advertising.
        </p>
      </div>

    </div>
  </div>
</section>



      {/* Why Choose Us Section */}
      <section id="why-us" className="section-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sustainability Meets Performance – Why Brands Work With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card p-6 rounded-xl">
                <div className="mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://calendly.com/botirtukhtayev/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#FFD700] text-black px-8 py-3 rounded-full text-lg font-semibold items-center gap-2 hover:bg-[#FFE44D] transition-colors"
            >
              Book Your Strategy Call
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We Run High-Performing Meta & Google Ads for Sustainable Clothing Brands
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card p-6 rounded-xl animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Process Section */}
      <section id="process" className="section-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See how we transform your marketing performance
            </h2>
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveProcess('3')}
                className={`process-tab ${activeProcess === '3' ? 'active' : ''}`}
              >
                3 Days
              </button>
              <button
                onClick={() => setActiveProcess('7')}
                className={`process-tab ${activeProcess === '7' ? 'active' : ''}`}
              >
                7 Days
              </button>
              <button
                onClick={() => setActiveProcess('30')}
                className={`process-tab ${activeProcess === '30' ? 'active' : ''}`}
              >
                30 Days
              </button>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            {processes[activeProcess].map((step, index) => (
              <div key={index} className="timeline-item">
                <h3 className="text-xl font-semibold mb-2">
                  Day {step.day}: {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the experts behind our success
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-member">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="team-member-info">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#FFD700] mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f3] dark:bg-[#0D0D0D] text-gray-900 dark:text-white py-20 border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
  <div className="container mx-auto px-4 md:px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Transform Your Marketing Performance with a Free Strategy Call
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
        Book your free 15-minute call and get actionable insights to scale your sustainable brand.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Benefits Section */}
        <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl shadow-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-4">What You'll Get:</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Why It's Different Section */}
        <div className="bg-white dark:bg-[#1A1A1A] p-6 rounded-xl shadow-lg transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-4">Why It's Different:</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Target className="w-6 h-6 text-[#FFD700]" />
              <span className="text-gray-700 dark:text-gray-300">Focused on sustainable fashion</span>
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-[#FFD700]" />
              <span className="text-gray-700 dark:text-gray-300">No pushy sales tactics</span>
            </li>
            <li className="flex items-center gap-2">
              <BarChart className="w-6 h-6 text-[#FFD700]" />
              <span className="text-gray-700 dark:text-gray-300">Data-driven insights</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-[#FFD700]" />
              <span className="text-gray-700 dark:text-gray-300">Clear, actionable advice</span>
            </li>
          </ul>
        </div>
      </div>
      {/* CTA Button */}
      <a 
        href="https://calendly.com/botirtukhtayev/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex bg-[#FFD700] text-black px-8 py-4 rounded-full text-lg font-semibold items-center gap-2 hover:bg-[#FFE44D] transition-all transform hover:scale-105"
      >
        Book Your Free Strategy Call Now <ArrowRight className="animate-pulse" />
      </a>
    </div>
  </div>
</section>




      {/* FAQ Section */}
      <section id="faq" className="section-gradient py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About the Call? We've Got Answers!
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item p-4">
                <div
                  className="faq-question flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span className="text-[#FFD700]">
                    {activeFaq === index ? '−' : '+'}
                  </span>
                </div>
                <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                  <p className="text-gray-400 mt-2">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl mb-6">Still have questions? Contact us!</p>
            <a 
              href="https://calendly.com/botirtukhtayev/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#FFD700] text-black px-8 py-3 rounded-full text-lg font-semibold items-center gap-2 hover:bg-[#FFE44D] transition-colors"
            >
              Book My Free Strategy Call Now
            </a>
          </div>
        </div>
      </section>

{/* Footer */}
<footer className="bg-gray-100 dark:bg-[#0D0D0D] text-gray-800 dark:text-white pt-20 pb-6 md:pb-20 transition-all">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
      <div className="text-center md:text-left">
        <h3 className="text-[#FFD700] text-2xl font-bold mb-4">BiTi</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
          Scaling sustainable clothing brands with profitable Meta & Google Ads.
        </p>
      </div>
      <div className="text-center md:text-left">
        <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-[#FFD700] transition-colors">About Us</a></li>
          <li><a href="#services" className="text-gray-600 dark:text-gray-400 hover:text-[#FFD700] transition-colors">Services</a></li>
          <li><a href="#process" className="text-gray-600 dark:text-gray-400 hover:text-[#FFD700] transition-colors">Process</a></li>
          <li><a href="#team" className="text-gray-600 dark:text-gray-400 hover:text-[#FFD700] transition-colors">Team</a></li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Get Started</h4>
        <a 
          href="https://calendly.com/botirtukhtayev/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-[#FFD700] text-black px-8 py-3 rounded-full text-base font-semibold hover:bg-[#FFE44D] transition-all transform hover:scale-105"
        >
          Book a Call
        </a>
      </div>
    </div>
    <div className="border-t border-gray-300 dark:border-gray-800 pt-6">
      <p className="text-center text-gray-600 dark:text-gray-400">
        © 2024 BiTi. All rights reserved.
      </p>
    </div>
  </div>
</footer>



      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#111111]/90 backdrop-blur-sm py-2 md:hidden z-50">
        <div className="flex justify-around items-center">
          <button
            onClick={() => scrollToSection('home')}
            className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className={`mobile-nav-item ${activeTab === 'about' ? 'active' : ''}`}
          >
            <User className="w-6 h-6" />
            <span className="text-xs mt-1">About</span>
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className={`mobile-nav-item ${activeTab === 'process' ? 'active' : ''}`}
          >
            <Settings className="w-6 h-6" />
            <span className="text-xs mt-1">Process</span>
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`mobile-nav-item ${activeTab === 'services' ? 'active' : ''}`}
          >
            <Globe className="w-6 h-6" />
            <span className="text-xs mt-1">Services</span>
          </button>
          <a
            href="https://calendly.com/botirtukhtayev/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`mobile-nav-item ${activeTab === 'contact' ? 'active' : ''}`}
          >
            <Phone className="w-6 h-6" />
            <span className="text-xs mt-1">Book Call</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;