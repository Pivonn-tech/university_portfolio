// University Configuration Data
const universityConfig = {
  university: {
    name: "ONNLY-TECH UNIVERSITY",
    shortName: "ONNLY-TECH",
    motto: "Where Innovation Meets Excellence",
    description: "Africa's premier institution for technology education, innovation, and research",
    founded: "2010",
    
    contact: {
      mainEmail: "info@onnlytech.edu",
      admissionsEmail: "admissions@onnlytech.edu",
      generalEmail: "onnlytechuni@gmail.com",
      phone: "+1 (555) 123-TECH",
      emergencyPhone: "+1 (555) 123-EMERGENCY",
      address: "Tech Innovation Park, Digital District, Silicon Valley, Africa 94025",
      officeHours: "Monday - Friday: 8:00 AM - 8:00 PM, Saturday: 9:00 AM - 4:00 PM"
    },

    stats: {
      students: "5,000+",
      faculty: "120+",
      employmentRate: "95%",
      programs: "50+",
      graduationRate: "92%",
      internationalStudents: "1,200+"
    }
  },

  // Programs Data
  programs: [
    { 
      id: "cs",
      icon: "Computer", 
      title: "Computer Science", 
      description: "Master programming, algorithms, data structures, and software engineering principles. Build scalable applications and systems.",
      color: "#2563eb"
    },
    { 
      id: "ds",
      icon: "Cloud", 
      title: "Data Science", 
      description: "Become an expert in AI, machine learning, statistical analysis, and big data processing. Work with real-world datasets.",
      color: "#7c3aed"
    },
    { 
      id: "cyber",
      icon: "Security", 
      title: "Cybersecurity", 
      description: "Protect digital assets, combat cyber threats, and learn ethical hacking, network security, and digital forensics.",
      color: "#059669"
    },
    { 
      id: "cloud",
      icon: "Cloud", 
      title: "Cloud Computing", 
      description: "Master AWS, Azure, Google Cloud platforms. Learn cloud architecture, DevOps, and scalable infrastructure design.",
      color: "#dc2626"
    },
    { 
      id: "mobile",
      icon: "Smartphone", 
      title: "Mobile Development", 
      description: "Build cutting-edge iOS and Android applications using modern frameworks like React Native, Flutter, and Swift.",
      color: "#ea580c"
    },
    { 
      id: "business",
      icon: "TrendingUp", 
      title: "Tech Business", 
      description: "Combine technology with entrepreneurial skills. Learn startup development, product management, and tech innovation.",
      color: "#ca8a04"
    }
  ],

  // Campus Features
  campusFeatures: [
    { 
      id: "library",
      icon: "LibraryBooks", 
      title: "Digital Library", 
      description: "24/7 access to millions of online resources, e-books, and research papers" 
    },
    { 
      id: "innovation",
      icon: "SportsBasketball", 
      title: "Innovation Hub", 
      description: "State-of-the-art labs, maker spaces, and collaborative environments" 
    },
    { 
      id: "cafeteria",
      icon: "Restaurant", 
      title: "Smart Cafeteria", 
      description: "Healthy meals, coffee shops, and collaborative study spaces" 
    },
    { 
      id: "scheduling", 
      icon: "Schedule", 
      title: "Flexible Scheduling", 
      description: "Day, evening, and weekend classes to fit your lifestyle" 
    }
  ],

  // Digital Features
  digitalFeatures: [
    { 
      id: "student-portal",
      icon: "Dashboard", 
      title: "Student Portal", 
      description: "Access your courses, assignments, grades, and campus announcements in one place",
      action: "/login",
      buttonText: "Access Portal",
      color: "#2563eb"
    },
    { 
      id: "application",
      icon: "PersonAdd", 
      title: "Easy Application", 
      description: "Streamlined online application process with instant admission decision",
      action: "/apply", 
      buttonText: "Apply Now",
      color: "#7c3aed"
    },
    { 
      id: "faculty-portal",
      icon: "Login", 
      title: "Faculty Access", 
      description: "Dedicated portal for faculty to manage courses, grading, and student interactions",
      action: "/login",
      buttonText: "Faculty Login", 
      color: "#059669"
    }
  ],

  // Footer Links
  footerLinks: {
    'Academics': ['Undergraduate Programs', 'Graduate Programs', 'Online Learning', 'Research Centers'],
    'Admissions': ['Apply Now', 'Tuition & Fees', 'Financial Aid', 'International Students'],
    'Campus Life': ['Student Housing', 'Clubs & Organizations', 'Sports & Recreation', 'Events Calendar'],
    'Quick Links': ['Student Portal', 'Faculty Portal', 'Application Form', 'Contact Us']
  }
};

export { universityConfig };