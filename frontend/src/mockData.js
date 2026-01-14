// Mock data for Cordflex landing page
export const mockData = {
  // Product Information
  product: {
    name: "Cordflex",
    tagline: "Transform ICU Line Management in <30 seconds",
    description: "The Cordflex Clip reduces nurse time by 37% and makes 78% of nurses feel safer during patient ambulation",
    youtubeVideoId: "uxTUu8HbrEg",
    features: [
      "Single-Use",
      "Sterile", 
      "FDA Registered"
    ]
  },

  // Statistics
  statistics: {
    problemStats: [
      { value: "9.6", label: "average lines per ICU patient", icon: "activity" },
      { value: "61%", label: "of ambulation time spent on line management", icon: "clock" },
      { value: "84%", label: "of nurses witnessed patient harm from poor cord management", icon: "alert-triangle" },
      { value: "$40,000+", label: "annual cost per ICU from line-related incidents", icon: "dollar-sign" }
    ],
    resultStats: [
      { value: "37%", label: "faster line identification", color: "green" },
      { value: "40%", label: "reduction in line pullouts", color: "green" },
      { value: "25%", label: "increase in patient ambulation", color: "green" },
      { value: "90%", label: "of surveyed nurses would use Cordflex if stocked", color: "green" }
    ]
  },

  // Solutions
  solutions: [
    {
      title: "Immediate Implementation",
      icon: "clock",
      points: [
        "<30-second installation",
        "Intuitive design - works like a hair clip",
        "5-minute staff training"
      ]
    },
    {
      title: "Proven Results", 
      icon: "trending-up",
      points: [
        "37% faster line identification",
        "40% reduction in line pullouts",
        "25% increase in patient ambulation"
      ]
    },
    {
      title: "Universal Compatibility",
      icon: "link",
      points: [
        "Attaches to any surface",
        "Accommodates all line types",
        "2-degree freedom of movement"
      ]
    }
  ],

  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "ICU Nurse Manager",
      hospital: "Large Urban Hospital",
      content: "The Cordflex Clip has saved our unit countless hours in line management. It's a small investment with massive returns.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Staff Nurse",
      hospital: "Level 1 Trauma Center",
      content: "I used to dread patient transfers due to tangles and pullouts, but Cordflex makes it seamless.",
      rating: 5
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      title: "Quality Director",
      hospital: "Community Hospital",
      content: "We saw a 40% reduction in line pullouts within our first month of implementation.",
      rating: 5
    }
  ],

  // FAQ Data
  faq: [
    {
      question: "How long does it take to install the Cordflex Clip?",
      answer: "Installation takes less than 30 seconds. The intuitive design works like a hair clip, making it easy for staff to use immediately."
    },
    {
      question: "Is training required for staff?",
      answer: "Minimal training is required - just 5 minutes of staff training is sufficient for full implementation."
    },
    {
      question: "What types of medical lines does it support?",
      answer: "Cordflex accommodates all line types and attaches to any surface with 2-degree freedom of movement."
    },
    {
      question: "Is the Cordflex Clip sterile?",
      answer: "Yes, Cordflex is single-use, sterile, and FDA registered for safe use in ICU environments."
    },
    {
      question: "What kind of results can we expect?",
      answer: "Clinical studies show 37% faster line identification, 40% reduction in line pullouts, and 25% increase in patient ambulation."
    }
  ],

  // Implementation Timeline
  timeline: [
    {
      week: "Week 1",
      title: "Initial consultation & needs assessment",
      description: "Our team evaluates your ICU's specific needs and current line management processes."
    },
    {
      week: "Week 2-3", 
      title: "Pilot program setup",
      description: "We establish a pilot program with selected units to test Cordflex implementation."
    },
    {
      week: "Week 4-8",
      title: "Data collection & optimization",
      description: "Monitor performance metrics and optimize workflows based on real-world usage."
    },
    {
      week: "Week 9-12",
      title: "Full implementation & training",
      description: "Roll out across all ICU units with comprehensive staff training programs."
    },
    {
      week: "Month 4+",
      title: "Ongoing support & outcome tracking",
      description: "Continuous monitoring and support to ensure sustained improvements."
    }
  ],

  // Resources
  resources: [
    {
      title: "The True Cost of ICU Line Management",
      type: "White Paper",
      description: "Comprehensive analysis of line management costs and inefficiencies in modern ICUs."
    },
    {
      title: "Cordflex Clinical Validation Study",
      type: "Research Study",
      description: "Detailed clinical study results showing Cordflex effectiveness and safety data."
    },
    {
      title: "Value Analysis Committee Presentation",
      type: "Implementation Guide",
      description: "Ready-to-use presentation template for hospital value analysis committees."
    },
    {
      title: "Staff Training Materials",
      type: "Training Guide",
      description: "Complete training materials and protocols for nursing staff onboarding."
    }
  ],

  // Products for Cart
  products: [
    {
      id: 1,
      name: "Cordflex Starter Kit",
      description: "5 clips",
      price: 49.99,
      image: "/api/placeholder/200/200"
    },
    {
      id: 2,
      name: "Cordflex ICU Bundle", 
      description: "25 clips",
      price: 199.99,
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Cordflex Department Pack",
      description: "100 clips",
      price: 699.99,
      image: "/api/placeholder/200/200"
    }
  ],

  // Trust Indicators
  trustIndicators: {
    certifications: [
      "FDA Registered",
      "ISO 13485 Certified",
      "Made in USA",
      "Patent Pending"
    ],
    partners: [
      "American Organization for Nursing Leadership",
      "Association for Healthcare Environment",
      "National Association of Healthcare Quality"
    ]
  }
};