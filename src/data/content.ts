export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

export const TOP_NAV_ITEMS: NavLink[] = [
  { label: "About", href: "#about", hasDropdown: true, isActive: true },
  { label: "What We Do", href: "#what-we-do", hasDropdown: true },
  { label: "Jobs", href: "#jobs", hasDropdown: true },
  { label: "Projects", href: "#projects" },
  { label: "TG Academy", href: "#academy" },
  { label: "Strategic Partnership", href: "#partnership" },
  { label: "Pricing", href: "#pricing" },
  { label: "Book a Consultation", href: "#consultation" },
];

export const LMS_COURSES = [
  "Business Analysis",
  "Design Thinking",
  "Effective Communication",
  "Entrepreneurship",
  "Career Development",
  "Business Model",
];

export const CORPORATE_TRAINING_POINTS = [
  "Leadership Training",
  "Strategic Planning and Implementation",
  "Project Management",
  "Sustainability Training",
  "Customised Training",
];

export const PERSONALISED_TRAINING_POINTS = [
  "Leadership Development",
  "Soft Skills Development",
  "Industry Specific Knowledge",
  "Technical Skills Enhancement",
  "Time Management and Productivity",
  "Career Development",
];

export const CAPACITY_DEVELOPMENT_POINTS = [
  "Tailored Training Programs",
  "Expert-Led Workshops",
  "Personalized Mentorship",
  "Technical Skills Enhancement",
  "Collaborative Learning Environment",
  "Ongoing Support and Resources",
];

export const MANAGEMENT_PROGRAM_POINTS = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export const TRANSFORMATION_HUB_POINTS = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainability Leadership",
  "Communication Skills",
  "Business Model",
];

export const CONSULTANT_FEATURES = [
  {
    title: "Expert-Led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshops",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Aisha Yusuf",
    role: "Founder, CraftHub NG",
    quote:
      "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
    avatar: "/images/avatar-1.png",
  },
  {
    name: "John Davies",
    role: "Marketing Manager, E-Commerce Emporium",
    quote:
      "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
    avatar: "/images/avatar-2.png",
  },
  {
    name: "Chinonso Nwankwo",
    role: "HR Director, FutureTech Solutions",
    quote:
      "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
    avatar: "/images/avatar-3.png",
  },
  {
    name: "Theresa Webb",
    role: "Creative Director, Studio Noir",
    quote:
      "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
    avatar: "/images/avatar-4.jpg",
  },
];

export const FOOTER_SECTIONS = {
  whatWeDo: [
    "Sustainability Services",
    "Strategy Planning and Implementation",
    "Tech Talent Solutions",
    "Training and Development",
    "IT Consulting Services",
    "Social Impact",
    "Talent Recruitment",
  ],
  company: [
    "About",
    "Jobs",
    "Projects",
    "Our Founder",
    "Business Model",
    "The Team",
    "Contact Us",
    "Blog",
    "FAQs",
    "Testimonials",
  ],
  solution: [
    "Tobams Group Academy",
    "Help a Tech Talent",
    "Campus Ambassadors Program",
    "Join Our Platform",
    "Pricing",
    "Book a Consultation",
    "Join Our Slack Community",
  ],
};
